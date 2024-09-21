"use strict";

// Selecting Elements
let score0 = document.getElementById("score--0");
let score1 = document.getElementById("score--1");
let dice = document.querySelector(".dice");
let newBtn = document.querySelector(".btn--new");
let rollBtn = document.querySelector(".btn--roll");
let holdBtn = document.querySelector(".btn--hold");
let current0 = document.getElementById("current--0");
let current1 = document.getElementById("current--1");
let player0 = document.querySelector(".player--0");
let player1 = document.querySelector(".player--1");

let playing, totalScore, activePlayer, currentScore;

// Default Conditions
function init() {
  totalScore = [0, 0];
  playing = true;
  activePlayer = 0;
  currentScore = 0;

  score0.textContent = 0;
  score1.textContent = 0;
  current0.textContent = 0;
  current1.textContent = 0;

  dice.classList.add("hidden");
  player0.classList.remove("player--winner");
  player1.classList.remove("player--winner");
  player0.classList.add("player--active");
  player1.classList.remove(".player--active");
}

init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0.classList.toggle("player--active");
  player1.classList.toggle("player--active");
};
// Roll Button Event
rollBtn.addEventListener("click", function () {
  if (playing) {
    // Generate random number between 1 and 6 corresponding to the faces of the dice
    let randomNumber = Math.trunc(Math.random() * 6) + 1;
    dice.src = `dice-${randomNumber}.png`;
    dice.classList.remove("hidden");

    // Add dice to the player score
    if (randomNumber !== 1) {
      currentScore += randomNumber;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // If 1 is rolled, switch player

      switchPlayer();
    }
  }
});

// Hold Button Event
holdBtn.addEventListener("click", function () {
  if (playing) {
    totalScore[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      totalScore[activePlayer];

    if (totalScore[activePlayer] >= 20) {
      playing = false;
      dice.classList.add("hidden");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else {
      switchPlayer();
    }
  }
});

// New Game Button Event
newBtn.addEventListener("click", init);
