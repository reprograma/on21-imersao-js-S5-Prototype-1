//exercicios feitos pela profa aqui

const employee = {}

employee.id = 1
employee.firstName = 1
employee.lastName = 1
employee.salary = 10_000
employee.raiseSalary = function raiseSalary(percent){
    const newSalary = this.salary * percent + this.salary
    this.salary = newSalary
    return newSalary
}


console.log(employee.raiseSalary(0.1));
