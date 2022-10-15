const employee = {}

employee.id = 2;
employee.firstName = 'John';
employee.lastName = 'Smith';
employee.salary = 3000;
employee.raiseSalary = function raiseSalary(percent) {
  const newSalary = (this.salary * percent) + this.salary;
  this.salary = newSalary;
  return `O novo salário é ${newSalary}`;
}

console.log(employee.raiseSalary(0.20))

const employee2 = {
  id: 2,
  firstname: 'Vinicius',
  lastName: 'Pereira ',
  salary: 5_000,
  raiseSalary(percent) {
      const newSalary = (this.salary * percent) + this.salary;
      return newSalary;
  }
}

console.log(employee2.raiseSalary(0.10))