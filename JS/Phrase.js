class Phrase {
  constructor(phrase) {
    this.phrase = phrase;
  }
  /*
   * addPhraseToDisplay - adds letter placeholders to the display when the game starts
   */
  addPhraseToDisplay() {
    const ulPhrase = document.querySelector('#phrase');
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

  checkLetter() {}
  showMatchedLetter() {}
}
