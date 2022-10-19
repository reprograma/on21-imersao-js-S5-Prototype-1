const employeeMethods = {
    raiseSalary: function raiseSalary(percent){
        let newSalary = this.salary + this.salary * ( percent/100 );
        return `O novo salário é ${newSalary}`
    },
    
    removeBenefits: function removeBenefits(){
        return this.benefits.pop();  
    },

    addBenefits: function addBenefits(benefit){
        this.benefits.push(benefit);  
        return benefit
    },

    listBenefits: function listBenefits(){
        return this.benefits;
    }
}

function Employee(firstName, lastName, salary, benefits){
    const employee = {};
    
    employee.id = "id" + new Date().getTime();
    employee.firstName = firstName;
    employee.lastName = lastName;
    employee.salary = salary;
    employee.benefits = benefits;

    return employee;
}

  let barbara = Object.create(employeeMethods);
  console.log(barbara);
  console.log("list" + barbara.benefits);
  console.log("Add: " + barbara.addBenefits(["gympass","VR", "PLR"]));
  console.log("remove: " + barbara.removeBenefits());
  console.log("list" + barbara.benefits);
  
