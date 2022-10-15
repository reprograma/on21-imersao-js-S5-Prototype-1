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

