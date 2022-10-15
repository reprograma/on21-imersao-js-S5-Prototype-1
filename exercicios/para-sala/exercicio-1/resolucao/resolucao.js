const employee = {}

employee.id = 1
employee.firstName = "Mylena"
employee.lastName = "Figueiredo"
employee.salary = 10_000
employee.raiseSalary = function raiseSalary(percent){
    const newSalary = (this.salary * percent) + this.salary;
    return newSalary;
}

console.log(employee.raiseSalary(0.12))
