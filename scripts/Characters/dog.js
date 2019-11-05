//FOX PLAYER 2--------
//ALL THE VARIABLES NEEDED FOR SPRITESHEET
var dogPlayer = new Image();
dogPlayer.src = "./images/cao_completo.png";

minYDog = 10;
maxYDog = 500;

let xDog = 580;
let yDog;
let vlX_Dog = 25;
let vlY_Dog;

let srcXDog;
let srcYDog;
let pickUpDog = 0;
let pickRightDog = 1;
let pickDownDog = 2;
let pickLeftDog = 0;
let pickStayDog = 0;
let sheetWidthDog = 143;
let sheetHeightDog = 115;
let numColsDog = 3;
let numRowsDog = 4;
let widthColDog = sheetWidthDog / numColsDog;
let heightRowDog = sheetHeightDog / numRowsDog;

var currentFrameDog = 0;

//VARIABLE MOVEMENT PLAYER and EVENTS

(leftDog = true),
  (rightDog = true),
  (upDog = true),
  (downDog = true),
  (stayDog = true);

// function moveUpDog() {
//   yDog -= 10;
//   srcYDog -= 10;
//   upDog = true;
//   leftDog = false;
//   rightDog = false;
//   downDog = false;
//   stayDog = false;
// }

// function moveDownDog() {
//   yDog += 10;
//   srcYDog += 10;
//   downDog = true;
//   upDog = false;
//   leftDog = false;
//   rightDog = false;
//   stayDog = false;
// }

// function moveLeftDog() {
//   xDog -= 10;
//   srcXDog -= 10;
//   rightDog = true;
//   upDog = false;
//   leftDog = false;
//   downDog = false;
//   stayDog = false;
// }

// function moveRightDog() {
//   xDog += 10;
//   srcXDog += 10;
//   leftDog = true;
//   upDog = false;
//   rightDog = false;
//   downDog = false;
//   stayDog = false;
// }

// function stayQuiet() {
//   leftDog = false;
//   upDog = false;
//   rightDog = false;
//   downDog = false;
//   stayDog = true;
// }

// document.addEventListener("keydown", function(e) {
//   switch (e.keyCode) {
//     case 87:
//       moveUpDog();
//       break;
//     case 83:
//       moveDownDog();
//       break;
//     case 65:
//       moveLeftDog();
//       break;
//     case 68:
//       moveRightDog();
//       break;
//     default:
//   }
//   updateCanvasDog();
// });

//UPDATE FRAMES

function updateFrameDog() {
  ctx.clearRect(xDog, yDog, widthColDog, heightRowDog);
  currentFrameDog = ++currentFrameDog % numColsDog;
  srcXDog = currentFrameDog * widthColDog;

  if (stayDog) {
    srcYDog = pickStayDog * heightRowDog;
  } else if (downDog) {
    srcYDog = pickDownDog * heightRowDog;
  } else if (rightDog) {
    srcYDog = pickLeftDog * heightRowDog;
  } else if (leftDog) {
    srcYDog = pickRightDog * heightRowDog;
  } else if (upDog) {
    srcYDog = pickUpDog * heightRowDog;
  }
}

//DRAW IMAGES

function drawDogRun(ctx, dogPlayer) {
  if (!dogPlayer.complete) {
    setTimeout(function() {
      drawDogRun(ctx, dogPlayer);
    }, 50);
    return;
  }

  drawImageDog();
}

function drawImageDog() {
  updateFrameDog();

  ctx.drawImage(
    dogPlayer,
    srcXDog,
    srcYDog,
    widthColDog,
    heightRowDog,
    xDog,
    yDog,
    widthColDog,
    heightRowDog
  );
}

function startRunDog() {
  xDog += vlX_Dog;
  // yDog += vlY_Dog;

  if (yDog + vlY_Dog > 490 || yDog + vlY_Dog < 0) {
    vlY_Dog = vlY_Dog * -1;
  }

  if (xDog + vlX_Dog > 570 || xDog + vlX_Dog < 0) {
    vlX_Dog = vlX_Dog * -1;
    xDog = 580;
    yDog = y;
    // yDog = Math.floor(Math.random() * (maxYDog - minYDog) + minYDog);
  }
}

setInterval(function() {
  drawImageDog();
  startRunDog();
}, 200);

//CLEAR CANVAS

function updateCanvasDog() {
  ctx.clearRect(0, 0, srcXDog, srcYDog);
  drawImage();
  foxLocation();
  drawImageChicken();
  drawImageRabbit();
  drawImageDog();

  drawHunterRight(ctx, hunterRight);
  drawHunterLeft(ctx, hunterLeft);
}
