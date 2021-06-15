const btn = document.getElementById("btn");
const btn1 = document.getElementById("btn1");
const number = document.getElementById("number");
const score = document.getElementById("score");
const score1 = document.getElementById("score1");
const global = document.getElementById("global");
const global1 = document.getElementById("global1");
const btnEndOfTurn = document.getElementById("endOfTurn");
const btnEndOfTurn1 = document.getElementById("endOfTurn1");
const btnNewGame = document.getElementById("newGame");
const musicHold = document.getElementById("musicHold");
const musicNewGame = document.getElementById("musicNewGame");
const musicRollDice = document.getElementById("musicRollDice");
const musicWinner = document.getElementById("musicWinner");
const btnSubmit = document.getElementById("submit");

document.getElementById("score").textContent = "0";
document.getElementById("score1").textContent = "0";
document.getElementById("number").textContent = "0";
document.getElementById("global").textContent = "0";
document.getElementById("global1").textContent = "0";
document.getElementById("winner").style.display = "none";
document.getElementById("winner-two").style.display = "none";
document.getElementById("winner-one").style.display = "none";
document.getElementById("btn1").style.display = "none";
document.getElementById("endOfTurn1").style.display = "none";
document.getElementById("square").style.background =
  "linear-gradient(90deg, rgb(247, 247, 247) 50%, rgb(255, 255, 255) 50%)";
document.getElementById("square").style.display = "none";

// inscription des joueurs + interdiction aux caractre spéciaux
const submit = (e) => {
  e.preventDefault();
  const capture = document.getElementById("joueurOne").value;
  const capture1 = document.getElementById("joueurTwo").value;
  document.querySelector("#square").style.display = "block";
  document.getElementById("player1").textContent = capture;
  document.getElementById("player2").textContent = capture1;
  document.getElementById("form").style.display = "none";
  document.getElementById("winner-one").textContent =
    "Gamer " + capture + " is the WINNER !";
  document.getElementById("winner-two").textContent =
    "Gamer " + capture1 + " is the WINNER !";
};
btnSubmit.addEventListener("click", submit);

const verification = (event) => {
  const keyCode = event.which ? event.which : event.keyCode;
  const touche = String.fromCharCode(keyCode);
  const champ = document.getElementById("joueurOne");
  const caracteres =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  if (caracteres.indexOf(touche) >= 0) {
    champ.value += touche;
  }
};

const verification1 = (event) => {
  const keyCode = event.which ? event.which : event.keyCode;
  const touche = String.fromCharCode(keyCode);
  const champ = document.getElementById("joueurTwo");
  const caracteres =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  if (caracteres.indexOf(touche) >= 0) {
    champ.value += touche;
  }
};
// inscription des joueurs + interdiction aux caractre spéciaux

// sert a calculer un nombre aléatoire de 1 à 6 inclu
const random = (max, min) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
// sert a calculer un nombre aléatoire de 1 à 6 inclu

// lance le dés
const result = () => {
  setTimeout(() => {
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
  }, 700);
};
btn.addEventListener("click", result);
btn1.addEventListener("click", result);
// lance le dés

// annime le dés et compte les points
resultScore = () => {
  setTimeout(() => {
    gum();
    faceSix();
  }, 500);
  setTimeout(() => {
    gum();
    faceOne();
  }, 600);
  setTimeout(() => {
    gum();
    faceFive();
  }, 300);
  setTimeout(() => {
    gum();
    faceTwo();
  }, 400);
  setTimeout(() => {
    gum();
    faceFour();
  }, 100);
  setTimeout(() => {
    gum();
    faceThree();
  }, 200);
  setTimeout(() => {
    if (number.textContent == 1) {
      score.textContent = 0;
    } else {
      score.textContent =
        parseFloat(score.textContent) + parseFloat(number.textContent);
    }
  }, 700);
};
btn.addEventListener("click", resultScore);

resultScore1 = () => {
  setTimeout(() => {
    gum();
    faceSix();
  }, 500);
  setTimeout(() => {
    gum();
    faceOne();
  }, 600);
  setTimeout(() => {
    gum();
    faceFive();
  }, 300);
  setTimeout(() => {
    gum();
    faceTwo();
  }, 400);
  setTimeout(() => {
    gum();
    faceFour();
  }, 100);
  setTimeout(() => {
    gum();
    faceThree();
  }, 200);
  setTimeout(() => {
    if (number.textContent == 1) {
      score1.textContent = 0;
    } else {
      score1.textContent =
        parseFloat(score1.textContent) + parseFloat(number.textContent);
    }
  }, 700);
};

