"use strict";

const btnRollDice = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const btnNewGame = document.querySelector(".btn--new");

const diceEl = document.querySelector(".dice");

const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");

const switchPlayer = () => {
  currentScore = 0;
  document.querySelector(`#current--${currentPlayer}`).textContent = 0;
  currentPlayer = currentPlayer == 0 ? 1 : 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

const dice = () => Math.trunc(Math.random() * 6) + 1;

let currentPlayer, playing, currentScore, totalScore;

const init = () => {
  currentScore = 0;
  totalScore = [0, 0];
  currentPlayer = 0;
  playing = true;

  document.querySelector(`.player--0`).classList.remove("player--winner");
  document.querySelector(`.player--1`).classList.remove("player--winner");
  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");
  document.querySelector("#score--0").textContent = 0;
  document.querySelector("#score--1").textContent = 0;
  diceEl.classList.add("hidden");
  document.querySelector("#current--0").textContent = 0;
  document.querySelector("#current--1").textContent = 0;
};

init();

btnRollDice.addEventListener("click", function () {
  if (playing) {
    const diceNumber = dice();
    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${diceNumber}.png`;
    if (diceNumber !== 1) {
      currentScore += diceNumber;
      document.querySelector(`#current--${currentPlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    totalScore[currentPlayer] += currentScore;
    document.querySelector(`#score--${currentPlayer}`).textContent =
      totalScore[currentPlayer];
    if (totalScore[currentPlayer] >= 100) {
      playing = false;
      document
        .querySelector(`.player--${currentPlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${currentPlayer}`)
        .classList.remove("player--active");
      diceEl.classList.add("hidden");
    } else {
      switchPlayer();
    }
  }
});

btnNewGame.addEventListener("click", init);
