const data = require('../data/zoo_data');

function getEmployeeByName(...employeeNames) {
  if (!employeeNames.length) { return {}; }

  return data.employees.find((employee) => employeeNames.includes(employee.firstName)
  || employeeNames.includes(employee.lastName));
}

module.exports = getEmployeeByName;
