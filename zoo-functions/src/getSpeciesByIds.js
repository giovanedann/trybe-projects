const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return data.species.filter((arrayObj) => ids.includes(arrayObj.id));
}

module.exports = getSpeciesByIds;
