// Defina um objeto employee utilizando notação literal. O objeto deve possuir as propriedades:

//  id,
//  firstname,
//  lastName
//  salary,
// e um método:

//  raiseSalary(percent) que aumenta o salário em uma determinada porcentagem.
// Crie dois objetos com valores diferentes e teste os métodos criados.
let employee ={};
employee.id = 40;
employee.firstname = 'Anna Maria';
employee.lastName = 'Rodrigues';
employee.salary = 4000;

employee.raiseSalary = function raiseSalary(perc) {
    return this.salary += this.salary*perc;
 };




console.log(employee.id)
console.log(employee.raiseSalary(0.15))
