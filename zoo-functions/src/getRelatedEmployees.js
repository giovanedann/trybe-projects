const data = require('../data/zoo_data');

let managers = [];

data.employees.forEach((person) => {
  if (person.managers.length > 0) {
    managers.push(...person.managers);
  }
});

managers = new Set(managers);

function isManager(id) {
  const employeeProfile = data.employees.find((employee) => employee.id === id);

  return managers.has(employeeProfile.id);
}

function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }

  const managersResponsible = data.employees.filter((employee) =>
    employee.managers.includes(managerId));

  return managersResponsible.map((person) => `${person.firstName} ${person.lastName}`);
}

module.exports = { isManager, getRelatedEmployees };
