var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var button1 = {
  x: 300,
  y: 200,
  width: 140,
  height: 70,
}

var button2 = {
  x: 500,
  y: 200,
  width: 140,
  height: 70,
}

var state = {
chuck:{
  xPos:100,
  yPos:500,
  size: 50,
},
buttons: [button1,button2],
clouds:[],
gameMode: {
    question: false,
    trueButton: false,
    falseButton: false,
    noClouds: false,
  },
  score:[],
  runningscore:0,
};

// Question page

var cloud1 = {
  xPos:100,
  yPos:350,
  size:120,
  // x: Math.floor(Math.random()*(3*canvas.width/10))+(canvas.width/10),
  // y: Math.floor(Math.random()*(3*canvas.height/10))+(canvas.height/10),
  question1:"When your data is in the cloud",
  question2: "that means it is stored",
  question3: "in satellites in outer space.",
  correctAnswer: state.buttons[1]
}

var cloud2 = {
  xPos:750,
  yPos:250,
  size:170,
  // x: Math.floor(Math.random()*(3*canvas.width/10))+(canvas.width/10),
  // y: Math.floor(Math.random()*(3*canvas.height/10))+(canvas.height/10),
  question1:"Access to the cloud is",
  question2: "usually cheaper than a traditional",
  question3: "desktop computer.",
  correctAnswer: state.buttons[0]
}

var cloud3 = {
  xPos:100,
  yPos:80,
  size:170,
  // x: Math.floor(Math.random()*(3*canvas.width/10))+(canvas.width/10),
  // y: Math.floor(Math.random()*(3*canvas.height/10))+(canvas.height/10),
  question1:"You can access a cloud environment",
  question2: "from anywhere in the world",
  question3: "as you have an Internet connection.",
  correctAnswer: state.buttons[0]
}

var lightning = {
  xPos:400,
  yPos:280,
  size:200,
  // x: Math.floor(Math.random()*(3*canvas.width/10))+(canvas.width/10),
  // y: Math.floor(Math.random()*(3*canvas.height/10))+(canvas.height/10),
  question1:"The cloud is always safer",
  question2: "than local storage.",
  question3:"",
  correctAnswer: state.buttons[1]
}

var lightning2 = {
  xPos:500,
  yPos:50,
  size:200,
  // x: Math.floor(Math.random()*(3*canvas.width/10))+(canvas.width/10),
  // y: Math.floor(Math.random()*(3*canvas.height/10))+(canvas.height/10),
  question1:"It’s more reliable just",
  question2: "to save your documents",
  question3:"directly onto your computer.",
  correctAnswer: state.buttons[1]
}

state.clouds = [cloud1,cloud2,cloud3,lightning,lightning2]

function drawBackground(){
  var plainBackground = document.querySelector("#background");
  ctx.drawImage(plainBackground,0,0,canvas.width,canvas.height);
  console.log();
}

function drawCharacter(){
  var character = document.querySelector("#Chuck");
  ctx.drawImage(character,state.chuck.xPos,state.chuck.yPos,state.chuck.size, state.chuck.size);
}


function drawCloud(){
var clouds = document.querySelector("#Cloud");
for (var i = 0; i < state.clouds.length; i = i + 1) {

function drawCloud() {
 var cloud = document.querySelector("#Cloud");
 ctx.drawImage(cloud,state.cloud.xPos,state.cloud.yPos,state.cloud.size, state.cloud.size);
 console.log("cloud");
};

function drawCloud2() {
 var cloud2 = document.querySelector("#Cloud");
 ctx.drawImage(cloud2,state.cloud2.xPos,state.cloud2.yPos,state.cloud2.size, state.cloud2.size);
 console.log("cloud2");
};

function drawCloud3() {
 var cloud3 = document.querySelector("#Cloud");
 ctx.drawImage(cloud3,state.cloud3.xPos,state.cloud3.yPos,state.cloud3.size, state.cloud3.size);
 console.log("cloud3");
};

    var whiteCloud = state.clouds[i];
ctx.drawImage(clouds, whiteCloud.xPos, whiteCloud.yPos, whiteCloud.size, whiteCloud.size)
}
}

function chuckmeetCloud() {
      for (var i = 0; i < state.clouds.length; i = i + 1) {
        var cloud = state.clouds[i];
        if (cloud.yPos <= state.chuck.yPos + state.chuck.size &&
          state.chuck.yPos <= cloud.yPos + cloud.size &&
          cloud.xPos <= state.chuck.xPos + state.chuck.size &&
          state.chuck.xPos <= cloud.xPos + cloud.size){
		      state.touchedCloud = cloud;
		      state.gameMode.question = true;
		      state.clouds.splice(i,1)
        }
      }
    }

      // Button code

      function trueButton() {
        var button = state.buttons[0];
        ctx.fillStyle = "white";
        ctx.fillRect(button.x, button.y, button.width, button.height);

        ctx.fillStyle = "black";
        ctx.fillText("True", button.x + 40, button.y + 50);

      }

      function falseButton() {
        var button = state.buttons[1];
        ctx.fillStyle = "white";
        ctx.fillRect(button.x, button.y, button.width, button.height);

        ctx.fillStyle = "black";
        ctx.fillText("False", button.x + 40, button.y + 50);

      }

      function questionPage() {
        if(state.gameMode.question) {
        questionPageScreen();
      	ctx.fillStyle = "black";
      	ctx.font = "30px Abel";
      	ctx.fillText(state.touchedCloud.question1, canvas.width/3, canvas.height/5);
        ctx.fillText(state.touchedCloud.question2, canvas.width/3, 5*canvas.height/20);
        ctx.fillText(state.touchedCloud.question3, canvas.width/3, 6*canvas.height/20);
      	trueButton();
      	falseButton();
      }}

      // function clearScreen() {
      //   ctx.fillStyle = "white"
      //   ctx.fillRect(0, 0, canvas.width, canvas.height);
      // }

      function questionPageScreen() {
        var plainBackground = document.getElementById("background");
        ctx.drawImage(plainBackground, 0, 0, canvas.width, canvas.height);
      }

      function drawScore(){
        ctx.fillStyle = "black";
        ctx.font = "italic bold 35pt Tahoma"; //set the font name and font size
        ctx.fillText("Score:" + state.runningscore, 20, 40);
        var c = document.getElementById("myCanvas");


      }

  function animate() {
    drawBackground();
    drawCloud();
    drawCharacter();
    chuckmeetCloud();
    questionPage()
    drawScore();
  }
    animate();
   setInterval(animate, 40);



//StartGameEngine(canvas, config, runGame);


window.addEventListener("keydown", function (event) {
  console.log("pressed a key: " + event.key);
      if(event.key === "ArrowUp"){
          state.chuck.yPos = state.chuck.yPos -12;
      }
      if(event.key === "ArrowDown"){
          state.chuck.yPos = state.chuck.yPos  +12;
      }
      if(event.key === "ArrowLeft"){
        state.chuck.xPos = state.chuck.xPos  -12;
      }
      if (event.key === "ArrowRight"){
        state.chuck.xPos = state.chuck.xPos + 12;
      }
    });
