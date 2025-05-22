let score = JSON.parse(localStorage.getItem('score')) || {wins: 0,
  losses: 0,
  ties: 0
 };
 updateScoreElement();
function playGame(move){
  const computerMove = pickComputerMove();

  let result = '';

  if(move === 'rock'){
    if(computerMove === 'rock'){
      result = 'tied';
    }
    else if(computerMove === 'paper'){
      result = 'lose';
    }
    else{
      result = 'win';
    }
  }
  
  if(move === 'paper'){
    if(computerMove === 'paper'){
      result = 'tied';
    }
    else if(computerMove === 'scissors'){
      result = 'lose';
    }
    else{
      result = 'win';
    }
}

if(move === 'scissors'){
  if(computerMove === 'scissors'){
    result = 'tied';
  }
  else if(computerMove === 'rock'){
    result = 'lose';
  }
  else{
    result = 'win';
  }
}
if(result === 'win'){
  score.wins++;
}
else if(result === 'lose'){
  score.losses++;
}
else{
  score.ties++;
}

localStorage.setItem('score', JSON.stringify(score));

updateScoreElement();

document.querySelector('.js-result').innerHTML = result;

document.querySelector('.js-moves').innerHTML = `You <img src="images/${playerMove}-emoji.png" class="move-icon"><img src="images/${computerMove}-emoji.png" class="move-icon"> Computer`;
}


function updateScoreElement(){
document.querySelector('.js-score').innerHTML = ' Wins: ' + score.wins + '  Losses: ' + score.losses + '  Ties: ' + score.ties;
}
function pickComputerMove(numMove = Math.random()){
let move = ''
if(numMove <= 1/3){
  move = 'rock';
}
else if(numMove > 1/3 && numMove <= 2/3){
  move = 'paper';
}
else{
  move = 'scissors';
}
return move;
}