btn1.addEventListener("click", resultScore1);
// annime le dés et compte les points

// réinitialise tout les compteur et le dés quand on click sur nouvelle partie
const reset = () => {
  gum();
  faceOne();
  score.textContent = 0;
  score1.textContent = 0;
  global.textContent = 0;
  global1.textContent = 0;
};
btnNewGame.addEventListener("click", reset);
// réinitialise tout les compteur et le dés quand on click sur nouvelle partie

// le décompte des points de chaque joueur Jusqu'au vainqueur + affiche le vainqueur
const resultScoreGlobal = () => {
  global.textContent =
    parseFloat(score.textContent) + parseFloat(global.textContent);
  gum();
  faceOne();
  score.textContent = 0;
  if (global.textContent >= 100) {
    document.getElementById("square").style.display = "none";
    document.getElementById("winner").style.display = "block";
    document.getElementById("winner-one").style.display = "block";
    musicWinner.play();
  }
};
btnEndOfTurn.addEventListener("click", resultScoreGlobal);

const resultScoreGlobal1 = () => {
  global1.textContent =
    parseFloat(score1.textContent) + parseFloat(global1.textContent);
  gum();
  faceOne();
  score1.textContent = 0;
  if (global1.textContent >= 100) {
    document.getElementById("square").style.display = "none";
    document.getElementById("winner").style.display = "block";
    document.getElementById("winner-two").style.display = "block";
    musicWinner.play();
  }
};
btnEndOfTurn1.addEventListener("click", resultScoreGlobal1);

const displayTheWinner = () => {
  document.getElementById("square").style.display = "block";
  document.getElementById("winner").style.display = "none";
  reset();
};
document.getElementById("winner").addEventListener("click", displayTheWinner);
// le décompte des points de chaque joueur Jusqu'au vainqueur + affiche le vainqueur

// changement de joueur au click ou automatiquement
const playerChange = () => {
  if (
    document.getElementById("square").style.background ==
    "linear-gradient(90deg, rgb(247, 247, 247) 50%, rgb(255, 255, 255) 50%)"
  ) {
    document.getElementById("endOfTurn").style.display = "none";
    document.getElementById("endOfTurn1").style.display = "block";
    document.getElementById("btn").style.display = "none";
    document.getElementById("btn1").style.display = "block";
    document.getElementById("square").style.background =
      "linear-gradient(270deg, rgb(247, 247, 247) 50%, rgb(255, 255, 255) 50%)";
  } else if (
    document.getElementById("square").style.background ==
    "linear-gradient(270deg, rgb(247, 247, 247) 50%, rgb(255, 255, 255) 50%)"
  ) {
    document.getElementById("endOfTurn1").style.display = "none";
    document.getElementById("endOfTurn").style.display = "block";
    document.getElementById("btn1").style.display = "none";
    document.getElementById("btn").style.display = "block";
    document.getElementById("square").style.background =
      "linear-gradient(90deg, rgb(247, 247, 247) 50%, rgb(255, 255, 255) 50%)";
  }
};
btnEndOfTurn.addEventListener("click", playerChange);
btnEndOfTurn1.addEventListener("click", playerChange);

const automaticPlayerchange = () => {
  setTimeout(() => {
    if (number.textContent == 1) {
      playerChange();
    }
  }, 700);
};
btn.addEventListener("click", automaticPlayerchange);
btn1.addEventListener("click", automaticPlayerchange);
// changement de joueur au click ou automatiquement

// joue un son sur différent éléments
const music0 = () => {
  musicRollDice.play();
};
btn.addEventListener("click", music0);
btn1.addEventListener("click", music0);

const music1 = () => {
  musicHold.play();
};
btnEndOfTurn.addEventListener("click", music1);
btnEndOfTurn1.addEventListener("click", music1);

const music2 = () => {
  musicNewGame.play();
};
btnNewGame.addEventListener("click", music2);
// joue un son sur différent éléments
