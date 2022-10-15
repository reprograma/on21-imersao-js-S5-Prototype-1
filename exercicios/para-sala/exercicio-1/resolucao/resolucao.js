const employee = {
    id: 123,
    firstName: 'John',
    lastName: 'Doe',
    salary: 1000,

    raiseSalary: function (percentage) {
        const increseOfSalary = this.salary * percentage;
        const newSalary = this.salary + increseOfSalary;

        return newSalary;
    }

}

console.log(employee.raiseSalary(0.1));

const employee2 = {
    id: 213,
    firstName: 'Alen',
    lastName: 'Doe',
    salary: 1300,

    raiseSalary: function (percentage) {
        const increseOfSalary = this.salary * percentage;
        const newSalary = this.salary + increseOfSalary;

        return newSalary;
    }

}

console.log(employee2.raiseSalary(0.1));


const employee3 = {}

employee3.id = 321;
employee3.firstName = 'Jess';
employee3.lastName = 'Doe';
employee3.salary = 1500;

employee3.raiseSalary = function (percentage) {
    const increseOfSalary = this.salary * percentage;
    const newSalary = this.salary + increseOfSalary;

    return newSalary;
}   