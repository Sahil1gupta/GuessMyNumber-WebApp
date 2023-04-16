'use strict';

// const e = require("express");

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent="build by 😉"

document.querySelector('.number').textContent=13
document.querySelector('.score').textContent=20
*/

let secretNumber=Math.trunc(Math.random()*20)+1;
console.log(secretNumber);
let score=20;
let Highscore=0;
document.querySelector('.check').addEventListener('click',function (){
   const guess= Number(document.querySelector('.guess').value);
   
   if(!guess){
    document.querySelector('.message').textContent="😥No Number"
   }
   else if(guess===secretNumber){
    document.querySelector('.message').textContent="✅ Correct answer";
    document.querySelector('.number').textContent=secretNumber
    document.querySelector('body').style.backgroundColor='#68b347';
    document.querySelector('.number').style.width = '30rem';
    // document.querySelector('.highscore')=score
    if(score>Highscore){
        Highscore=score;
        document.querySelector('.highscore').textContent=Highscore;
    }

   }
   else if(guess !=secretNumber){
    if(score>1){
        document.querySelector('.message').textContent=guess>secretNumber?"📈 Too High!":"📈 Too Low";
        score--;
        document.querySelector('.score').textContent=score;
    
    }
    else{
        document.querySelector('.message').textContent="📈 You lost the game"
        document.querySelector('.score').textContent=0;
    }
   }
//    else if(guess>secretNumber){
//         if(score>1){
//             document.querySelector('.message').textContent="📈 Too High";
//             score--;
//             document.querySelector('.score').textContent=score;
        
//         }
//         else{
//             document.querySelector('.message').textContent="📈 You lost the game"
//             document.querySelector('.score').textContent=0;
//         }
//    }
//    else if(guess<secretNumber){
//         if(score>1){
//             document.querySelector('.message'). textContent="📉 Too Low"
//             score--;
//             document.querySelector('.score').   textContent=score;
    
//         }
//          else{
//             document.querySelector('.message'). textContent="📈 You lost the game"
//             document.querySelector('.score').textContent=0;
//         }
//    }
});

document.querySelector('.again').addEventListener('click',function(){
    score =20
    secretNumber=Math.trunc(Math.random()*20)+1;
    document.querySelector('.message').textContent="Start guessing...";
    Number(document.querySelector('.guess').value=" ");

    document.querySelector('.number').textContent="?";
    document.querySelector('.score').textContent=score;

    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').style.width = '15rem';
   


})