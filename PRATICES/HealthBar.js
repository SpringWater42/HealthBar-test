const Hit = document.getElementById("Hit");
const HeavyHit = document.getElementById("HeavyHit");
const Heal = document.getElementById("Heal");
const Fullpatch = document.getElementById("Fullpatch");
const Flame = document.getElementById("Flame");


//Functionality of all the buttons
Heal.addEventListener("click", () => {
  let health = document.getElementById("health");
  health.value += 50;
  var sound = new Audio("audio/084373_heal-36672.mp3");
  sound.currentTime = 0;
  sound.play();
});

Fullpatch.addEventListener("click", () => {
  let health = document.getElementById("health");
  health.value += 100;
  var sound = new Audio("audio/084373_heal-36672.mp3");
  sound.currentTime = 0;
  sound.play();
});

Hit.addEventListener("click", () => {
  let health = document.getElementById("health");
  health.value -= 25;
  var sound = new Audio("audio/player-hurt-47810.mp3");
  sound.currentTime = 0;
  sound.play();
});

HeavyHit.addEventListener("click", () => {
  let health = document.getElementById("health");
  health.value -= 50;
  var sound = new Audio("audio/player-hurt-47810.mp3");
  sound.currentTime = 0;
  sound.play();
});

Flame.addEventListener("click", () => {
  let health = document.getElementById("health");
  health.value -= 15;
  var sound = new Audio("audio/fire.mp3");
  sound.currentTime = 0;
  sound.play();
});
//

//Heal Functions//
function patch() {
  document.getElementById("Patch").innerHTML += "[Appealing bandage]<br></br> ";
}
function full() {
  document.getElementById("F.Patch").innerHTML +=
    "[Drinking medicine]<br></br> ";
}
//
//Damage Functions
function damage() {
  document.getElementById("Hurt").innerHTML += "[I got cutted]<br></br> ";
}
function heavydamage() {
  document.getElementById("H.Hurt").innerHTML += "[I got hurt badly]<br></br> ";
}
//String left open [Error on the button display none when button is played]
function flame() {
  document.getElementById("Flame").innerHTML += "";
}
//
