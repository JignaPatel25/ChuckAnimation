var state = {
chuck:{
  xPos:100,
  yPos:500,
  size: 50,
},
cloud: {
  xPos:200,
  yPos:100,
  size: 50,
},
lightning:{
  xPos: 400,
  yPos:400,
  size:80,
}
};


var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


function drawBackground(){
  var plainBackground = document.querySelector("#background");
  ctx.drawImage(plainBackground,0,0,canvas.width,canvas.height);
  console.log();
}

function drawCharacter(){
  var character = document.querySelector("#Chuck");
  ctx.drawImage(character,state.chuck.xPos,state.chuck.yPos,state.chuck.size, state.chuck.size);
}

function drawCloud() {
 var cloud = document.querySelector("#Cloud");
 ctx.drawImage(cloud,state.cloud.xPos,state.cloud.yPos,state.cloud.size, state.cloud.size);
 console.log("cloud");
};


function drawLightning() {
var cloud = document.querySelector("#lightning");
ctx.drawImage(cloud,state.lightning.xPos,state.lightning.yPos,state.lightning.size, state.lightning.size);
console.log("lightning");
};


  function animate() {
    drawBackground();
    drawCloud();
    drawLightning();
    drawCharacter();

    }
    animate();
 setInterval(animate, 40);

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
