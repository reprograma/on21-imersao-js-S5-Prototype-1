function Employee(firstName, lastName, salary) {
    const employee = {}
    employee.randomId = Math.floor(Math.random() * 100) + firstName
    // employee.id = "id" + new Date().getTime();
    employee.firstName = firstName;
    employee.lastName = lastName;
    employee.salary = salary; 
    employee.raiseSalary = (percentage) => {
        const increseOfSalary = employee.salary * percentage;
        const newSalary = employee.salary + increseOfSalary;

        employee.salary = newSalary

        return newSalary
    }

    return employee;
}

const igorViana = Employee('Igor', 'Viana', 14000)
console.log(igorViana)
igorViana.raiseSalary(0.1)
console.log(igorViana)


