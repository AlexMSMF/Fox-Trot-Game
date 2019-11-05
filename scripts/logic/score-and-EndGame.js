canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");

let counter = 1000;
let elapsedTime;
let lifes = 3;
let scores = 0;
let showScore;
let showLifes;
let min;
let sec;

// TIMER!!!---------------

function drawTime() {
  ctx.fillStyle = "#fff";
  ctx.font = "15px Arial";
  ctx.fillText(`Timer: ${min}:${Math.round(sec)}  `, 50, 15);
}

// LIFES!!!---------------
function lifesRemaining() {
  ctx.fillStyle = "#fff"; //color for your text
  ctx.font = "15px Arial"; //font style and size
  ctx.fillText(`Life: ${lifes} `, 300, 15);
}

// SCORE!!!!!---------------

function score() {
  //   ctx.fillStyle = "#E7E0CA"; //your rect color
  //   ctx.fillRect(0, 0, 650, 20); //your rect size
  ctx.fillStyle = "#fff"; //color for your text
  ctx.font = "15px Arial"; //font style and size
  ctx.fillText(`Score: ${scores}`, 550, 15);
}

function counterAtZero() {
  counter = counter - 0.1;
  if (counter >= 120) {
    min = 2;
    sec = counter % 60;
  } else if (counter >= 60) {
    min = 1;
    sec = counter % 60;
  } else if (counter > 0) {
    min = 0;
    sec = counter % 60;
  } else {
    canvasLoc.style.display = "none";
    story.style.display = "none";
    finalScreenLoose.style.display = "none";
    finalScreenWin.style.display = "";
    showScore = scores;
    if (lifes === 3) {
      showLifes = 0;
    } else if (lifes === 2) {
      showLifes = 1;
    } else {
      showLifes = 2;
    }
    scoreText.innerHTML = `Well done little <span class="trotWin"> Fox</span> <br/> You scored <span class="trotWin"> ${showScore}</span> points and you've been hit <span class="trotWin"> ${showLifes}</span> times`;
    audio.src = "./Music/Spring-Waltz-saiB.mp3";
    audio1.src = "";
    x = 20;
    y = 480;

    pointsAtZero();
  }
}

function pointsAtZero() {
  if (counter <= 0 && scores <= 0) {
    canvasLoc.style.display = "none";
    story.style.display = "none";
    finalScreenLoose.style.display = "flex";
    finalScreenWin.style.display = "none";
    showScore = scores;
    audio.src = "./Music/loose-sound.mp3";
  }

  counter = 60;
  lifes = 3;
  scores = 0;

  x = 20;
  y = 480;
}
