// Desafio 1
function compareTrue(boolean1, boolean2) {
  if (boolean1 && boolean2) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(" ");
}

// Desafio 4
function concatName(array) {
  return `${array.pop()}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties * 1;
}

// Desafio 6
function highestCount(numString) {
  let counter = 0;
  let highest = null;

  for (let number of numString) {
    if (numString.indexOf(number) === 0) {
      highest = number;
      counter++;
    } else {
      if (number === highest) {
        counter++;
      } else if (number > highest) {
        highest = number;
        counter = 1;
      } else {
        continue;
      }
    }
  }

  return `highest: ${highest} | counter: ${counter}`;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (cat1 - mouse < cat2 - mouse) {
    return "cat1";
  } else if (cat2 - mouse < cat1 - mouse) {
    return "cat2";
  } else if (cat1 - mouse === cat2 - mouse) {
    return "os gatos trombam e o rato foge";
  }
}

// Desafio 8
function fizzBuzz(numString) {
  let fizzBuzzArray = [];

  for (let number of numString) {
    if (number % 3 === 0 && number % 5 === 0) {
      fizzBuzzArray.push("fizzBuzz");
    } else if (number % 3 === 0) {
      fizzBuzzArray.push("fizz");
    } else if (number % 5 === 0) {
      fizzBuzzArray.push("buzz");
    } else {
      fizzBuzzArray.push("bug!");
    }
  }

  return fizzBuzzArray;
}

// Desafio 9
function encode(string) {
  return string
    .replaceAll("a", "1")
    .replaceAll("e", "2")
    .replaceAll("i", "3")
    .replaceAll("o", "4")
    .replaceAll("u", "5");
}

function decode(string) {
  return string
    .replaceAll("1", "a")
    .replaceAll("2", "e")
    .replaceAll("3", "i")
    .replaceAll("4", "o")
    .replaceAll("5", "u");
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
};
