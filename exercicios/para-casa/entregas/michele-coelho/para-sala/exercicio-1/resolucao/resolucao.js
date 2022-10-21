/**
 * Defina um objeto  employee usando notação literal. O objeto deve possuir como propriedades:

 id,
 firstname,
 lastName
 salary,
e um método:

 raiseSalary(percent) que aumentar o salário em uma realizada.
Crie dois objetos com valores diferentes e teste os métodos criados.
 */

const employee = {}

employee.id = 1;
employee.firstname = 'Maria';
employee.lastName = 'Silva';
employee.salary = 5000;

employee.raiseSalary = function raiseSalary(percent) {
    const newSalary = (this.salary * percent) + this.salary;
    return `O novo salário é ${newSalary}`;
}
