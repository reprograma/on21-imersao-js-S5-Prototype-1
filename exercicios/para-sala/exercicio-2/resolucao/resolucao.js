function createEmployee(firstName, lastName, salary) {
  const employee = {};

  employee.id = Math.floor(Math.random() * 100)
  employee.firstName = firstName;
  employee.lastName = lastName;
  employee.salary = salary;

  return employee;
}


const employee1 = createEmployee("Renan", "Couto", 5000);
const employee2 = createEmployee("Amanda", "Souto", 8000);

console.log(employee1, employee2);
