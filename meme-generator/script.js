// Selectors
const inputText = document.getElementById('text-input');
const inputImage = document.getElementById('meme-insert');
const memeText = document.getElementById('meme-text');
const memeImage = document.getElementById('meme-image');
const memeImageContainer = document.getElementById('meme-image-container');
const preloadedMemes = document.getElementById('preloaded-memes-container');

// Buttons
const fireBtn = document.getElementById('fire');
const waterBtn = document.getElementById('water');
const earthBtn = document.getElementById('earth');

fireBtn.addEventListener('click', () => {
  memeImageContainer.style.border = '3px dashed red';
});

waterBtn.addEventListener('click', () => {
  memeImageContainer.style.border = '5px double blue';
});

earthBtn.addEventListener('click', () => {
  memeImageContainer.style.border = '6px groove green';
});

// Default memes event listeners
preloadedMemes.addEventListener('click', (event) => {
  memeImage.src = event.target.src;
});

// Setting the input value on the image
inputText.addEventListener('keyup', () => {
  memeText.textContent = inputText.value;
});

inputImage.addEventListener('change', (event) => {
  memeImage.src = URL.createObjectURL(event.target.files[0]); // creating the path of the file selected
});
