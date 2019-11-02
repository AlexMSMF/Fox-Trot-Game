let audio = document.getElementById("audio");
audio.src = "./Music/menu-theme.mp3";

let audio1 = document.getElementById("audio1");

let buttonPlay = document.getElementById("btn");
let buttonStop = document.getElementById("btn1");
let buttonStopGame = document.getElementById("btnStop");

let playMusic = () => audio.play();
let stopMusic = () => audio.pause();
let stopMusicInGame = () => audio.pause();

buttonPlay.addEventListener("click", playMusic);

buttonStop.addEventListener("click", stopMusic);

buttonStopGame.addEventListener("click", stopMusicInGame);
