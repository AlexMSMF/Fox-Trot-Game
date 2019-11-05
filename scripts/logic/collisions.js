//  COLLIDING CHICKEN...............\

function collidesChicken() {
  if (
    x < xChicken + (widthColChicken - 30) &&
    x + (widthCol - 10) > xChicken &&
    y < yChicken + (heightRowChicken - 50) &&
    y + (heightRow - 10) > yChicken
  ) {
    scores = scores + 5;
    chickenAppear();
    audio1.src = "./Music/Picked-Coin-2.wav";
  }
}

// COLLIDING RABBIT-----------------\

function collidesRabbit() {
  if (
    x < xRabbit + (widthColRabbit - 30) &&
    x + (widthCol - 10) > xRabbit &&
    y < yRabbit + (heightRowRabbit - 50) &&
    y + (heightRow - 20) > yRabbit
  ) {
    scores = scores + 2;
    rabbitAppear();
    audio1.src = "./Music/Picked-Coin.wav";
  }
}

// COLLIDING HUNTER RIGHT-----------------\

function collidesHunterRight() {
  if (
    x < hunterRightX + (hunterRightWidth - 55) &&
    x + (widthCol - 10) > hunterRightX &&
    y < hunterRightY + (hunterRightHeight - 110) &&
    y + (heightRow - 20) > hunterRightY
  ) {
    lifes--;

    audio1.src = "./Music/ouch.mp3";

    if (lifes <= 0) {
      canvasLoc.style.display = "none";
      story.style.display = "none";
      finalScreenLoose.style.display = "flex";
      showScore = scores;
      audio.src = "./Music/loose-sound.mp3";

      counter = 60;
      lifes = 3;
      scores = 0;
    } else {
      x = 325;
      y = 480;
    }
  }
}

// COLLIDING HUNTER LEFT-----------------\
function collidesHunterLeft() {
  if (
    x < hunterLeftX + (hunterLeftWidth - 50) &&
    x + (widthCol - 30) > hunterLeftX &&
    y < hunterLeftY + (hunterLeftHeight - 90) &&
    y + (heightRow - 20) > hunterLeftY
  ) {
    lifes--;

    audio1.src = "./Music/ouch.mp3";

    if (lifes <= 0) {
      canvasLoc.style.display = "none";
      story.style.display = "none";
      finalScreenLoose.style.display = "flex";
      showScore = scores;
      audio.src = "./Music/loose-sound.mp3";

      counter = 60;
      lifes = 3;
      scores = 0;
    } else {
      x = 325;
      y = 480;
    }
  }
}

// COLLIDING DOG-----------------\

function collidesDog() {
  if (
    x < xDog + (widthColDog - 10) &&
    x + (widthCol - 10) > xDog &&
    y < yDog + (heightRowDog - 50) &&
    y + (heightRow - 10) > yDog
  ) {
    scores = scores - 3;
    yDog = Math.floor(Math.random() * (maxYDog - minYDog + 1)) + minYDog;
    audio1.src = "./Music/ouch.mp3";
  }
}

// COLLIDING OFF----------
