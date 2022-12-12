
/*const employee = {
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

console.log(employee2.raiseSalary(0.10))*/

const employee = {};
employee.id = 01;
employee.firstName = 'Barbara';
employee.lastName = 'Pereira';
employee.salary = 30000;
employee.raiseSalary = function raiseSalary(percent){
                            let newSalary = this.salary + this.salary * ( percent/100 );
                            return `O novo salário é ${newSalary}`
                        }
                        
console.log(`Funcionário ${employee.firstName} ${employee.lastName}  ${employee.raiseSalary(10)}`)
 