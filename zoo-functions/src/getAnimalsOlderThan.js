const data = require('../data/zoo_data');

function getAnimalsOlderThan(animalName, minimumAge) {
  const animalObject = data.species.find((arrayObj) => arrayObj.name === animalName);
  const olderAnimals = animalObject.residents.filter((obj) => obj.age >= minimumAge);

  return animalObject.residents.length === olderAnimals.length;
}

module.exports = getAnimalsOlderThan;
