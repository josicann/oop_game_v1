const startButton = document.querySelector('#btn__reset');
const keys = document.querySelectorAll('.keyrow > button');
const startScreen = document.querySelector('#overlay');

function resetDisplay() {
  startScreen.style.display = 'none';
}
function markButton(button){
  button.disabled = true;
  game.handleInteraction(button);
}

startButton.addEventListener('click', function(){
    resetDisplay();
    game = new Game();
    game.startGame();
});

function addKeysBtnClickEvents() {
  for (let key of keys) {
    key.addEventListener('click', function(event){
      markButton(event.target);
    });
  }
}
addKeysBtnClickEvents();
