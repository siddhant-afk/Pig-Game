'use strict';

// Selecting Elements
let score0 = document.getElementById('score--0');
let score1 = document.getElementById('score--1');
let dice = document.querySelector('.dice');
let newBtn = document.querySelector('.btn--new');
let rollBtn = document.querySelector('.btn--roll');
let holdBtn = document.querySelector('.btn--hold');
let current0 = document.getElementById('current--0');
let current1 = document.getElementById('current--1');
let player0 = document.querySelector('.player--0');
let player1 = document.querySelector('.player--1');


// Default Conditions
const totalScore = [0,0];
score0.textContent = 0;
score1.textContent = 0;
dice.classList.add('hidden');
let activePlayer = 0;
let currentScore = 0;


// Roll Button Event
rollBtn.addEventListener('click',
    function(){
       // Generate random number between 1 and 6 corresponding to the faces of the dice
       let randomNumber = Math.trunc(Math.random()*6) + 1;
       dice.src = `dice-${randomNumber}.png`;
       dice.classList.remove('hidden');

       // Add dice to the player score
       if (randomNumber !== 1){
           currentScore += randomNumber;
           document.getElementById(`current--${activePlayer}`).textContent = currentScore;

       }
       else{
        // If 1 is rolled, switch player
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        activePlayer = activePlayer === 0? 1 : 0;
        currentScore = 0;
        player0.classList.toggle('player--active');
        player1.classList.toggle('player--active');
        


       }
       

    }
)



