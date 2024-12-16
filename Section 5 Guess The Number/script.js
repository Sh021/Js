"use strict";

/*

///////////////////////////////////////////

console.log(document.querySelector(".message").textContent);

document.querySelector(".message").textContent = "🎉 Correct Number!"

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;

document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value);

//////////////////////////////////////////////

*/
const displayMessage = (message) => {
  document.querySelector(".message").textContent = message;
};
const score = document.querySelector(".score");
const guess = document.querySelector(".guess");
const message = document.querySelector(".message");
const genNumber = () => {
  return Math.trunc(Math.random() * 20) + 1;
};
let secretNumber = genNumber();

let scoreValue = 20;
const question = document.querySelector(".number");
const highScore = document.querySelector(".highscore");
let calcHighScore = 0;
//console.log(calcHighScore);

//question.textContent = secretNumber;

document.querySelector(".check").addEventListener("click", function () {
  const guessValue = Number(guess.value);
  //console.log(guessValue, typeof guessValue);
  //console.log(scoreValue);
  //console.log(secretNumber);
  if (!guessValue) {
    // message.textContent = "⛔ No Number!";
    displayMessage("⛔ No Number!");
  } else if (guessValue < 1 || guessValue > 20) {
    //message.textContent = "⛔ Incorrect Number!";
    displayMessage("⛔ Incorrect Number!");
  } else if (guessValue === secretNumber) {
    //  message.textContent = "🎉 Correct Number!";
    displayMessage("🎉 Correct Number!");
    question.textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".number").style.width = "30rem";
    //   console.log(scoreValue);
    //   console.log(calcHighScore);
    if (scoreValue > calcHighScore) {
      calcHighScore = scoreValue;
    }
    // console.log(calcHighScore);
    highScore.textContent = calcHighScore;
    score.textContent = scoreValue;
    //highScore = highScore;
  } else if (guessValue !== secretNumber) {
    if (scoreValue > 1) {
      //   message.textContent = guessValue > secretNumber ? " 📈 Too High " : " 📉 Too Low ";
      displayMessage(
        guessValue > secretNumber ? " 📈 Too High " : " 📉 Too Low "
      );
      scoreValue--;
      score.textContent = scoreValue;
    } else {
      score.textContent = 0;
      //   message.textContent = " You Lost the Game! ";
      displayMessage(" You Lost the Game! ");
    }
  }

  //   else if (guessValue > secretNumber) {
  //     if (scoreValue > 1) {
  //       message.textContent = " Too High ";
  //       scoreValue--;
  //       score.textContent = scoreValue;
  //     } else {
  //       score.textContent = 0;
  //       message.textContent = " You Lost the Game! ";
  //     }
  //   } else if (guessValue < secretNumber) {
  //     if (scoreValue > 1) {
  //       message.textContent = " Too Low ";
  //       scoreValue--;
  //       score.textContent = scoreValue;
  //     } else {
  //       score.textContent = 0;
  //       message.textContent = " You Lost the Game! ";
  //     }
  //   }
});

document.querySelector(".again").addEventListener("click", function () {
  scoreValue = 20;
  score.textContent = scoreValue;
  //  message.textContent = "Start guessing...";
  displayMessage("Start guessing...");
  guess.value = "";
  question.textContent = "?";
  document.querySelector("body").style.backgroundColor = "#222";
  question.style.width = "15rem";
  secretNumber = genNumber();
});
