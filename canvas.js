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
  context.fillStyle = "black";
  context.fill();
};
roundRect(0, 0, 80, 80, 8);
// Arrondit les angles du dés


// les faces des dés de 1 à 6
const faceOne = () => {
  ctx.beginPath();
  ctx.arc(40, 40, 8, 0, Math.PI * 2);
  ctx.fillStyle = "white";
  ctx.fill();
};
faceOne();
const faceTwo = () => {
  ctx.beginPath();
  ctx.arc(68, 12, 8, 0, Math.PI * 2);
  ctx.moveTo(12, 68);
  ctx.arc(12, 68, 8, 0, Math.PI * 2);
  ctx.fillStyle = "white";
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
  ctx.fillStyle = "white";
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
  ctx.fillStyle = "white";
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
  ctx.fillStyle = "black";
  ctx.fill();
};
// les faces des dés de 1 à 6

