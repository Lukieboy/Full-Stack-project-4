/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
const overlay = document.querySelector('#overlay');

class Game{
    constructor(){
        this.missed = 0;
        this.phrases = ['hello world', 'coding is fun', 'Good morning', 'how are you', 'What is your name'];
        this.activePhrase = null;
    }

    

    getRandomPhrase(){
        const randomNumber = Math.floor( Math.random() * this.phrases.length-1) + 1;
        return this.phrases[randomNumber];
    }

    startGame(){
        overlay.style.display = "none";
        this.activePhrase = this.getRandomPhrase();
        let phrase = new Phrase(this.activePhrase).addPhraseToDisplay();
    }


/**
* Checks for winning move
* @return {boolean} True if game has been won, false if game wasn't
won
*/
    checkForWin() {
        let lettersNotFound = document.querySelector('li.hide.letter');
        if(lettersNotFound == 0){
            return true;
        }else{
            return false;
        }
    };

    /**
* Increases the value of the missed property
* Removes a life from the scoreboard
* Checks if player has remaining lives and ends game if player is out
*/
removeLife() {
    this.missed += 1;
    let life = document.querySelector('.tries')
    life.style.display = "none";
    if(missed == 5){
        this.gameOver();
    }
};
        
/**
* Displays game over message
* @param {boolean} gameWon - Whether or not the user won the game
*/
    gameOver(gameWon) {
        let gameOverMessage = document.querySelector('#game-over-message');
        if(missed < 5){
            gameOverMessage.innerHTML = "YOU WIN!!!!";
            overlay.style.display = "inline";
            overlay.className = "win";
        }else{
            gameOverMessage.innerHTML = "Oh no! You Lost";
            overlay.style.display = "inline";
            overlay.className = "lose";
        }
};


}


