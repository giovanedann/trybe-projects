// Letter styles
const [styles, sizes, rotation, skew] = [
  ['newspaper', 'magazine1', 'magazine2'],
  ['medium', 'big', 'reallybig'],
  ['rotateleft', 'rotateright'],
  ['skewleft', 'skewright'],
];

// Selectors
const letterInput = document.getElementById('carta-texto');
const createLetterBtn = document.getElementById('criar-carta');
const letterContent = document.getElementById('carta-gerada');
const wordCounter = document.getElementById('carta-contador');

// Adding random classes to the letters
function addRandomClasses(element) {
  element.classList.add(styles[Math.floor(Math.random() * styles.length)]);
  element.classList.add(sizes[Math.floor(Math.random() * sizes.length)]);
  element.classList.add(rotation[Math.floor(Math.random() * rotation.length)]);
  element.classList.add(skew[Math.floor(Math.random() * skew.length)]);
}

// Count words of the letter
function countingWords() {
  return letterInput.value.split(' ').length;
}

// Add event listener to spans
function addEventToSpans() {
  letterContent.addEventListener('click', (event) => {
    const span = event.target;
    span.classList = '';
    addRandomClasses(event.target);
  });
}

// Generating the letter on button click
createLetterBtn.addEventListener('click', () => {
  if (letterInput.value === ' ' || !letterInput.value) {
    letterContent.innerHTML = 'por favor, digite o conteúdo da carta.';
    return;
  }

  const splitLetter = letterInput.value.split(' ');
  letterContent.innerHTML = '';

  splitLetter.forEach((item) => {
    const span = document.createElement('span');
    span.innerHTML = `${item}`;
    addRandomClasses(span);
    letterContent.appendChild(span);
  });

  addEventToSpans();
  wordCounter.innerText = countingWords();
});
