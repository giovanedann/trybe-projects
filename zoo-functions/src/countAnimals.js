const data = require('../data/zoo_data');

const count = () => {
  const emptyObj = {};
  data.species.forEach((item) => { emptyObj[item.name] = item.residents.length; });
  return emptyObj;
};

const countBySpecie = (obj) =>
  data.species.find((item) => item.name === obj.specie).residents.length;

const countBySex = (obj) => data.species.find((item) => item.name === obj.specie).residents
  .reduce((acc, resident) => (resident.sex === obj.sex ? acc + 1 : acc), 0);

function countAnimals(animal) {
  if (!animal) { return count(); }
  if (animal.specie && animal.sex) { return countBySex(animal); }
  return countBySpecie(animal);
}

module.exports = countAnimals;
