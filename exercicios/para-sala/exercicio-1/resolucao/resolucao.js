const employee = {}

employee.id = 123
employee.firstname = 'Daviny'
employee.lastname = 'Silva'
employee.salary = 1000
employee.raiseSalary = function raiseSalary(percent) {
    this.salary = this.salary * (1 + percent / 100)
}

const employee2 = {
    id: 456,
    firstname: 'João',
    lastname: 'Silva',
    salary: 2000,
    raiseSalary(percent) {
        this.salary = this.salary * (1 + percent / 100)
    }
}

console.log(employee2.raiseSalary(10))
const employee = {
  id: 1,
  firstname: 'Gabriela',
  lastName: 'Tavares ',
  salary: 10_000,
  raiseSalary(percent) {
      const newSalary = (this.salary * percent) + this.salary;
      return newSalary;
  }
}

console.log(employee.raiseSalary(0.12))

const employee2 = {
  id: 2,
  firstname: 'Vinicius',
  lastName: 'Pereira ',
  salary: 5_000,
  raiseSalary(percent) {
      const newSalary = (this.salary * percent) + this.salary;
      return newSalary;
  }
}

console.log(employee2.raiseSalary(0.10))
