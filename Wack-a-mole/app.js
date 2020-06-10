
const square = document.querySelectorAll('.square');
const mole = document.querySelectorAll('.mole');
const timeLeft = document.querySelector('#time-left');
let score = document.querySelector('#score');

let result = 0;
// Modifica el tiempo de ·time-left
let currentTime = timeLeft.textContent;

function randomSquare() {
  square.forEach(className => {
    // Para cada cuado elimina la clase 'mole' 
    className.classList.remove('mole');
  })
  let randomPosition = square[Math.floor(Math.random() * 9)];
  // A la clase seleccionada aleatoriamente le añade la clase 'mole'
  randomPosition.classList.add('mole');
// Obtiene el id(num del 1 al 9) de randomPosition(bloque al azar)
  hitPosition = randomPosition.id;
}

square.forEach(id => {
  id.addEventListener('mouseup', () => {
    // Si la id del bloque accionado es igual a la id de randomPosition(hitPosition), result suma en 1 y el score se actualiza al valor de result
    if(id.id === hitPosition) {
      result = result + 1;
      score.textContent = result;
    }
  })
})

function moveMole() {
  let timerId = null;
  // Se ejecuta la func randomSquare cada 1 segundo
  timerId = setInterval(randomSquare, 1000);
}

moveMole();

function countDown() {
  currentTime--;
  timeLeft.textContent = currentTime;
  
  if(currentTime === 0) {
    clearInterval(timerId);
    alert('GAME OVER! Your final score is' + result);
  }
}

let timerId = setInterval(countDown, 1000);