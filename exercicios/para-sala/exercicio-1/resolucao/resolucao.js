const employee = {
    id: 0, 
    firstName: "Evelin",
    lastName: "Une",
    salary: 1200.00,
    raiseSalary(percent){
        const newSalary = (this.salary * percent) + this.salary;
        return newSalary;
    }
}

console.log(employee.raiseSalary(0.10));
