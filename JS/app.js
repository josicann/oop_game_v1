const startButton = document.querySelector('#btn__reset');
const keys = document.querySelectorAll('.keyrow > button');
const startScreen = document.querySelector('#overlay');
let mainPhrase = document.querySelector('#phrase');

function resetDisplay() {
  let lives = document.querySelectorAll('#scoreboard ol > li');
  mainPhrase.innerHTML = "<ul></ul>";
  for(let key in keys){
    keys[key].disabled = false;
  }
  startScreen.style.display = 'none';

  for(let i = 0; i < lives.length; i++) {
    lives[i].style.display = 'inline-block';
  }
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
      markButton(event.target)
    });
  }
}

function addKeysKeyboardClickEvents(){
  document.addEventListener('keydown', (event) =>{
    for(let i = 0; i < keys.length; i++) {
      if (keys[i].textContent === event.key) {
        markButton(keys[i]);
      }
    }
  });
}

addKeysKeyboardClickEvents();
addKeysBtnClickEvents();
