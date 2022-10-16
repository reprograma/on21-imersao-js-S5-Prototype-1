function create_UUID(){
    let dt = new Date().getTime();
    let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        let r = (dt + Math.random()*16)%16 | 0;
        dt = Math.floor(dt/16);
        return (c=='x' ? r :(r&0x3|0x8)).toString(16);
    });

    return uuid;
};

function Employee(firstName, lastName, salary){
    let employee = {};

    employee.id = create_UUID()
    employee.firstName = firstName;
    employee.lastName = lastName;
    employee.salary = salary
    employee.benefits = [];

    employee.raiseSalary = function raiseSalary(percent){
        return this.salary += (this.salary * percent) / 100
    };

    employee.addBenefits = function addBenefits(benefit){
        return this.benefits.push(benefit)
    };

    employee.removeBenefits = function removeBenefits(benefit){
        this.benefits = this.benefits.filter(function(element){
            return element != benefit;
        })
    };

    employee.listBenefits = function listBenefits(){
        return this.benefits
    };

    return employee 
}

const employee1 = Employee('Gabriela', 'Gomes', 3500, ['VR','VT'])
//console.log(employee1);
employee1.addBenefits('VT'); // nao da para adicionar varios de uma vez?
//console.log(employee1);
console.log(employee1.listBenefits());
employee1.removeBenefits('VT');
console.log(employee1.listBenefits());

