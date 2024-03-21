'use strict'
//selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const scoreEl1=document.querySelector("#score--0");
const scoreEl2=document.querySelector("#score--1");
const currentEl1=document.querySelector("#current--0");
const currentEl2=document.querySelector("#current--1");
const btnnew=document.querySelector(".btn--new");
const btnroll=document.querySelector(".btn--roll");
const btnhold=document.querySelector(".btn--hold");

const diceEl = document.querySelector('.dice');
//declaring usefull elements


// startng condition(where all score will remain zero and dice will not appear)

scoreEl1.textContent=0;
scoreEl2.textContent=0;
diceEl.classList.add("hidden");

let currentScore=0;
let activePlayer=0;
let scores=[0,0];
let winner;
let playing=true;
//switch player function
 function switchPlayer(){
      //first setting prev active player score 0
      document.getElementById(`current--${activePlayer}`).textContent=0;
      //now switching the active player
      activePlayer=activePlayer === 0 ? 1:0;
      //resetting the current value
      currentScore=0;
      //also switching the active class to active player
      player0El.classList.toggle('player--active');
      player1El.classList.toggle('player--active');
}

//rolling dice functionality
btnroll.addEventListener("click",function(){
    if(playing){
    //1.Generating a random dice no.
    const dice=Math.floor(Math.random()*6)+1;

    //2.Display the dice
    diceEl.classList.remove("hidden");
    diceEl.src=`dice-${dice}.png`;

    //3.check for display 1
    if(dice!==1){
        //Add the score to current
        
        currentScore += dice;
        
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;

    }
    else{
    // Switch to the next player
      switchPlayer();



    }

    }
});


btnhold.addEventListener("click",function(){
if(playing){
    scores[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent =scores[activePlayer];
    
    currentScore=0;
    switchPlayer();
    if(scores[0]>20 || scores[1]>20){
        playing=false;
        if(scores[0]>20){
            winner=0;
        }
        else{
            winner=1;
        }
    
        document.querySelector(`.player--${winner}`).classList.add("player--winner");
        
    }

}
}
)

btnnew.addEventListener("click",function(){
    scoreEl1.textContent=0;
    scoreEl2.textContent=0;
    currentEl1.textContent=0;
    currentEl2.textContent=0;
    diceEl.classList.add("hidden");
    activePlayer=0;
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    currentScore=0;
    scores=[0,0];
    playing=true;




})
