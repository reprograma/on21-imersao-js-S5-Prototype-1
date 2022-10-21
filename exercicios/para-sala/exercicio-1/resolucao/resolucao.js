// Defina um objeto employee utilizando notação literal. O objeto deve possuir as propriedades:

//  id,
//  firstname,
//  lastName
//  salary,
// e um método raiseSalary(percent) que aumenta o salário em uma determinada porcentagem.
// Crie dois objetos com valores diferentes e teste os métodos criados.

const employee = {};

employee.id = 1 ;
employee.firstName = "Maria";
employee.lastName = "Santos";
employee.salary = 40000;


employee.raiseSalary = function raiseSalary(percent) {
    const newSalary = (this.salary * percent) + this.salary
    this.salary = newSalary;
    return `O novo salário de ${this.firstName} ${this.lastName} é ${this.salary}`;

}

const employee1 = {};

employee1.id = 2 ;
employee1.firstName = "Fernando";
employee1.lastName = "Sampaio";
employee1.salary = 10000;

employee1.raiseSalary = function raiseSalary(percent) {
    const newSalary = (this.salary * percent) + this.salary
    this.salary = newSalary;
    return `O novo salário de ${this.firstName} ${this.lastName} é ${this.salary}`;

};

console.log(employee.raiseSalary(0.1));
console.log(employee1.raiseSalary(0.5));


