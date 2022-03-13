// Desafio 11
function checkLength(numberArray) {
  if (numberArray.length !== 11) {
    return true;
  }
}

function isUnvalid(numberArray) {
  for (let number of numberArray) {
    if (number < 0 || number > 9) {
      return true;
    }
  }
}

function generateNumber(numberArray) {
  numberArray = numberArray.join('');
  return `(${numberArray.slice(0, 2)}) ${numberArray.slice(2, 7)}-${numberArray.slice(-4)}`;
}

const occurrencesCounter = function (array, number) {
  return array.reduce((acc, value) => (value === number ? acc + 1 : acc), 0);
};

function generatePhoneNumber(numberArray) {
  const length = checkLength(numberArray);
  if (length) { return 'Array com tamanho incorreto.'; }

  const unvalid = isUnvalid(numberArray);
  if (unvalid) { return 'não é possível gerar um número de telefone com esses valores'; }

  for (let number of numberArray) {
    let occurrences = occurrencesCounter(numberArray, number);
    if (occurrences > 2) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }

  return generateNumber(numberArray);
}

// Desafio 12
function firstScenario(case1, case2) {
  return case1 && case2;
}

function secondScenario(case1, case2) {
  return case1 && case2;
}

function thirdScenario(case1, case2) {
  return case1 && case2;
}

function triangleCheck(lineA, lineB, lineC) {
  const case1 = (lineB + lineC > lineA);
  const case2 = (lineA + lineC > lineB);
  const case3 = (lineB + lineA > lineC);
  const case4 = (lineA > Math.abs(lineB - lineC));
  const case5 = (lineB > Math.abs(lineA - lineC));
  const case6 = (lineC > Math.abs(lineB - lineA));

  const condition1 = firstScenario(case1, case4);
  const condition2 = secondScenario(case2, case5);
  const condition3 = thirdScenario(case3, case6);

  return condition1 || condition2 || condition3;
}

// Desafio 13
function hydrate(string) {
  let quantity;
  let stringArray = string.split(' ');
  stringArray = stringArray.filter(Number);
  quantity = stringArray.reduce(
    (accumulator, arrayItem) => Number(accumulator) + Number(arrayItem),
    0,
  );

  return quantity > 1
    ? `${quantity} copos de água`
    : `${quantity} copo de água`;
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
