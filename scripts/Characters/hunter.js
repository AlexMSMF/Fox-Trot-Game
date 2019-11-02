//HUNTER ENEMY
canvas = document.getElementById("canvas");

ctx = canvas.getContext("2d");

let hunterRight = new Image();

hunterRight.src = "./images/hunter-right.png";

hunterRightX = 0;
hunterRightY = 0;
hunterRightWidth = 125;
hunterRightHeight = 125;

vlX_HunterRight = 15;
vlY_HunterRight = 15;

function drawHunterRight(ctx, hunterRight) {
  if (!hunterRight.complete) {
    setTimeout(function() {
      drawHunterRight(ctx, hunterRight);
    }, 50);
    return;
  }

  ctx.drawImage(
    hunterRight,
    hunterRightX - 20,
    hunterRightY - 20,
    hunterRightWidth,
    hunterRightHeight
  );
}

function updateRightHunter() {
  ctx.clearRect(0, 0, hunterRightWidth, hunterRightHeight);
  drawImage();
  foxLocation();
  drawImageChicken();
  drawImageRabbit();
  drawImageDog();

  drawHunterRight(ctx, hunterRight);
  drawHunterLeft(ctx, hunterLeft);

  hunterRightX += vlX_HunterRight;
  hunterRightY += vlY_HunterRight;

  if (
    hunterRightY + vlY_HunterRight > 490 ||
    hunterRightY + vlY_HunterRight < 0
  ) {
    vlY_HunterRight = vlY_HunterRight * -1;
  }

  if (
    hunterRightX + vlX_HunterRight > 570 ||
    hunterRightX + vlX_HunterRight < 0
  ) {
    vlX_HunterRight = vlX_HunterRight * -1;
  }
}

setInterval(updateRightHunter, 200);

//HUNTER ENEMY LEFT SIDE-------------------------

let hunterLeft = new Image();

hunterLeft.src = "./images/hunter-left.png";

hunterLeftX = 500;
hunterLeftY = 500;
hunterLeftWidth = 125;
hunterLeftHeight = 125;

vlX_HunterLeft = 20;
vlY_HunterLeft = 20;

function drawHunterLeft(ctx, hunterLeft) {
  if (!hunterLeft.complete) {
    setTimeout(function() {
      drawHunterLeft(ctx, hunterLeft);
    }, 50);
    return;
  }

  ctx.drawImage(
    hunterLeft,
    hunterLeftX,
    hunterLeftY,
    hunterLeftWidth,
    hunterLeftHeight
  );
}

function updateLeftHunter() {
  ctx.clearRect(0, 0, hunterLeftWidth, hunterLeftHeight);
  drawImage();
  foxLocation();
  drawImageChicken();
  drawImageRabbit();
  drawImageDog();

  drawHunterRight(ctx, hunterRight);
  drawHunterLeft(ctx, hunterLeft);

  hunterLeftX += vlX_HunterLeft;
  hunterLeftY += vlY_HunterLeft;

  if (hunterLeftY + vlY_HunterLeft > 490 || hunterLeftY + vlY_HunterLeft < 0) {
    vlY_HunterLeft = vlY_HunterLeft * -1;
  }

  if (hunterLeftX + vlX_HunterLeft > 570 || hunterLeftX + vlX_HunterLeft < 0) {
    vlX_HunterLeft = vlX_HunterLeft * -1;
  }
}

setInterval(updateLeftHunter, 200);

// drawHunterRight(ctx, hunterRight);
// drawHunterLeft(ctx, hunterLeft);
