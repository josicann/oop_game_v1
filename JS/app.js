startButton = document.querySelector('#btn__reset');
keys = document.querySelectorAll('.keyrow > button');
startScreen = document.querySelector('#overlay');

function resetDisplay() {
  startScreen.style.display = 'none';
}
function markButton(button){
  button.disabled = true;
}

startButton.addEventListener('click', function(){
    resetDisplay();
    p = new Phrase('we');
    p.addPhraseToDisplay();
    //game = new Game();
    //game.startGame();
});

function addKeysBtnClickEvents() {
  for (let key of keys) {
    key.addEventListener('click', function(){
      markButton(event.target);
    });
  }
}
