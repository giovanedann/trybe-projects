const average = (array) => {
  if (!array.length) { return undefined; }

  for (let item of array) {
    if (typeof item !== 'number') { return undefined; }
  }

  const sum = array.reduce((acc, arrValue) => acc + arrValue, 0);
  return Math.round(sum / array.length);
};

module.exports = average;
