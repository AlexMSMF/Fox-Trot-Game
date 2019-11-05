canvasLoc = document.getElementById("canvasLoc");

let finalWin = document.getElementById("finalScreenWin");
let finalLoose = document.getElementById("finalScreenLoose");
let scoreText = document.getElementById("scoreText");
scoreText.style.color = "white";

let restartGameLoose = document.getElementById("startGameAgain");
let restartGameLooseInst = document.getElementById("instGameAgain");
let restartGameWin = document.getElementById("startGameAgainWin");

let canvasAppearAfterWin = () => {
  canvasLoc.style.display = "";
  story.style.display = "none";
  gamePlay.style.display = "none";
  finalScreenLoose.style.display = "none";
  finalScreenWin.style.display = "none";
  audio.src = "./Music/chip-song.ogg";
  counter = 60;
  lifes = 3;
  scores = 0;
  x = 20;
  y = 480;
};

let canvasAppearAfterLoose = () => {
  canvasLoc.style.display = "";
  story.style.display = "none";
  gamePlay.style.display = "none";
  finalScreenLoose.style.display = "none";
  finalScreenWin.style.display = "none";
  audio.src = "./Music/chip-song.ogg";
  counter = 60;
  lifes = 3;
  scores = 0;
  x = 20;
  y = 480;
};

let instructionButtonAfterLoose = () => {
  gamePlay.style.display = "";
  story.style.display = "none";
  finalScreenLoose.style.display = "none";
  finalScreenWin.style.display = "none";
  lifes = 3;
};

restartGameWin.addEventListener("click", canvasAppearAfterWin);
restartGameLoose.addEventListener("click", canvasAppearAfterLoose);
restartGameLooseInst.addEventListener("click", instructionButtonAfterLoose);
