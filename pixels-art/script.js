// business rules of the color pickers
const colorPickers = document.getElementsByClassName('color');
const colorSelectors = document.getElementsByClassName('color-selector');

// generating random start colors
function randomColorsGenerator() {
  const firstRGBValue = Math.floor(Math.random() * 255 + 1)
  const secondRGBValue = Math.floor(Math.random() * 255 + 1)
  const thirdRGBValue = Math.floor(Math.random() * 255 + 1)
  
  return `rgb(${firstRGBValue}, ${secondRGBValue}, ${thirdRGBValue})`
}

randomColorsGenerator()
// creating local storage values
localStorage.setItem('blackSquareColor', 'rgb(0, 0, 0)');
localStorage.setItem('randomColor1', randomColorsGenerator());
localStorage.setItem('randomColor2', randomColorsGenerator());
localStorage.setItem('randomColor3', randomColorsGenerator());

// setting the color of the squares equal to the color of the color selectors
for (const selector of colorSelectors) {
  selector.addEventListener('change', (event) => {
    const colorPicker = event.target.previousElementSibling;

    colorPicker.style.backgroundColor = selector.value;
  });
}

// function to create the matrix of pixels
function matrixOfPixels(size) {
  const pixelBoard = document.querySelector('#pixel-board');
  for (let i = 1; i <= size; i++) {
    const createdLineOfPixels = document.createElement('div');
    createdLineOfPixels.className = 'pixel-line';
    pixelBoard.appendChild(createdLineOfPixels);
  }

  const pixelLines = document.getElementsByClassName('pixel-line');

  for (const line of pixelLines) {
    for (let i = 1; i <= size; i++) {
      const createdSinglePixel = document.createElement('div');
      createdSinglePixel.className = 'pixel';
      createdSinglePixel.style.cursor = 'pointer';

      createdSinglePixel.addEventListener('click', () => {
        createdSinglePixel.style.backgroundColor =
          sessionStorage.getItem('selectedColor');
      });

      line.appendChild(createdSinglePixel);
    }
  }
}

// function to clear the matrix every time the matrix size button is clicked
function clearMatrix() {
  const pixelBoard = document.querySelector('#pixel-board');

  pixelBoard.innerHTML = '';
}

// adding the selected class to the clicked colorPicker and removing from the others
for (const item of colorPickers) {
  item.addEventListener('click', () => {
    const selected = document.querySelector('.selected');

    selected.classList.remove('selected');

    item.classList.add('selected');

    sessionStorage.setItem('selectedColor', item.style.backgroundColor);
  });
}

// creating the button between the palette and the pixel board
const pixelBoard = document.querySelector('#pixel-board');

const createdResetButton = document.createElement('button');
createdResetButton.id = 'clear-board';
createdResetButton.innerText = 'Limpar';

pixelBoard.parentNode.insertBefore(createdResetButton, pixelBoard);

// reseting on click
const resetButton = document.querySelector('#clear-board');

resetButton.addEventListener('click', () => {
  const allPixels = document.getElementsByClassName('pixel');

  for (let eachPixel of allPixels) {
    eachPixel.style.backgroundColor = 'rgb(255, 255, 255)';
  }
});

// creating the input and the button for changing the board-size
const createdBoardSizeInput = document.createElement('input');

createdBoardSizeInput.type = 'number';
createdBoardSizeInput.id = 'board-size';
createdBoardSizeInput.placeholder = 'Select the size';
createdBoardSizeInput.min = 1;

const createdBoardSizeButton = document.createElement('button');

createdBoardSizeButton.id = 'generate-board';
createdBoardSizeButton.innerText = 'Generate';

pixelBoard.parentNode.insertBefore(createdBoardSizeInput, pixelBoard);
pixelBoard.parentNode.insertBefore(createdBoardSizeButton, pixelBoard);

// business rules for the input and the button of the matrix size
const boardSizeButton = document.querySelector('#generate-board');

boardSizeButton.addEventListener('click', () => {
  const boardSizeInput = document.querySelector('#board-size');
  boardSize = boardSizeInput.value;

  if (!boardSize || boardSize === 0) {
    window.alert('Board Inválido!');
    return;
  }

  if (boardSize < 5) {
    boardSize = 5;
  } else if (boardSize > 50) {
    boardSize = 50;
  }

  if (boardSize > 0) {
    clearMatrix();
    matrixOfPixels(boardSize);
  }
});

// setting the squares properties on page load
window.addEventListener('load', () => {
  for (const square of colorPickers) {
    if (square.classList.contains('black')) {
      square.style.backgroundColor = localStorage.getItem('blackSquareColor');
      square.style.cursor = 'pointer';
      square.classList.add('selected');
    }
    if (square.classList.contains('random1')) {
      square.style.backgroundColor = localStorage.getItem('randomColor1');
      square.style.cursor = 'pointer';
    }
    if (square.classList.contains('random2')) {
      square.style.backgroundColor = localStorage.getItem('randomColor2');
      square.style.cursor = 'pointer';
    }
    if (square.classList.contains('random3')) {
      square.style.backgroundColor = localStorage.getItem('randomColor3');
      square.style.cursor = 'pointer';
    }
  }

  sessionStorage.setItem('selectedColor', 'rgb(0, 0, 0)');

  matrixOfPixels(5);
});
