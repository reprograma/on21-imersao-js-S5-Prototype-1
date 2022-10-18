function Employee(firstName, lastName, salary) {
  const employee = {};

  employee.id = "id" + Math.floor(Math.random() * 20); //new Date().getTime();
  employee.firstName = firstName;
  employee.lastName = lastName;
  employee.salary = salary;

  return employee;
}

const funcionario1 = Employee("Julio", "Julia", 2000);
const funcionario2 = Employee("Roberta", "Mia Colucci", 8000);

console.log(funcionario1, funcionario2);

//console.log(Math.floor(Math.random() * 20));
