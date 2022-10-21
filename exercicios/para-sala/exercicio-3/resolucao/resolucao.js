// Modifique a função criada anteriormente para ter também os seguintes métodos:
// - [ ] `addBenefits(benefit)`
// - [ ] `removeBenefits(benefit)`
// - [ ] `listBenefits()`

// que devem adicionar, remover e listar um array de benefícios, respectivamente.

// Crie um objeto a partir da função construtora e teste os novos métodos criados.

// function Employee (firstName, lastName, salary){

//     const employee = {};

//     // employee.id = Math.floor(Math.random() * 100)
//     employee.id = Math.floor(Math.random() * 100).toFixed(1)
//     // employee.uid = Math.random(1, 1000)
//     // employee.id = "id" + new Date().getTime(); pode gerar o mesmo id
//     employee.fistName = firstName;
//     employee.lastName = lastName;
//     employee.salary = salary;
//     employee.benefit = ['VA', 'VR', 'auxilio creche', 'cartão SESC'];

//     employee.raiseSalary = function raiseSalary(percent){
//         const newSalary = (this.salary * percent) + this.salary;
//         this.salary = newSalary;
//        console.log(`O novo salário é ${newSalary}`) ;
//     };

//     employee.listBenefits = function listBenefits() {
//         return this.benefit;
//     }

//     employee.addBenefits = function addBenefits(benefit) {
//         this.benefit.push(benefit);
//         return benefit;
//     };

//     employee.removeBenefits = function removeBenefits(benefit) {
//         return this.benefit.pop(benefit)
//     };


//     return employee;
// }

// const name1 = Employee('Maria', 'Santos', 33_000);
// const name2 = Employee('Fernando', 'Soares', 20_000)

// console.log(name1, name2)
// console.log(name1.raiseSalary(0.10));
// console.log(name2.raiseSalary(0.5));


// console.log("List benefits " + name1.listBenefits());
// console.log("Add benefits: " + name1.addBenefits(" Gympass "));
// console.log("Remove: " + name1.removeBenefits());


// Resolução da Evelin
// function createEmployee(firstname, lastname, salary){
//   const employee = {};
//   employee.id = Math.floor(Math.random() * 100);
//   employee.firstName = firstname;
//   employee.lastname = lastname;
//   employee.salary = salary;

//   employee.raiseSalary = function raiseSalary(percent){
//       const newSalary = (this.salary * percent) + this.salary;
//       return newSalary;
//   }

//   employee.listBenefits = [];
//   employee.addBenefits = function addBenefits(benefit){
//       this.listBenefits.push(benefit);
//       return this.listBenefits;
//   }
//   employee.removeBenefits = function removeBenefits(benefit){
//       return this.listBenefits.pop();
//   } 

//   return employee;

// }

// const employee1 = createEmployee('Yoshi', 'Mario', 10000);
// console.log(employee1.addBenefits("Vale refeição"));
// console.log(employee1.addBenefits("Vale alimentação"));

// console.log(employee1.removeBenefits("Vale refeição"));

// Resolução da Claudia
function Employee(firstName, lastName, salary, benefits) {
    const employee = {};
  
    employee.id = Math.floor(Math.random() * 100);
    employee.firstName = firstName;
    employee.lastName = lastName;
    employee.salary = salary;
    employee.benefits = benefits;
  
    employee.raiseSalary = function raiseSalary(percent) {
      const aumento = this.salary * (percent / 100);
      this.salary = this.salary + aumento;
      return `O novo salário de ${this.firstName} é de: R$ ${this.salary}`;
    };

    employee.addBenefits = function addBenefit(benefit) {
      return this.benefits.push(benefit);
    };
    
    employee.removeBenefits = function removeBenefits(benefit) {
      return (this.benefits = this.benefits.filter((b) => b  != benefit));
    };
  
    employee.listBenefits = function listBenefits() {
      return `O funcionário possui estes benefícios: ${this.benefits}`;
    };
  
    return employee;
  }
  
  const employee1 = Employee("Cláudia Maria", "Prudente", 10_000, [
    "VR",
    "VT",
    "gympass",
    "auxílio creche",
  ]);
  
  console.log(employee1.listBenefits());
  employee1.removeBenefits("VR");
  console.log(employee1.listBenefits());