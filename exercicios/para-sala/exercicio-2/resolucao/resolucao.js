
// Resolução da Dani
// function createEmployee(firstName, lastName, salary) {
//   const employee = {};

//   employee.id = "id" + new Date().getTime(); 
//   employee.firstName = firstName;
//   employee.lastName = lastName;
//   employee.salary = salary;

//   return employee;
// }

// const funcionario1 = createEmployee("xitãozinho", "xororo", 1000);
// const funcionario2 = createEmployee("sandy", "jr", 1000);

// console.log(funcionario1, funcionario2);



//Resolução da Gabi
// function Employee(firstName, lastName, salary) {

//   let employee = {}
  
//   employee.id = Math.floor(Math.random() * 100).toFixed(1)
//   employee.firstName = firstName;
//   employee.lastName = lastName;
//   employee.salary = salary;

//   employee.raiseSalary = function raiseSalary(percent) {
//       const newSalary = (this.salary * percent) + this.salary;
//       return newSalary;
//   }

//   return employee;
  
// } 

// const newEmployee = Employee('Luiza', 'Tavares', 12_000);
// console.log(newEmployee);

// console.log(newEmployee.raiseSalary(0.10));


//Resolução da Erica
function create_UUID(){
  var dt = new Date().getTime();
  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = (dt + Math.random()*16)%16 | 0;
      dt = Math.floor(dt/16);
      return (c=='x' ? r :(r&0x3|0x8)).toString(16);
  });
  return uuid;
}

function createEmployee(firstName, lastName, salary) {
  const employee = {}
  
  // employee.create_UUID();
  // employee.id = Math.floor(Math.random() * 100).toFixed(1)
  employee.id = create_UUID();
  employee.firstName = firstName;
  employee.lastName = lastName;
  employee.salary = salary;
  
  employee.raiseSalary = function (percent) {
      const newSalary = (this.salary * percent + this.salary);
      this.salary = newSalary;
      return `O novo salário é ${newSalary}`;
      };
  
  return employee;
  }
  
  const funcionario1 = createEmployee("Maria", "da Silva", 1000);
  const funcionario2 = createEmployee("Jose", "da Silva", 1000);
  
  console.log(funcionario1.raiseSalary(0.10));

  console.log(funcionario1)

