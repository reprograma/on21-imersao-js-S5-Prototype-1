//exercicios feitos pela profa aqui

const employee3 = {};

employee3.id = 3;
employee3.firstname = 'Luara';
employee3.lastName = 'Rangel';
employee3.salary = 50_000;

employee3.raiseSalary = function raiseSalary(percent) {
    const newSalary = (this.salary * percent) + this.salary;
    this.salary = newSalary;
    return `O novo salário é ${newSalary}`;
  }

  
  