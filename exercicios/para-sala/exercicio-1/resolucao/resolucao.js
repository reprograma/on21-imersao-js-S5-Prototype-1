const employee = {
    id: 1,
    firstName: 'Renata',
    lastName: 'Igarashi',
    salary: 3000,
    raiseSalary(percent) {
        const raiseValue =  (this.salary * (percent / 100) + this.salary)
        return this.salary = raiseValue
    }
}

console.log(employee.salary)
console.log(`Employee1 new salary: ${employee.raiseSalary(10)}`)
console.log(employee.salary)

const employee2 = {
    id: 2,
    firstName: 'Maria',
    lastName: 'Silva',
    salary: 5500,
    raiseSalary(percent) {
        const raiseValue =  (this.salary * (percent / 100) + this.salary)
        return this.salary + raiseValue
    }
}
console.log(`Employee2 new salary: ${employee2.raiseSalary(20)}`)

