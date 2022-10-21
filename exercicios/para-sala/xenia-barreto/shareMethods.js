function create_UUID(){
    let dt = new Date().getTime();
    let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        let r = (dt + Math.random()*16)%16 | 0;
        dt = Math.floor(dt/16);
        return (c=='x' ? r :(r&0x3|0x8)).toString(16);
    });

    return uuid;
};

const employeeMethods = {
    raiseSalary: function raiseSalary(percent){
        return this.salary += (this.salary * percent) / 100
    },    

    addBenefits: function addBenefits(benefit){
        return this.benefits.push(benefit)
    },    

    removeBenefits: function removeBenefits(benefit){
        this.benefits = this.benefits.filter(function(element){
            return element != benefit;
        })    
    },    

    listBenefits: function listBenefits(){
        return this.benefits
    },    
};   

function Employee(firstName, lastName, salary){
    let employee = {};

    employee.id = create_UUID()
    employee.firstName = firstName;
    employee.lastName = lastName;
    employee.salary = salary
    employee.benefits = [];

    employee.raisaSalary = employeeMethods.raiseSalary;
    employee.addBenefits = employeeMethods.addBenefits;
    employee.removeBenefits = employeeMethods.removeBenefits;
    employee.listBenefits = employeeMethods.listBenefits;

    return employee
}

const employee1 = Employee('Gabriela', 'Gomes', 3500)
console.log(employee1);
console.log(employee1.listBenefits());
employee1.addBenefits('VT')
console.log(employee1.listBenefits());
