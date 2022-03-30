const data = require('../data/zoo_data');

const animalNamesArray = data.species.map((item) => item.name);
const weekDaysArray = Object.keys(data.hours);

function getAnimalsInDay(weekDay) {
  return data.species.reduce((initialArray, animalGroup) => (animalGroup.availability
    .includes(weekDay) ? [...initialArray, animalGroup.name] : [...initialArray]), []);
}

function validKey(key) {
  return weekDaysArray.includes(key) || animalNamesArray.includes(key);
}

function getWeekSchedule() {
  const weekDays = Object.entries(data.hours);

  return weekDays.reduce((initialObj, dayOperation) => {
    const returnedObj = initialObj;
    const [weekday, operation] = dayOperation;
    const { open, close } = operation;
    returnedObj[weekday] = {};
    if (weekday === 'Monday') {
      returnedObj[weekday].officeHour = 'CLOSED';
      returnedObj[weekday].exhibition = 'The zoo will be closed!';
      return returnedObj;
    }
    returnedObj[weekday].officeHour = `Open from ${open}am until ${close}pm`;
    returnedObj[weekday].exhibition = getAnimalsInDay(weekday);

    return returnedObj;
  }, {});
}

function getDaySchedule(day) {
  const weekSchedule = getWeekSchedule();
  const obj = {};
  obj[day] = weekSchedule[day];

  return obj;
}

function getSchedule(scheduleTarget) {
  if (!scheduleTarget || !validKey(scheduleTarget)) {
    return getWeekSchedule();
  }

  if (animalNamesArray.includes(scheduleTarget)) {
    return data.species.find((item) => item.name === scheduleTarget).availability;
  }

  if (weekDaysArray.includes(scheduleTarget)) {
    return getDaySchedule(scheduleTarget);
  }
}

module.exports = getSchedule;
