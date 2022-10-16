const employee = {};

employee.id = 1;
employee.firstName = 'Daniela';
employee.lastName = 'Oliveira';
employee.salary = 5000;
employee.raiseSalary = function raiseSalary(percent){
    let calc = this.salary * percent / 100 
    return this.salary + calc

}

console.log(employee.raiseSalary(15));

const employee1 = {};

employee1.id = 2;
employee1.firstName = 'Vanessa';
employee1.lastName = 'Camargo';
employee1.salary = 4000;
employee1.raiseSalary = function raiseSalary(percent){
    let calc = this.salary * percent / 100 
    return this.salary + calc

}

console.log(employee1.raiseSalary(15));
console.log(employee1)