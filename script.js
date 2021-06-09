const btn = document.getElementById("btn");
const number = document.getElementById("number");
const score = document.getElementById("score");
const global = document.getElementById("global");
const global1 = document.getElementById("global1");
const btnEndOfTurn = document.getElementById("endOfTurn");
const btnEndOfTurn1 = document.getElementById("endOfTurn1");
const btnNewGame = document.getElementById("newGame");

document.getElementById("score").textContent = "0";
document.getElementById("number").textContent = "0";
document.getElementById("global").textContent = "0";
document.getElementById("global1").textContent = "0";
document.getElementById("endOfTurn1").style.display = "none";
document.getElementById("gamerOne").style.background = "red";
document.getElementById("gamerTwo").style.background = "white";

// sert a calculer un nombre aléatoire de 1 à 6 inclu
const random = (max, min) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
// sert a calculer un nombre aléatoire de 1 à 6 inclu

// lance le dés
const result = () => {
  number.textContent = random(6, 1);
  if (number.textContent == 1) {
    gum();
    faceOne();
  } else if (number.textContent == 2) {
    gum();
    faceTwo();
  } else if (number.textContent == 3) {
    gum();
    faceThree();
  } else if (number.textContent == 4) {
    gum();
    faceFour();
  } else if (number.textContent == 5) {
    gum();
    faceFive();
  } else if (number.textContent == 6) {
    gum();
    faceSix();
  }
};
btn.addEventListener("click", result);
// lance le dés

// compte les points
resultScore = () => {
  if (number.textContent == 1) {
    score.textContent = 0;
  } else {
    score.textContent =
      parseFloat(score.textContent) + parseFloat(number.textContent);
  }
};

btn.addEventListener("click", resultScore);
// compte les points

// réinitialise tout les compteur et le dés quand on click sur nouvelle partie
const reset = () => {
  gum();
  faceOne();
  score.textContent = 0;
  global.textContent = 0;
  global1.textContent = 0;
};
btnNewGame.addEventListener("click", reset);
// réinitialise tout les compteur et le dés quand on click sur nouvelle partie

// le décompte des points de chaque joueur
const resultScoreGlobal = () => {
  global.textContent =
    parseFloat(score.textContent) + parseFloat(global.textContent);
  gum();
  faceOne();
  score.textContent = 0;
  if (global.textContent >= 100) {
    alert("va te faire foutre pd");
    reset();
  }
};
btnEndOfTurn.addEventListener("click", resultScoreGlobal);

const resultScoreGlobal1 = () => {
  global1.textContent =
    parseFloat(score.textContent) + parseFloat(global1.textContent);
  gum();
  faceOne();
  score.textContent = 0;
  if (global1.textContent >= 100) {
    alert("va te faire foutre pd");
    reset();
  }
};
btnEndOfTurn1.addEventListener("click", resultScoreGlobal1);
// le décompte des points de chaque joueur

// changement de joueur au click ou automatiquement
const playerChange = () => {
  if (document.getElementById("gamerOne").style.background == "red") {
    document.getElementById("endOfTurn").style.display = "none";
    document.getElementById("endOfTurn1").style.display = "block";
    document.getElementById("gamerOne").style.background = "white";
    document.getElementById("gamerTwo").style.background = "blue";
  } else {
    document.getElementById("endOfTurn1").style.display = "none";
    document.getElementById("endOfTurn").style.display = "block";
    document.getElementById("gamerOne").style.background = "red";
    document.getElementById("gamerTwo").style.background = "white";
  }
};
btnEndOfTurn.addEventListener("click", playerChange);
btnEndOfTurn1.addEventListener("click", playerChange);

const automaticPlayerchange = () => {
  if (number.textContent == 1) {
    playerChange();
  }
};
btn.addEventListener("click", automaticPlayerchange);
// changement de joueur au click ou automatiquement
