function Employee(firstname, lastname, salary) {
    let employee = {}

    //employee.id = Math.random().toString(20)
    //employee.id = Math.floor(Math.random() * 100).toFixed(1) 
    //Marh.random gera numero aleatorio multiplicou por 100 o math floor aredondou para baixo e o to fixed deixa uma casa decimal
    employee.id = create_UUID();
    employee.firstname = firstname;
    employee.lastname = lastname;
    employee.salary = salary;
    employee.benefits = ["Plano de Saúde", "PLR"];
 
    employee.raiseSalary = function raiseSalary(percent) {
        const newSalary  = (this.salary * percent) + this.salary;
        this.salary = newSalary
        return newSalary;
    }

    employee.addBenefits = function addBenefits(benefit) {
        this.benefits.push(benefit)
        return benefit

    }

    employee.removeBenefits = function removeBenefits(benefit){
        return (this.benefits = this.benefits.filter((b) => b != benefit))
    }

    employee.listBenefits = function listBenefits(){
        return this.benefits;
    }

    return employee;
}

function create_UUID(){
    let dt = new Date().getTime();
    let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        let r = (dt + Math.random()*16)%16 | 0;
        dt = Math.floor(dt/16);
        return (c=='x' ? r :(r&0x3|0x8)).toString(16);
    });
    
    return uuid;
}

let employee1 = Employee('Juliana', 'Amaral', 5000)

console.log(employee1)
console.log("list - " + employee1.listBenefits())
console.log("Add - " + employee1.addBenefits("Cinema free"))
console.log("Add - " + employee1.addBenefits("VA"))
console.log("RemoveAdd - " + employee1.removeBenefits("PLR"))
console.log("list - " + employee1.listBenefits())