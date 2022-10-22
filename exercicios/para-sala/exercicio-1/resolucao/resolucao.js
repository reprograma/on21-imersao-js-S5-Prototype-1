const employee = {};
const raiseSalary = (percent) => {};

employee.id = 1;
employee.firstName = "Cláudia Maria";
employee.lastName = "Prudente";
employee.salary = 10_000;
employee.raiseSalary = function raiseSalary(percent) {
  const aumento = this.salary * (percent / 100);
  this.salary = this.salary + aumento;
  return `O novo salário de ${this.firstName} é de: R$ ${this.salary}`;
};

const employee2 = {
  id: 2,
  firstName: "Cleber",
  lastName: "de Lima",
  salary: 10_000,
  raiseSalary: function raiseSalary(percent) {
    const aumento = this.salary * (percent / 100);
    this.salary = this.salary + aumento;
    return `O novo salário de ${this.firstName} é de: R$ ${this.salary}`;
  },
};

console.log(employee.raiseSalary(20));
console.log(employee2.raiseSalary(20));
