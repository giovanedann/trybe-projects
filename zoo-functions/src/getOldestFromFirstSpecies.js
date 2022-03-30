const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const firstResponsible = data.employees.find((employee) => employee.id === id).responsibleFor[0];
  const ageArray = data.species.find((animalGroup) => animalGroup.id === firstResponsible).residents
    .map((item) => item.age);

  const animalProfile = data.species.find((animalGroup) => animalGroup.id === firstResponsible)
    .residents.find((animal) => animal.age === Math.max(...ageArray));

  const { age, name, sex } = animalProfile;

  return [name, sex, age];
}

module.exports = getOldestFromFirstSpecies;
