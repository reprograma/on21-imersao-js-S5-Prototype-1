const employeeMethods = {
    raiseSalary: function raiseSalary(percent){
        const newSalary = (this.salary * percent) + this.salary;
        return newSalary;
    },
    addBenefits: function addBenefits(benefit){
        this.benefits.push(benefit);
        return this.benefits;
    },
    removeBenefits: function removeBenefits(benefit){
        return (this.benefits = this.benefits.filter((b) => b != benefit));
    },
    listBenefits: function listBenefits(){
        return this.benefits;
    }
}


function createEmployee(firstname, lastname, salary){
    const employee = {};
    employee.id = Math.floor(Math.random() * 100);
    employee.firstName = firstname;
    employee.lastname = lastname;
    employee.salary = salary;
    employee.benefits = [];

    employee.raiseSalary = employeeMethods.raiseSalary;
    employee.addBenefits = employeeMethods.addBenefits;
    employee.removeBenefits = employeeMethods.removeBenefits;
    employee.listBenefits = employeeMethods.listBenefits;
   
    return employee;
}

const employee1 = createEmployee('Yoshi', 'Mario', 10000);
console.log(employee1.addBenefits("Vale refeição"));