canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");

var chickenPlayer = new Image();
chickenPlayer.src = "./images/chicken.png";

let xChicken;
let yChicken;

let minXChicken = 20;
let maxXChicken = 600;

let minYChicken = 20;
let maxYChicken = 500;

let srcXChicken;
let srcYChicken;
let pickUpChicken = 2;
let pickRightChicken = 1;
let pickDownChicken = 2;
let pickLeftChicken = 3;
let sheetWidthChicken = 96;
let sheetHeightChicken = 128;
let numColsChicken = 3;
let numRowsChicken = 4;
let widthColChicken = sheetWidthChicken / numColsChicken;
let heightRowChicken = sheetHeightChicken / numRowsChicken;

var currentFrameChicken = 0;

//VARIABLE MOVEMENT PLAYER and EVENTS

(leftChicken = true),
  (rightChicken = true),
  (upChicken = true),
  (downChicken = true);

//UPDATE FRAMES

function updateFrameChicken() {
  ctx.clearRect(xChicken, yChicken, widthColChicken, heightRowChicken);
  currentFrameChicken = ++currentFrameChicken % numColsChicken;
  srcXChicken = currentFrameChicken * widthColChicken;

  if (upChicken) {
    srcYChicken = pickUpChicken * heightRowChicken;
  } else if (downChicken) {
    srcYChicken = pickDownChicken * heightRowChicken;
  } else if (rightChicken) {
    srcYChicken = pickLeftChicken * heightRowChicken;
  } else if (leftChicken) {
    srcYChicken = pickRightChicken * heightRowChicken;
  }
}

function chickenAppear() {
  xChicken =
    Math.floor(Math.random() * (maxYChicken - minYChicken + 1)) + minYChicken;
  yChicken =
    Math.floor(Math.random() * (maxYChicken - minYChicken + 1)) + minYChicken;
}

//DRAW IMAGES
function drawImageChicken() {
  updateFrameChicken();

  ctx.drawImage(
    chickenPlayer,
    srcXChicken,
    srcYChicken,
    widthColChicken,
    heightRowChicken,
    xChicken,
    yChicken,
    widthColChicken,
    heightRowChicken
  );
}

setInterval(function() {
  chickenAppear();
  drawImageChicken();
}, 5000);

//CLEAR CANVAS

function updateCanvasChicken() {
  ctx.clearRect(0, 0, srcXChicken, srcYChicken);
  drawImageChicken();
  drawImage();
  foxLocation();

  drawImageRabbit();
  drawImageDog();

  drawHunterRight(ctx, hunterRight);
  drawHunterLeft(ctx, hunterLeft);
}
