const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// le dés
const dice = () => {
  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.fillRect(0, 0, 80, 80);
};
dice();
// le dés

// les faces des dés de 1 à 6
const faceOne = () => {
  ctx.beginPath();
  ctx.arc(40, 40, 8, 0, Math.PI * 2);
  ctx.fillStyle = "red";
  ctx.fill();
};
faceOne();
const faceTwo = () => {
  ctx.beginPath();
  ctx.arc(68, 12, 8, 0, Math.PI * 2);
  ctx.moveTo(12, 68);
  ctx.arc(12, 68, 8, 0, Math.PI * 2);
  ctx.fillStyle = "red";
  ctx.fill();
};
const faceThree = () => {
  faceOne();
  faceTwo();
};
const faceFour = () => {
  faceTwo();
  ctx.beginPath();
  ctx.arc(68, 68, 8, 0, Math.PI * 2);
  ctx.moveTo(12, 12);
  ctx.arc(12, 12, 8, 0, Math.PI * 2);
  ctx.fillStyle = "red";
  ctx.fill();
};
const faceFive = () => {
  faceOne();
  faceFour();
};
const faceSix = () => {
  faceFour();
  ctx.beginPath();
  ctx.arc(12, 40, 8, 0, Math.PI * 2);
  ctx.moveTo(68, 40);
  ctx.arc(68, 40, 8, 0, Math.PI * 2);
  ctx.fillStyle = "red";
  ctx.fill();
};
const gum = () => {
  ctx.beginPath();
  ctx.moveTo(40, 40);
  ctx.arc(40, 40, 9, 0, Math.PI * 2);
  ctx.moveTo(12, 12);
  ctx.arc(12, 12, 9, 0, Math.PI * 2);
  ctx.moveTo(68, 12);
  ctx.arc(68, 12, 9, 0, Math.PI * 2);
  ctx.moveTo(12, 68);
  ctx.arc(12, 68, 9, 0, Math.PI * 2);
  ctx.moveTo(68, 68);
  ctx.arc(68, 68, 9, 0, Math.PI * 2);
  ctx.moveTo(12, 40);
  ctx.arc(12, 40, 9, 0, Math.PI * 2);
  ctx.moveTo(68, 40);
  ctx.arc(68, 40, 9, 0, Math.PI * 2);
  ctx.fillStyle = "white";
  ctx.fill();
};
// les faces des dés de 1 à 6
