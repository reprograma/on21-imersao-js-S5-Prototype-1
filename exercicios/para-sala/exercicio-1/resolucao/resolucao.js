const employee = {}

employee.id = 122;
employee.firstname = "Eliane";
employee.lastname = "Amaral";
employee.salary = 2_500;
employee.raiseSalary = function raiseSalary(percent) {
    const newSalary  = (this.salary * percent) + this.salary;
    this.salary = newSalary
    return newSalary;
}

const employee2 = {}

employee2.id = 123;
employee2.firstname = "Juliana";
employee2.lastname = "Trindade";
employee2.salary = 5000;
employee2.raiseSalary = function raiseSalary(percent) {
    const newSalary  = (this.salary * percent) + this.salary;
    this.salary = newSalary
    return newSalary;
}

console.log(employee.raiseSalary(0.15))
console.log(employee2.raiseSalary(0.25))