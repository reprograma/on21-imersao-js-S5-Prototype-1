
const employee = {
    id: 1,
    firstname: 'Artemiza',
    lastName: 'Rocha ',
    salary: 10_000,
    raiseSalary(percent) {
        const newSalary = (this.salary * percent) + this.salary;
        return newSalary;
    }
  }
  
  console.log(employee.raiseSalary(0.12))
  
  const employee2 = {
    id: 2,
    firstname: 'Leyliane',
    lastName: 'Gonçalves',
    salary: 5_000,
    raiseSalary(percent) {
        const newSalary = (this.salary * percent) + this.salary;
        return newSalary;
    }
  }
  
  console.log(employee2.raiseSalary(0.10))