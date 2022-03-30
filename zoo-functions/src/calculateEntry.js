const data = require('../data/zoo_data');

function countEntrants(entrants) {
  if (!entrants.length) { return 0; }

  const returnedObj = { child: 0, adult: 0, senior: 0 };

  const agesObj = entrants.map((item) => ({ age: item.age }));
  agesObj.forEach((item) => {
    if (item.age < 18) {
      returnedObj.child += 1;
    } else if (item.age >= 50) {
      returnedObj.senior += 1;
    } else {
      returnedObj.adult += 1;
    }
  });

  return returnedObj;
}

function calculateEntry(entrants) {
  if (!entrants) { return 0; }

  const entriesTickets = countEntrants(entrants);
  const { prices } = data;

  return Object.entries(entriesTickets).reduce((acc, curr) => acc + prices[curr[0]] * curr[1], 0);
}

module.exports = { calculateEntry, countEntrants };
