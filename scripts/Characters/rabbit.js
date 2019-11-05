var rabbitPlayer = new Image();
rabbitPlayer.src = "./images/istockrabbit.png";

let xRabbit;
let yRabbit;

let minXRabbit = 20;
let maxXRabbit = 600;

let minYRabbit = 20;
let maxYRabbit = 500;

let srcXRabbit;
let srcYRabbit;
let pickUpRabbit = 1;
let pickRightRabbit = 2;
let pickDownRabbit = 3;
let pickLeftRabbit = 4;

let sheetWidthRabbit = 576;
let sheetHeightRabbit = 384;
let numColsRabbit = 9;
let numRowsRabbit = 6;
let widthColRabbit = sheetWidthRabbit / numColsRabbit;
let heightRowRabbit = sheetHeightRabbit / numRowsRabbit;

var currentFrameRabbit = 0;

//VARIABLE MOVEMENT PLAYER and EVENTS

(leftRabbit = true),
  (rightRabbit = true),
  (upRabbit = true),
  (downRabbit = true);

//UPDATE FRAMES

function updateFrameRabbit() {
  ctx.clearRect(xRabbit, yRabbit, widthColRabbit, heightRowRabbit);
  currentFrameRabbit = ++currentFrameRabbit % numColsRabbit;
  srcXRabbit = currentFrameRabbit * widthColRabbit;

  if (upRabbit) {
    srcYRabbit = pickUpRabbit * heightRowRabbit;
  } else if (downRabbit) {
    srcYRabbit = pickDownRabbit * heightRowRabbit;
  } else if (rightRabbit) {
    srcYRabbit = pickLeftRabbit * heightRowRabbit;
  } else if (leftRabbit) {
    srcYRabbit = pickRightRabbit * heightRowRabbit;
  }
}

//DRAW IMAGES
function drawImageRabbit() {
  updateFrameRabbit();
  ctx.drawImage(
    rabbitPlayer,
    srcXRabbit,
    srcYRabbit,
    widthColRabbit,
    heightRowRabbit,
    xRabbit,
    yRabbit,
    widthColRabbit,
    heightRowRabbit
  );
}

function rabbitAppear() {
  xRabbit =
    Math.floor(Math.random() * (maxYRabbit - minYRabbit + 1)) + minYRabbit;
  yRabbit =
    Math.floor(Math.random() * (maxYRabbit - minYRabbit + 1)) + minYRabbit;
}

setInterval(function() {
  rabbitAppear();
  drawImageRabbit();
}, 3000);

//CLEAR CANVAS

function updateCanvasRabbit() {
  ctx.clearRect(0, 0, srcXRabbit, srcYRabbit);
  drawImage();
  foxLocation();
  drawImageChicken();
  drawImageRabbit();
  drawImageDog();
  collidesHunterRight();
  collidesHunterLeft();
  collidesChicken();
  collidesRabbit();
  collidesDog();

  drawHunterRight(ctx, hunterRight);
  drawHunterLeft(ctx, hunterLeft);
}
