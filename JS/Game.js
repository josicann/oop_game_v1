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
    const liPhrase = document.querySelectorAll('#phrase > ul li');
    let count = 0;
    for(let char in liPhrase) {
      if (phrase.checkLetter(button, liPhrase[char])) {
        phrase.showMatchedLetter(liPhrase[char]);
        count ++
      }
      if(count === 0){
        this.removeLife();
      }
    }
  }
  removeLife() {
    this.missed ++;
  }
  checkForWin() {}
  gameOver () {}
  startGame(){

    this.getRandomPhrase().
         addPhraseToDisplay();
  }
}
