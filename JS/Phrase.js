class Phrase {
  constructor(phrase = null) {
    this.phrase = phrase;
  }
  /*
   * addPhraseToDisplay - adds letter placeholders to the display when the game starts
   */
  addPhraseToDisplay() {
    const ulPhrase = document.querySelector('#phrase > ul');
    for (let char of this.phrase) {
      let liLetter = '<li class="hide ';
      if(char === ' ') {
        liLetter += 'space"> </li>';
      }else {
        liLetter += `letter ${char}">${char}</li>`;
      }
      ulPhrase.innerHTML += liLetter;
    }
  }

  checkLetter(button, letter) {
      if (button.textContent === letter.textContent.toLowerCase()) {
        return true;
      } else {
        return false;
      }
  }
  showMatchedLetter(letter) {
    letter.className = `show letter ${letter.textContent}`
  }
}
