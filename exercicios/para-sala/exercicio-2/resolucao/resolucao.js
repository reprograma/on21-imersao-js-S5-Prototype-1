function Employee(firstName, lastName, salary) {
    const employee = {}
    employee.randomId = Math.floor(Math.random() * 100) + firstName
    // employee.id = "id" + new Date().getTime();
    employee.firstName = firstName;
    employee.lastName = lastName;
    employee.salary = salary; 

    return employee;
}

console.log(Employee('Igor', 'Viana', '14000'))