const calculator = (number1, number2) => ({
  sum: number1 + number2,
  mult: number1 * number2,
  div: Math.floor(number1 / number2),
  sub: number1 - number2,
});

const arrayGenerator = (type, object) => {
  switch (type) {
    case 'keys':
      return Object.keys(object);
    case 'values':
      return Object.values(object);
    case 'entries':
      return Object.entries(object);
    default:
      throw new Error('unvalid type');
  }
};

module.exports = { calculator, arrayGenerator };
