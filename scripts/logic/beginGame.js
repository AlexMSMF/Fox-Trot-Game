let canvasLoc = document.getElementById("canvasLoc");
let story = document.getElementById("story");
let gamePlay = document.getElementById("gamePlay");

//STARTING
let buttonStart = document.getElementById("startGame");

//INSTRUCTIONS
let instructions = document.getElementById("instGame");

let instructionsStart = document.getElementById("startGameInstruction");

let canvasAppear = () => {
  canvasLoc.style.display = "";
  story.style.display = "none";
  gamePlay.style.display = "none";
  audio.src = "./Music/chip-song.ogg";
  audio.loop = true;
  counter = 60;
};

let instructionButton = () => {
  gamePlay.style.display = "";
  story.style.display = "none";
};

let canvasAppearInstructions = () => {
  canvasLoc.style.display = "";
  story.style.display = "none";
  gamePlay.style.display = "none";
  audio.src = "./Music/chip-song.ogg";
  audio.loop = true;
  counter = 60;
};

buttonStart.addEventListener("click", canvasAppear);
instructions.addEventListener("click", instructionButton);
instructionsStart.addEventListener("click", canvasAppearInstructions);
