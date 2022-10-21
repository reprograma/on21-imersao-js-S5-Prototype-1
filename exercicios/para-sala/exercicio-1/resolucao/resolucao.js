//.floor = arrendondar para baixo e .ceil = arredondar para cima

const employee = {
    id: 1,
    firstname: 'Ana Paula',
    lastName: 'Gomes ',
    salary: 10_000,
    raiseSalary(percent) {
        const newSalary = (this.salary * percent) + this.salary;
        return newSalary;
    }
}

console.log(employee.raiseSalary(0.12))

const employee2 = {
    id: 2,
    firstname: 'João',
    lastName: 'Silva',
    salary: 5_000,
    raiseSalary(percent) {
        const newSalary = (this.salary * percent) + this.salary;
        return newSalary;
    }
}

console.log(employee2.raiseSalary(0.10))
