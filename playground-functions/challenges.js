// Desafio 1
function compareTrue(boolean1, boolean2) {
  return boolean1 && boolean2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  return `${array.pop()}, ${array.shift()}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties * 1;
}

// Desafio 6
function highestCount(numString) {
  let [counter, highest] = [0, numString[0]];

  for (let number of numString) {
    if (number === highest) {
      counter += 1;
    } else if (number > highest) {
      highest = number;
      counter = 1;
    }
  }

  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return 'cat1';
  }
  if (Math.abs(cat2 - mouse) < Math.abs(cat1 - mouse)) {
    return 'cat2';
  }
  if (Math.abs(cat1 - mouse) === Math.abs(cat2 - mouse)) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(numString) {
  let fizzBuzzArray = numString.map((arrayItem) => {
    if (arrayItem % 15 === 0) { return 'fizzBuzz'; }
    if (arrayItem % 3 === 0) { return 'fizz'; }
    if (arrayItem % 5 === 0) { return 'buzz'; }
    return 'bug!';
  });

  return fizzBuzzArray;
}
// Desafio 9
function encode(string) {
  return string
    .replaceAll('a', '1')
    .replaceAll('e', '2')
    .replaceAll('i', '3')
    .replaceAll('o', '4')
    .replaceAll('u', '5');
}

function decode(string) {
  return string
    .replaceAll('1', 'a')
    .replaceAll('2', 'e')
    .replaceAll('3', 'i')
    .replaceAll('4', 'o')
    .replaceAll('5', 'u');
}

// Desafio 10
function techList(techArray, name) {
  let objArray = [];

  if (techArray.length === 0) {
    return 'Vazio!';
  }

  for (let tech of techArray) {
    let object = {
      tech,
      name,
    };
    objArray.push(object);
  }

  return objArray.sort((user1, user2) => (user1.tech < user2.tech ? -1 : 1));
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
