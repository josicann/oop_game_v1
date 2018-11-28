class Game {
  constructor() {
    this.missed = 0
    this.phrases = ['This phrase', 'that phrase', 'the other phrase'];
  }

  getRandomPhrase() {
    //random element between 0 - this.phrases.length min is inclusive max is exclusive
    const ranIndex = Math.floor(Math.random() * Math.floor(this.phrases.length));
    const phrase = this.phrases[ranIndex];

    return new Phrase(phrase);
  }
  handleInteraction(button) {
    const phrase = new Phrase();
    let liPhrases = document.querySelectorAll('#phrase > ul li');
    let count = 0;
    for(let element = 0; element < liPhrases.length; element += 1) {
      if (phrase.checkLetter(button, liPhrases[element])) {
        phrase.showMatchedLetter(liPhrases[element]);
        count ++;
      }
    }
    if(count === 0){
      this.removeLife();
    }
    if (this.checkForWin()) {
      this.gameOver()
    }
}
  removeLife() {
    this.missed ++;
    let lives = document.querySelectorAll('#scoreboard ol > li');
    if(this.missed === 5) {
      this.gameOver()
    }else{
      lives[this.missed - 1].style.display = 'none';
    }
  }
  checkForWin() {
    if(this.missed === 5) {
      return false;
    }
    let liPhrases = document.querySelectorAll('#phrase > ul li');
    for(let element = 0; element < liPhrases.length; element += 1) {
      if (liPhrases[element].className.includes("hide") && !liPhrases[element].className.includes("space")) {
        return false;
      }
    }
    return true;
}
  gameOver () {
    if (!this.checkForWin()) {
      startScreen.style.display = "";
      document.querySelector('#game-over-message').textContent = "Game Over";
    }else {
      startScreen.style.display = "";
      document.querySelector('#game-over-message').textContent = "You Win!";
    }
  }
  startGame(){

    this.getRandomPhrase().
         addPhraseToDisplay();
  }
}
