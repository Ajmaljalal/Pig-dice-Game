/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

let scores, roundScore, activePlayer, gamePlaying;

init();


document.querySelector('.btn-roll').addEventListener('click', function(){
    if(gamePlaying){
        
        let dice = Math.floor(Math.random() * 6) + 1;
        let dice1 = Math.floor(Math.random() * 6) + 1;
        console.log(activePlayer);

        document.querySelector('.dice-tracker').textContent = 'Current dices: ' + dice + '-' + dice1;
        let diceDOM = document.querySelector('.dice');
        let diceDOM1 = document.querySelector('.dice-1');
        diceDOM.style.display = 'block';
        diceDOM1.style.display = 'block';
        diceDOM.src = 'img/faces-' + dice + '.png';
        diceDOM1.src = 'img/faces-' + dice1 + '.png';
        
        
        if(dice !== 1 && dice1 !== 1){
            dicesTotal = dice + dice1
            roundScore += dicesTotal;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            nextPlayer();
    
        }

        if(dice === 6 && dice1 === 6){
            document.querySelector('#current-' + activePlayer).textContent = '0';
            document.querySelector('#score-' + activePlayer).textContent = '0';
            nextPlayer();
        }
    }

});


document.querySelector('.btn-hold').addEventListener('click', function(){

    if(gamePlaying){

        scores[activePlayer] += roundScore;
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        if (scores[activePlayer] >= 100) {
            document.querySelector('#name-' + activePlayer).textContent = 'YOU WON!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.dice-1').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            nextPlayer();
        }
    }

});

document.querySelector('.btn-new').addEventListener('click', init);


function nextPlayer () {
        activePlayer === 0 ? activePlayer = 1: activePlayer = 0;
        roundScore = 0;

        document.getElementById('current-0').textContent = '0'
        document.getElementById('current-1').textContent = '0'
        

        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.dice-1').style.display = 'none';
}


function init(){
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dice-1').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');

    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');

    document.querySelector('.player-0-panel').classList.add('active');

}



