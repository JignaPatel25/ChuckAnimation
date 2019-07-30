

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

  function animate() {
    drawBackground();
    drawCloud();
    drawCharacter();
    chuckmeetCloud();
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
