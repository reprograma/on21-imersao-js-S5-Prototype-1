/*
Crie uma função construtora para o objeto da questão anterior. O construtor deve receber como parâmetros:

 firstname
 lastName
 salary
O id deve ser gerado automaticamente sendo uma string com o formato de uid.

Crie dois objetos com valores diferentes e teste.
 */

const objId = {
    proximoId: 0
}

function geradorId() {    
    return ++objId.proximoId;
}

function createEmployee(firstName, lastName, salary) {
    const employee = {};
    employee.id = geradorId();
    employee.firstName = firstName;
    employee.lastName = lastName;
    employee.salary = salary;
    employee.raiseSalary = (percent) => {
        employee.salary += (percent / 100) * employee.salary;
        return this.salary;
    };
    return employee;
}

function imprimirEmployee(employee) {
    console.log(`Id:${employee.id}, Nome:${employee.firstName} ${employee.lastName}, Salário(R$):${employee.salary}`);
}

let employee1 = createEmployee("Edvanilson", "Santos", 5600);
let employee2 = createEmployee("Robervalson", "Olímpio", 2350);

imprimirEmployee(employee1);
imprimirEmployee(employee2);

employee1.raiseSalary(10)
employee2.raiseSalary(20);

imprimirEmployee(employee1);
imprimirEmployee(employee2);