
const employeeMethods = {
  raiseSalary: function  raiseSalary(percent){	  
    let newSalary = this.salary + this.salary * ( percent/100 );
    return `O novo salário é ${newSalary}`
  },

  addBenefits: function addBenefits(benefit){
    this.benefits.push(benefit);
    return benefit;
  },

  removeBenefits: function removeBenefits(benefit) {
    (this.benefits = this.benefits.filter((element) => element !== benefit));
    return `O benefício: **${benefit}** foi removido`
  },

  listBenefits: function listBenefits(){
    return this.benefits;
  }
}

function generateId(){
  return new Date().getTime();	
}

function Employee(firstName, lastName, salary, benefits){	  
  const employee = {};

    employee.id = generateId();    
    employee.firstName = firstName;	
    employee.lastName = lastName;
    employee.salary = salary;	 
    employee.benefits = benefits;	
    employee.raiseSalary = employeeMethods.raiseSalary;
    employee.addBenefits = employeeMethods.addBenefits;
    employee.removeBenefits = employeeMethods.removeBenefits;
    employee.listBenefits = employeeMethods.listBenefits;
    return employee;
}	

let barbara = Employee('Bárbara', 'Pereira', 10000, ["VR", "VA", "convênio", "PLR", "14º salário"]);

console.log(barbara);
console.log(barbara.raiseSalary(10))
console.log("Add: " + barbara.addBenefits("gympass"));
console.log("list: " + barbara.listBenefits().join(" - "));	
console.log( barbara.removeBenefits("14º salário"));
console.log("new list: " + barbara.listBenefits().join(" - "));	
