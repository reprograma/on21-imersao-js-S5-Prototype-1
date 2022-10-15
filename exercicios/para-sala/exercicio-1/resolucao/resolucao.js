const employee = {
    id: 1,
    firstName: 'John',
    lastName: 'Smith',  
    salary: 1_000,

    raiseSalary(percent){
        const newSalary = (this.salary * percent) + this.salary;
        return newSalary;
    }
}

console.log(employee.raiseSalary(0.12));