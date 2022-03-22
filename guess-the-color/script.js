// Selectors
const colorToGuess = document.getElementById('rgb-color');
const circles = document.getElementsByClassName('ball');
const restartButton = document.getElementById('reset-game');
const circlesContainer = document.getElementById('circle-container');
const resultText = document.getElementById('answer');
const scoreboard = document.getElementById('score');

// random color gen function
function randomColorGen() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `(${red}, ${green}, ${blue})`;
}

// function to set the rgb code of the color to be guessed to the h2 element
let colorToGuessRGB = randomColorGen();

function addColorToGuess() {
  colorToGuess.innerText = `${colorToGuessRGB}`;
}

// setting random colors to the circles of the page
function circleColorsSetter() {
  Array.from(circles).forEach((item) => {
    const circle = item;
    circle.style.backgroundColor = `rgb${randomColorGen()}`;
  });
}

// setting the color to be guessed to a random circle
function setColorToGuess() {
  const randomCircle = Math.floor(Math.random() * 6);
  Array.from(circles)[
    randomCircle
  ].style.backgroundColor = `rgb${colorToGuessRGB}`;
}

// adding event to the circles and configuring scoreboard
let score = 0;

function addEventToCircles() {
  circlesContainer.addEventListener('click', (event) => {
    if (event.target.style.backgroundColor === `rgb${colorToGuessRGB}`) {
      resultText.innerText = 'Acertou!';
      score += 3;
      scoreboard.innerText = score;
    } else {
      resultText.innerText = 'Errou! Tente novamente!';
    }
  });
}

// Reseting the game
restartButton.addEventListener('click', () => {
  Array.from(circles).forEach((item) => {
    const circle = item;
    circle.style.backgroundColor = `rgb${randomColorGen()}`;
  });

  colorToGuessRGB = randomColorGen();
  score = 0;

  setColorToGuess();
  addEventToCircles();

  colorToGuess.innerText = `${colorToGuessRGB}`;
  resultText.innerText = 'Escolha uma cor';
});

// Loading page
window.addEventListener('load', () => {
  addColorToGuess();
  circleColorsSetter();
  setColorToGuess();
  addEventToCircles();
});
