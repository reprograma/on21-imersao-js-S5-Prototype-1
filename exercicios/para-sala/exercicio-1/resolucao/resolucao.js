
const employee = {
    id: 1,
    firstname: 'Gabriela',
    lastName: 'Tavares ',
    salary: 10_000,
    raiseSalary(percent) {
        const newSalary = (this.salary * percent) + this.salary;
        return this.salary = newSalary;
    }
}


const employee2 = {
    raiseSalary(percent) {
        const newSalary = (this.salary * percent) + this.salary;
        return newSalary;
    }
}

employee2.id = 2;
employee2.firstname = 'Vinicius';
employee2.lastName = 'Pereira ';
employee2.salary = 5_000;
