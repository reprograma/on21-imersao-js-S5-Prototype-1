//exercicios feitos pela profa aqui

// Defina um objeto `employee` utilizando notação literal.
// O objeto deve possuir as propriedades:
// - [ ] `id`,
// - [ ] `firstname`,
// - [ ] `lastName`
// - [ ] `salary`,

// e um método:
// - [ ] `raiseSalary(percent)` que aumenta o salário em uma determinada porcentagem. 

// Crie dois objetos com valores diferentes e teste os métodos criados.

// ---

const employee = {}

employee.id = 123;
employee.firstName = 'Maria';
employee.lasName = 'Santos';
employee.salary = 40000;

employee.raiseSalary = function raiseSalary(percent){
    const newSalary = (this.salary * percent) + this.salary;
    this.salary = newSalary;
    return `O novo salário é ${newSalary}`;
}

console.log(employee.raiseSalary(0.01))


const employee1 = {
    id: 1,
    firstName: 'Gabriela',
    lastName: 'Tavares ',
    salary: 10_000,
    raiseSalary(percent) {
        const newSalary = (this.salary * percent) + this.salary;
        this.salary = newSalary;
        // return newSalary;
    }
}

console.log(employee1.raiseSalary(0.12))

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




