/*
Modifique a função criada anteriormente para ter também os seguintes métodos:

 addBenefits(benefit)
 removeBenefits(benefit)
 listBenefits()
que devem adicionar, remover e listar um array de benefícios, respectivamente.

Crie um objeto a partir da função construtora e teste os novos métodos criados.
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
    employee.benefits = [];
    employee.addBenefits = (benefit) => {       
        employee.benefits.push(benefit);
    }
    employee.removeBenefits = (benefit) => {
        employee.benefits = employee.benefits.filter( b => b!= benefit);
    }
    employee.listBenefits = () => {
        employee.benefits.forEach(benefit => console.log(`Benefício: ${benefit}`));
    }
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

employee1.addBenefits('VA');
employee1.addBenefits('VR');
employee1.addBenefits('Gym pass');
employee1.addBenefits('VT');
employee1.listBenefits();

console.log('\n');
console.log(`Removendo o item da lista`)
employee1.removeBenefits('VR');
employee1.listBenefits();