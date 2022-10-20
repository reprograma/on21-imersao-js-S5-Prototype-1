const employee = {}

employee.id = 123
employee.firstname = 'Daviny'
employee.lastname = 'Silva'
employee.salary = 1000
employee.raiseSalary = function raiseSalary(percent) {
    this.salary = this.salary * (1 + percent / 100)
}

const employee2 = {
    id: 456,
    firstname: 'João',
    lastname: 'Silva',
    salary: 2000,
    raiseSalary(percent) {
        this.salary = this.salary * (1 + percent / 100)
    }
}

console.log(employee2.raiseSalary(10))