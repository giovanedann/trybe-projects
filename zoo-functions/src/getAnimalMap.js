const data = require('../data/zoo_data');

// Function to create the locations object
const locationsObject = () => data.species.reduce((locationsObj, specie) => {
  const returnedObj = locationsObj;
  const { location } = specie;
  returnedObj[location] = [];
  return returnedObj;
}, {});

// Function to get animal families by location
const getByLocation = () => {
  const locations = locationsObject();
  const object = data.species.reduce((finalObject, specie) => {
    const [returnedObj, { location, name }] = [finalObject, specie];

    if (returnedObj[location]) {
      returnedObj[location].push(name);
    } else {
      returnedObj[location] = [name];
    }
    return returnedObj;
  }, locations);

  return object;
};

// Function to create the array of animals
const arrayOfAnimals = (sort, sex = undefined, specie) => {
  let returnedArray = null;
  const specieObj = data.species.find((group) => group.name === specie);

  const specieNamesArray = specieObj.residents.reduce((acc, item) => [...acc, item.name], []);

  const specieNamesArrayBySex = specieObj.residents.filter((item) => item.sex === sex)
    .map((item) => item.name);

  if (specie && sex) {
    returnedArray = specieNamesArrayBySex;
  } else if (specie) {
    returnedArray = specieNamesArray;
  }

  return sort ? returnedArray.sort() : returnedArray;
};

// Function to get the object with the location and the names of animals
const locationObjectWithNames = (sorted = false, sex = undefined) => {
  const locations = locationsObject();
  return data.species.reduce((initialObject, animalGroup) => {
    const { location, name } = animalGroup;
    const locationsKeys = Object.keys(locations);
    const returnedObject = initialObject;
    const obj = {
      [name]: arrayOfAnimals(sorted, sex, name),
    };
    if (locationsKeys.includes(location)) {
      returnedObject[location].push(obj);
    }
    return returnedObject;
  }, locations);
};

function getAnimalMap(options = {}) {
  const { includeNames, sex, sorted } = options;
  const keys = Object.keys(options);

  if (!keys.length || !includeNames) { return getByLocation(); }
  return locationObjectWithNames(sorted, sex);
}

module.exports = getAnimalMap;
