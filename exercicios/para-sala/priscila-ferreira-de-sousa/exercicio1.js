/*
Defina um objeto employee utilizando notação literal. O objeto deve possuir as propriedades:

 id,
 firstname,
 lastName
 salary,
 e um método:

 raiseSalary(percent) que aumenta o salário em uma determinada porcentagem.
 Crie dois objetos com valores diferentes e teste os métodos criados.
*/

function createEmployee(id, firstName, lastName, salary) {
    const employee = {};
    employee.id = id;
    employee.firstName = firstName;
    employee.lastName = lastName;
    employee.salary = salary;
    employee.raiseSalary = (percent) => {
        employee.salary += (percent / 100) * employee.salary;
        return this.salary;
    };
    return employee;
}

function imprimirEmployee(employee){
   console.log(`Id:${employee.id}, Nome:${employee.firstName} ${employee.lastName}, Salário(R$):${employee.salary}`);
}

let employee1 = createEmployee(1, "Edvanilson", "Santos", 5600);
let employee2 = createEmployee(2, "Robervalson", "Olímpio", 2350);

imprimirEmployee(employee1);
imprimirEmployee(employee2);

employee1.raiseSalary(10);
employee2.raiseSalary(20);

imprimirEmployee(employee1);
imprimirEmployee(employee2);