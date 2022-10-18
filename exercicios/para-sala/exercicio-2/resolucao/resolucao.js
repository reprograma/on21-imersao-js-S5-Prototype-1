function Employee(firstName, lastName, salary) {
  const newEmployee = {};

  newEmployee.id = Math.floor(Math.random() * 10)
  newEmployee.firstName = firstName,
    newEmployee.lastName = lastName,
    newEmployee.salary = salary;
    return newEmployee
}

const Jessica = Employee("Jessica", "Sampaio", 10_000);
const Manuela = Employee("Manuela", "Barbosa", 5_000);

console.log(Jessica);
console.log(Manuela);