
function employee(firstname, lastName, salary) {

    let employee = {}
    
   
    employee.id = Math.floor(Math.random() * 100).toString()
    employee.firstname = firstname;
    employee.lastName = lastName;
    employee.salary = salary;
    employee.benefit = ['VR, VA, Convênio_Médico'];

    employee.raiseSalary = function raiseSalary(percent) {
        const newSalary = (this.salary * percent) + this.salary;
        return newSalary;
    }

    employee.addBenefits = function addBenefits(benefit) {
        const newBenefit = this.benefit.push(benefit)
        return newBenefit;
    }

    // employee.removeBenefits = function removeBenefits(benefit) {
    //     return (this.benefits = this.benefits.filter((b) => b != benefit));
    //   };
    

    employee.removeBenefits = function removeBenefits(benefit){
        const index = this.benefit.indexOf(benefit)
        this.benefit.splice(index,1)
        return `List of benefits: ${this.benefits}`
      }

    employee.listBenefits = function listBenefits() {
        return this.benefit;
    }


    return employee;
    
} 

const newEmployee = employee('Gabriela', 'Tavares', 20_000)






