'use strict';

let number = Math.trunc(Math.random()*20)+1;
let score = 20;
let highscore = 0;

let displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}


document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);

    if(!guess){
        displayMessage("No number!");
    }else if(guess === number){
        displayMessage("Correct Number!");
        document.body.style.backgroundColor = "green";
        document.querySelector('.number').style.width = "30rem";
        document.querySelector('.number').textContent = number;
        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }else if(guess !== number){
        if(score > 1){
            displayMessage(guess > number ? "Too high!" : "Too low!");
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            displayMessage("Game Over!");
            document.querySelector('.score').textContent = "0";
            document.body.style.backgroundColor = "red";
        }
    }
}) 

document.querySelector('.again').addEventListener('click', function(){
    number = number = Math.trunc(Math.random()*20)+1;
    score = 20;
    document.querySelector('.score').textContent = score;
    displayMessage("Start guessing...");
    document.querySelector('.number').textContent = "?";
    document.querySelector('.guess').value = "";
    document.body.style.backgroundColor = "#222";
    document.querySelector('.number').style.width = "15rem";
})





