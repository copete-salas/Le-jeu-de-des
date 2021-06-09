const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Arrondit les angles du dés
const roundRect = (x, y, w, h, radius) => {
  const canvas = document.getElementById("canvas");
  const context = canvas.getContext("2d");
  const r = x + w;
  const b = y + h;
  context.beginPath();
  context.moveTo(x + radius, y);
  context.lineTo(r - radius, y);
  context.quadraticCurveTo(r, y, r, y + radius);
  context.lineTo(r, y + h - radius);
  context.quadraticCurveTo(r, b, r - radius, b);
  context.lineTo(x + radius, b);
  context.quadraticCurveTo(x, b, x, b - radius);
  context.lineTo(x, y + radius);
  context.quadraticCurveTo(x, y, x + radius, y);
  context.fillStyle = "red";
  context.fill();
};
roundRect(0, 0, 200, 200, 25);
// Arrondit les angles du dés

// les faces des dés de 1 à 6
const faceOne = () => {
  ctx.beginPath();
  ctx.arc(100, 100, 20, 0, Math.PI * 2);
  ctx.fillStyle = "black";
  ctx.fill();
};
faceOne();
const faceTwo = () => {
  ctx.beginPath();
  ctx.arc(170, 30, 20, 0, Math.PI * 2);
  ctx.moveTo(30, 170);
  ctx.arc(30, 170, 20, 0, Math.PI * 2);
  ctx.fillStyle = "black";
  ctx.fill();
};
const faceThree = () => {
  faceOne();
  faceTwo();
};
const faceFour = () => {
  faceTwo();
  ctx.beginPath();
  ctx.arc(170, 170, 20, 0, Math.PI * 2);
  ctx.moveTo(30, 30);
  ctx.arc(30, 30, 20, 0, Math.PI * 2);
  ctx.fillStyle = "black";
  ctx.fill();
};
const faceFive = () => {
  faceOne();
  faceFour();
};
const faceSix = () => {
  faceFour();
  ctx.beginPath();
  ctx.arc(30, 100, 20, 0, Math.PI * 2);
  ctx.moveTo(170, 100);
  ctx.arc(170, 100, 20, 0, Math.PI * 2);
  ctx.fillStyle = "black";
  ctx.fill();
};
const gum = () => {
  ctx.beginPath();
  ctx.moveTo(100, 100);
  ctx.arc(100, 100, 21, 0, Math.PI * 2);
  ctx.moveTo(30, 30);
  ctx.arc(30, 30, 21, 0, Math.PI * 2);
  ctx.moveTo(170, 30);
  ctx.arc(170, 30, 21, 0, Math.PI * 2);
  ctx.moveTo(30, 170);
  ctx.arc(30, 170, 21, 0, Math.PI * 2);
  ctx.moveTo(170, 170);
  ctx.arc(170, 170, 21, 0, Math.PI * 2);
  ctx.moveTo(30, 100);
  ctx.arc(30, 100, 21, 0, Math.PI * 2);
  ctx.moveTo(170, 100);
  ctx.arc(170, 100, 21, 0, Math.PI * 2);
  ctx.fillStyle = "red";
  ctx.fill();
};
// les faces des dés de 1 à 6
