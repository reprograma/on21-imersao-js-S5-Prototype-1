<<<<<<< HEAD
// Defina um objeto employee utilizando notação literal. O objeto deve possuir as propriedades:

//  id,
//  firstname,
//  lastName
//  salary,
// e um método:

//  raiseSalary(percent) que aumenta o salário em uma determinada porcentagem.
// Crie dois objetos com valores diferentes e teste os métodos criados.

function create_UUID(){
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (dt + Math.random()*16)%16 | 0;
        dt = Math.floor(dt/16);
        return (c=='x' ? r :(r&0x3|0x8)).toString(16);
    });
    return uuid;
}

function employee ( firstname, lastName, age , salary){
    let employee ={};
   
    //floor é arredondar pra baixo , ceil é arredondar pra cima
  //  employee.id = Math.floor(Math.random() * 10)    ;
    employee.id = create_UUID();
    employee.firstname = firstname;
    employee.lastName = lastName;
    employee.age = age ;
    employee.salary = salary;
    employee.benfeficios = [];
    employee.raiseSalary = function raiseSalary(perc) {
        return this.salary += this.salary*perc;
     };
 
     employee.addBenefits = function addBenefits(nomebenef){
        return this.benfeficios.push(nomebenef);
     }

     employee.removeBenefits =function removeBenefits(nomebenef){
        // remover o ultimo  return this.benfeficios.pop(nomebenef);
        const index = this.benfeficios.indexOf(nomebenef);
        this.benfeficios.splice(index,1);
        return this.benfeficios
        }
 
     employee.listBenfefits = function listBenfefits(){
        return this.benfeficios ;
     }
 
     return employee;
    }
    
 
    const  Emprego  = new employee('Anna Maria', 'Rodrigues',40, 4000)
    const Emprego2 = new employee('Viviane', 'Bittencourt', 42, 3467)
    console.log(Emprego)
    // console.log(Emprego.id)
    // console.log(Emprego.raiseSalary(0.15))
    
    console.log(Emprego2)
    // console.log(Emprego2.id)
    // console.log(Emprego2.raiseSalary(0.15))
    
    console.log(Emprego.addBenefits('vr'))
    console.log(Emprego.listBenfefits())
    console.log(Emprego.addBenefits('gypas'))
    console.log(Emprego.listBenfefits())
    console.log(Emprego.removeBenefits('vr'))
    console.log(Emprego.listBenfefits())  
  
  
=======
// Resolução da Bárbara
// function Employee(firstName, lastName, salary){
//   const employee = {};
  
//   employee.id = "id" + new Date().getTime();
//   employee.firstName = firstName;
//   employee.lastName = lastName;
//   employee.salary = salary;
//   employee.benefit = [" convênio ", " VA "];
//   employee.raiseSalary = function raiseSalary(percent){
//       let newSalary = this.salary + this.salary * ( percent/100 );
//       return `O novo salário é ${newSalary}`
//   }
//   employee.addBenefits = function addBenefits(benefit){
//       this.benefit.push(benefit);
//       return benefit;
//   }
//   employee.removeBenefits = function removeBenefits(){
//       return this.benefit.pop();

//   }
//   employee.listBenefits = function listBenefits(){
//       return this.benefit;
//   }
//   return employee;
// }

// let barbara = Employee('Bárbara', 'Pereira', 10000);
// console.log(barbara);
// console.log("list" + barbara.listBenefits());
// console.log("Add: " + barbara.addBenefits(" gympass "));
// console.log("Add: " + barbara.addBenefits(" VR "));
// console.log("Add: " + barbara.addBenefits(" PLR "));
// console.log("remove: " + barbara.removeBenefits());
// console.log("list" + barbara.listBenefits());


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
    return (this.benefits = this.benefits.filter((b) => b != benefit));
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
>>>>>>> main
