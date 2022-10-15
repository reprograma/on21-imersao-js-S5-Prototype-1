function employee ( firstName, lastName, salary) {
    let employee = {}

    employee.id = Math.floor(Math.random()* 100).toString()
    employee.firstName = firstName
    employee.lastName = lastName
    employee.salary = salary

    return employee

}

console.log(employee('Raissa', 'Barata', 10_000_000));
console.log(employee('Rosana', 'Emidio', 20_000_000));

