// Desafio 10
function techList(techArray, name) {
  let objArray = [];

  if (techArray.length === 0) {
    return "Vazio!";
  }

  for (let tech of techArray) {
    let object = {
      tech,
      name,
    };
    objArray.push(object);
  }

  return objArray.sort((user1, user2) => {
    return user1.tech < user2.tech ? -1 : 1;
  });
}

// Desafio 11
function generatePhoneNumber(numberArray) {
  let counter = 0;

  if (numberArray.length !== 11) {
    return "Array com tamanho incorreto.";
  }

  for (let number of numberArray) {
    if (number < 0 || number > 9) {
      return "não é possível gerar um número de telefone com esses valores";
    }
  }

  const occurrencesCounter = (array, number) =>
    array.reduce(
      (accumulator, indexValue) =>
        indexValue === number ? accumulator + 1 : accumulator,
      0
    );

  for (let number of numberArray) {
    let occurrences = occurrencesCounter(numberArray, number);
    if (occurrences > 2) {
      return "não é possível gerar um número de telefone com esses valores";
    }
  }

  numberArray = numberArray.join("");

  return `(${numberArray.slice(0, 2)}) ${numberArray.slice(
    2,
    7
  )}-${numberArray.slice(-4)}`;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)) {
    return true;
  } else if (lineB < lineA + lineC && lineB > Math.abs(lineA - lineC)) {
    return true;
  } else if (lineC < lineB + lineA && lineC > Math.abs(lineB - lineA)) {
    return true;
  }

  return false;
}

// Desafio 13
function hydrate(string) {
  let stringArray = string.split(" ");
  stringArray = stringArray.filter(Number);

  quantity = stringArray.reduce(
    (accumulator, arrayItem) => Number(accumulator) + Number(arrayItem),
    0
  );

  return quantity > 1
    ? `${quantity} copos de água`
    : `${quantity} copo de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
