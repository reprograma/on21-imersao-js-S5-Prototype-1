//exercicios feitos pela profa aqui

//objetos literais, função construtora, prototype

//função construtora = retorna um objeto

employee.raiseSalary = function raiseSalary(percent) {
    const newSalary = (this.salary * percent) + this.salary;
    this.salay = newSalary;
    return `O novo salário é ${newSalary}`;
  }




  