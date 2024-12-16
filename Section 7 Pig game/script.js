"use strict";

const btnRollDice = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const btnNewGame = document.querySelector(".btn--new");

const scorePlayer2 = (score) => {
  document.querySelector("#score--1").textContent = score;
};

const scorePlayer1 = (score) => {
  document.querySelector("#score--0").textContent = score;
};

const currentPlayer2score = (score) => {
  document.querySelector("#current--1").textContent = score;
};
const currentPlayer1score = (score) => {
  document.querySelector("#current--0").textContent = score;
};

const dice = () => Math.trunc(Math.random() * 6) + 1;
let currentScore = 0;
let currentPlayerscore1 = 0;
let currentPlayerscore2 = 0;
let currentPlayer = 1;

btnRollDice.addEventListener("click", function () {
    const diceNumber = dice();
    
  if (currentPlayer === 1) {
    if (diceNumber !== 1) {
      currentScore += diceNumber;
      currentPlayer1score(currentScore);
    } else {
      currentPlayer1score(0);
      currentScore = 0;
      currentPlayer = 2;
    }
  } else {
    if (diceNumber !== 1) {
      currentScore += diceNumber;
      currentPlayer2score(currentScore);
    } else {
      currentPlayer2score(0);
      currentScore = 0;
      currentPlayer = 1;
    }
  }
});

btnHold.addEventListener("click", function () {
  if (currentPlayer === 1) {
    currentPlayer1score(0);
    currentPlayerscore1 += currentScore;
    currentScore = 0;
    currentPlayer = 2;
    scorePlayer1(currentPlayerscore1);
  } else {
    currentPlayer2score(0);
    currentPlayerscore2 += currentScore;
    currentScore = 0;
    currentPlayer = 1;
    scorePlayer2(currentPlayerscore2);
  }
});

btnNewGame.addEventListener("click", function () {
  currentScore = 0;
  currentPlayerscore1 = 0;
  currentPlayerscore2 = 0;
  currentPlayer = 1;
  currentPlayer1score(0);
  currentPlayer2score(0);
  scorePlayer1(0);
  scorePlayer2(0);
});
