

var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;




var state = {
chuck:{
  xPos:100,
  yPos:500,
  size: 50,
},

clouds:[],

cloud: {
  xPos:100,
  yPos:350,
  size:170,
},
cloud2: {
  xPos:750,
  yPos:250,
  size:170,
},
cloud3: {
  xPos:100,
  yPos:80,
  size:170,
},
lightning:{
  xPos:400,
  yPos:280,
  size:200,
},
lightning2:{
  xPos:500,
  yPos:50,
  size:200,
},
upPressed: false,
leftPressed: false,
rightPressed: false,
downPressed: false,
gameMode: {
  question: false,
  yesButton: false,
  noButton: false,
  noCoins: false,
},
score: [],
runningscore:0,
};


var cloud1 = {
  xPos:100,
  yPos:350,
  size:120,
}

var cloud2 = {
  xPos:750,
  yPos:250,
  size:170,
}

var cloud3 = {
  xPos:100,
  yPos:80,
  size:170,
}

var lightning = {
  xPos:400,
  yPos:280,
  size:200,
}

var lightning2 = {
  xPos:500,
  yPos:50,
  size:200,
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
            console.log("meet");
          }
        }
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
