var state = {
chuck:{
  xPos:100,
  yPos:100,
  size: 50,
}




}




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


  function animate() {
    drawBackground();
    drawCharacter();
    }
    animate();
 setInterval(animate, 40);


//StartGameEngine(canvas, config, runGame);


window.addEventListener("keydown", function (event) {
  console.log("pressed a key: " + event.key);
      if(event.key === "ArrowUp"){
          state.chuck.yPos = state.chuck.yPos -4;
      }
      if(event.key === "ArrowDown"){
          state.chuck.yPos = state.chuck.yPos  +4;
      }
      if(event.key === "ArrowLeft"){
        state.chuck.xPos = state.chuck.xPos  -4;
      }
      if (event.key === "ArrowRight"){
        state.chuck.xPos = state.chuck.xPos + 4;
      }
      });



// function resizeCanvas() {
//    canvas.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
//    canvas.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
//    WIDTH = canvas.width;
//    HEIGHT = canvas.height;
// }
