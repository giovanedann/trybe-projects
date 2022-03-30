const data = require('../data/zoo_data');

// Function to search animal by name
const searchAnimalLocation = (animalName) => data.species
  .find((item) => item.name === animalName).location;

// Function to return an array of all the employees
function searchAllEmployees() {
  return data.employees.reduce((emptyArray, employeeProfile) => {
    const { id, firstName, lastName, responsibleFor } = employeeProfile;

    const responsibleForNames = responsibleFor.map((animalId) => data.species
      .find((item) => item.id === animalId).name);

    const returnedObject = {
      id,
      fullName: `${firstName} ${lastName}`,
      species: responsibleForNames,
      locations: responsibleForNames.map((animal) => searchAnimalLocation(animal)),
    };

    return [...emptyArray, returnedObject];
  }, []);
}

// Function to return an object of an specific employee
function searchEmployeeByIdOrName(identifier) {
  const employeeProfile = data.employees.find((employee) => employee.id === identifier
  || employee.firstName === identifier || employee.lastName === identifier);

  if (!employeeProfile) { throw new Error('Informações inválidas'); }

  const { id, firstName, lastName, responsibleFor } = employeeProfile;

  const responsibleForNames = responsibleFor
    .map((animalId) => data.species.find((animal) => animal.id === animalId).name);

  return ({
    id,
    fullName: `${firstName} ${lastName}`,
    species: responsibleForNames,
    locations: responsibleForNames.map((animalName) => searchAnimalLocation(animalName)),
  });
}

// Implementing the tests function
function getEmployeesCoverage(identifier = {}) {
  if (Object.keys(identifier).length === 0) {
    return searchAllEmployees();
  }

  return searchEmployeeByIdOrName(...Object.values(identifier));
}

// console.log(getEmployeesCoverage());
module.exports = getEmployeesCoverage;
