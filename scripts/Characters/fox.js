//Starting the Canvas!
let canvas = document.getElementById("canvas");

let ctx = canvas.getContext("2d");

//ALL THE VARIABLES NEEDED FOR SPRITESHEET
var foxPlayer = new Image();
foxPlayer.src = "./images/fox-1.1/PNG/48x64/fox-NESW-bright.png";

let x = 325;
let y = 480;
let srcX;
let srcY;
let pickUp = 0;
let pickRight = 1;
let pickDown = 2;
let pickLeft = 3;
let sheetWidth = 144;
let sheetHeight = 256;
let numCols = 3;
let numRows = 4;
let widthCol = sheetWidth / numCols;
let heightRow = sheetHeight / numRows;

var currentFrame = 0;

//VARIABLE MOVEMENT PLAYER and EVENTS

(left = true), (right = true), (up = true), (down = true);

function moveUp() {
  y -= 10;
  srcY -= 10;
  up = true;
  left = false;
  right = false;
  down = false;
}

function moveDown() {
  y += 10;
  srcY += 10;
  down = true;
  up = false;
  left = false;
  right = false;
}

function moveLeft() {
  x -= 10;
  srcX -= 10;
  right = true;
  up = false;
  left = false;
  down = false;
}

function moveRight() {
  x += 10;
  srcX += 10;
  left = true;
  up = false;
  right = false;
  down = false;
}

document.addEventListener("keydown", function(e) {
  switch (e.keyCode) {
    case 38:
      moveUp();
      break;
    case 40:
      moveDown();
      break;
    case 37:
      moveLeft();
      break;
    case 39:
      moveRight();
      break;
  }
  updateCanvas();
});

//UPDATE FRAMES

function updateFrame() {
  ctx.clearRect(x, y, widthCol, heightRow);
  currentFrame = ++currentFrame % numCols;
  srcX = currentFrame * widthCol;

  if (up) {
    srcY = pickUp * heightRow;
  } else if (down) {
    srcY = pickDown * heightRow;
  } else if (right) {
    srcY = pickLeft * heightRow;
  } else if (left) {
    srcY = pickRight * heightRow;
  }
  drawTime();
  lifesRemaining();
  score();
}

function foxLocation() {
  ctx.clearRect(0, 0, 650, 550);
  drawImage();
  if (y > 500) {
    y = 490;
  } else if (y < 0) {
    y = 0;
  }

  if (x > 650) {
    x = 620;
  } else if (x < 0) {
    x = 0;
  }
}

//DRAW IMAGES
function drawImage() {
  updateFrame();

  ctx.drawImage(
    foxPlayer,
    srcX,
    srcY,
    widthCol,
    heightRow,
    x,
    y,
    widthCol,
    heightRow
  );
}

//COUNTER FOR TIMER-----------

setInterval(function() {
  drawImage();
  counterAtZero();
}, 100);

//CLEAR CANVAS

function updateCanvas() {
  ctx.clearRect(0, 0, srcX, srcY);
  drawImage();
  foxLocation();
  drawImageChicken();
  drawImageRabbit();
  drawImageDog();

  collidesChicken();
  collidesRabbit();
  collidesDog();

  collidesHunterRight();
  collidesHunterLeft();

  drawHunterRight(ctx, hunterRight);
  drawHunterLeft(ctx, hunterLeft);
}
