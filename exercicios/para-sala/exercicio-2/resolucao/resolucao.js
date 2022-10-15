function Employee(firstName, lastName, salary) {
  const employee = {};

  employee.id = Math.floor(Math.random() * 100);
  employee.firstName = firstName;
  employee.lastName = lastName;
  employee.salary = salary;

  employee.raiseSalary = function raiseSalary(percent) {
    const aumento = this.salary * (percent / 100);
    this.salary = this.salary + aumento;
    return `O novo salário de ${this.firstName} é de: R$ ${this.salary}`;
  };

  return employee;
}

const employee1 = Employee("Cláudia Maria", "Prudente", 10_000);
const employee2 = Employee("Cleber", "de Lima", 10_000);

console.log(employee1.raiseSalary(0.1));
