

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
<<<<<<< Updated upstream
clouds:[],
=======
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
coins: [],
 runningscore:0,
>>>>>>> Stashed changes
};

var cloud1 = {
  xPos:100,
  yPos:350,
  size:170,
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

<<<<<<< Updated upstream
function drawCloud(){
var clouds = document.querySelector("#Cloud");
for (var i = 0; i < state.clouds.length; i = i + 1) {
=======
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
>>>>>>> Stashed changes

    var whiteCloud = state.clouds[i];
ctx.drawImage(clouds, whiteCloud.xPos, whiteCloud.yPos, whiteCloud.size, whiteCloud.size)
}
}

<<<<<<< Updated upstream
// function chuckmeetCloud() {
//       for (var i = 0; i < state.clouds.length; i = i + 1) {
//         var cloud = state.clouds[i];
//         console.log(cloud.yPos);
//         if (cloud.yPos <= state.Chuck.yPos + state.Chuck.size &&
//           state.Chuck.yPos <= cloud.yPos + cloud.size &&
//           cloud.xPos <= state.Chuck.xPos + state.Chuck.size &&
//           state.Chuck.xPos <= cloud.xPos + cloud.size){
//             console.log("meet")
//           }
//         }
//       }
=======
function drawScore(){
  ctx.fillStyle = "black";
 ctx.font = "40px Courier New";
  ctx.fillText("Score:" + state.runningscore, 20, 40);
}

function drawLightning2() {
var cloud = document.querySelector("#lightning");
ctx.drawImage(cloud,state.lightning2.xPos,state.lightning2.yPos,state.lightning2.size, state.lightning2.size);
console.log("lightning2");
};

function characterMeetsCloud() {
  for (var i = 0; i < state.cloud.length; i = i + 1) {
    var cloud = state.cloud[i];
    if (cloud.y <= state.character.y + state.character.size &&
      state.character.y <= cloud.y + cloud.size &&
      cloud.x <= state.character.x + state.character.size &&
      state.character.x <= cloud.x + cloud.size) {
    state.touchedCloud = cloud;
  console.log("characterMeetsCloud");
    }
  }
}
function questionPage() {
  if(state.gameMode.question) {
  questionPageScreen();
	ctx.fillStyle = "black";
	ctx.font = "20px Courier New";
	ctx.fillText(state.touchedCoin.question1, canvas.width/3, canvas.height/5);
  ctx.fillText(state.touchedCoin.question2, canvas.width/3, 5*canvas.height/20);
  ctx.fillText(state.touchedCoin.question3, canvas.width/3, 6*canvas.height/20);
  ctx.fillText(state.touchedCoin.question4, canvas.width/3, 7*canvas.height/20);
  ctx.fillText(state.touchedCoin.question5, canvas.width/3, 8*canvas.height/20);
  ctx.fillText(state.questionTimer, canvas.width/13, canvas.height/8);
	yesButton();
	noButton();
  }
>>>>>>> Stashed changes

  function animate() {
    drawBackground();
    drawCloud();
    drawCharacter();
<<<<<<< Updated upstream
    // chuckmeetCloud();
=======
    drawCloud2();
    drawCloud3();
    drawLightning();
    drawLightning2();
    characterMeetsCloud();
    drawScore();
>>>>>>> Stashed changes
  }
    animate();
   setInterval(animate, 40);



//StartGameEngine(canvas, config, runGame);
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes

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
