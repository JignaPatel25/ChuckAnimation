var state = {
chuck:{
  xPos:100,
  yPos:100,
  size: 30,
},

cloud: {
  xPos:200,
  yPos:100,
  size: 50,
}
};


var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var plainBackground = document.querySelector("#background");
ctx.drawImage(plainBackground,0,0,canvas.width,canvas.height);
console.log();


function drawCharacter(){
  var character = document.querySelector("#Chuck");
  ctx.drawImage(character,state.chuck.xPos,state.chuck.yPos,state.chuck.size, state.chuck.size);
};

drawCharacter();

 function drawCloud() {
  var cloud = document.querySelector("#Cloud");
  ctx.drawImage(cloud,state.cloud.xPos,state.cloud.yPos,state.cloud.size, state.cloud.size);
  console.log("cloud");
};

drawCloud();
