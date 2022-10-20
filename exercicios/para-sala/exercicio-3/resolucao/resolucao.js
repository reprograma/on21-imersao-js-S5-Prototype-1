function uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

function Employee(firstName, lastName, salary) {
    const employee = {}

    // employee.id = "id" + Math.random().toString(16).slice(2)
    employee.id = uuid()
    employee.firstName = firstName;
    employee.lastName = lastName;
    employee.salary = salary;
    employee.benefits = []
    employee.benefits2 = []
    employee.raiseSalary = function(percent){
        const raiseValue =  (this.salary * (percent / 100) + this.salary)
        return this.salary = raiseValue
    }
    employee.addBenefits = function(benefit){
        return this.benefits.push(benefit)
    }

//    employee.removeBenefits = function(benefit){
//         let benefitList = this.benefits.filter(function(nameBenefit) { 
//             return nameBenefit !== benefit 
//         })
    
//         return this.benefits = benefitList
//     } 
    
employee.removeBenefits = function(benefit){
    const index = this.benefits.indexOf(benefit)
    this.benefits.splice(index,1)
    return `List of benefits: ${this.benefits}`
  }

    employee.listBenefit = function(){
        return `Benefit list: ${this.benefits} `
    }
    return employee
}


const employee1 = Employee('Renata', 'Igarashi', 5000)

employee1.addBenefits('Gympass')
employee1.addBenefits('HealthCare')
employee1.addBenefits('VA')

console.log(employee1.removeBenefits('Gympass'));
console.log(employee1.listBenefit());

// employee1.removeBenefits('Gympass')


// const employee2 = Employee('Maria', 'Silva', 20000)
// console.log(employee2);
// employee2.raiseSalary(10)
// console.log('Maria new salary:', employee2.raiseSalary(10));
