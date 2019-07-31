var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var button1 = {
  x: 300,
  y: 300,
  width: 140,
  height: 70,
}

var button2 = {
  x: 500,
  y: 300,
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
    answered: false,
  },
score:[],
runningscore:0

};

// Question page

var cloud1 = {
  xPos:100,
  yPos:350,
  size:120,
  question1:"When your data is in the cloud",
  question2: "that means it is stored",
  question3: "in satellites in outer space.",
  correctAnswer: state.buttons[1],
  explanation: "#explanation1"
}

var cloud2 = {
  xPos:750,
  yPos:250,
  size:170,
  question1:"Access to the cloud is",
  question2: "usually cheaper than a traditional",
  question3: "desktop computer.",
  correctAnswer: state.buttons[0],
  explanation: "#explanation2"
}

var cloud3 = {
  xPos:200,
  yPos:80,
  size:170,
  question1:"You can access a cloud environment",
  question2: "from anywhere in the world",
  question3: "as you have an Internet connection.",
  explanation: "#explanation3"
}

var lightning = {
  xPos:400,
  yPos:280,
  size:200,
  question1:"The cloud is always safer",
  question2: "than local storage.",
  question3:"",
  correctAnswer: state.buttons[1],
  explanation: "#explanation4"
}

var lightning2 = {
  xPos:500,
  yPos:50,
  size:200,
  question1:"It’s more reliable just",
  question2: "to save your documents",
  question3:"directly onto your computer.",
  correctAnswer: state.buttons[1],
  explanation: "#explanation5"
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
    var whiteCloud = state.clouds[i];
ctx.drawImage(clouds, whiteCloud.xPos, whiteCloud.yPos, whiteCloud.size, whiteCloud.size);
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

      function questionPageScreen() {
        var plainBackground = document.getElementById("background");
        ctx.drawImage(plainBackground, 0, 0, canvas.width, canvas.height);
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

      canvas.addEventListener("click", function(event) {
        	var sc = document.getElementById("canvas");
        	var xClick = event.x + window.scrollX;
        	var yClick = event.y + window.scrollY;

        	for(var i = 0; i < state.buttons.length; i = i + 1){
        		var button = state.buttons[i];
        		if (xClick > button.x &&
        		    xClick < button.x + button.width &&
        		    yClick > button.y &&
        		    yClick < button.y + button.height) {
                  state.gameMode.answered=true;
                  console.log(state.gameMode.answered)
            if (button == state.touchedCloud.correctAnswer) {
                state.runningscore += 10;
              }

      }}})

      function explanationScreen(){
        if(state.gameMode.answered){
          console.log(state.gameMode.answered)
      var explanations = document.querySelector(state.touchedCloud.explanation);
      ctx.drawImage(explanations, 0, 0, canvas.width, canvas.height);
    }}

      function drawScore(){
        ctx.fillStyle = "black";
        ctx.font = "italic bold 35pt Abel"; //set the font name and font size
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
    explanationScreen();
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
