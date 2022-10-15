//incluir 3 metódos: addBenefit(), removeBenefit(), listBenefits()

function create_UUID(){
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (dt + Math.random()*16)%16 | 0;
        dt = Math.floor(dt/16);
        return (c=='x' ? r :(r&0x3|0x8)).toString(16);
    });
    return uuid;
}
function createEmployee(firstName, lastName, salary) {
const employee = {}

employee.id = create_UUID();
employee.firstName = firstName;
employee.lastName = lastName;
employee.salary = salary;
employee.benefit = ["VA", "VR", "planoDeSaude"]

employee.raiseSalary = function (percent) {
    const newSalary = (this.salary
 * percent + this.salary);
    this.salary = newSalary;
    return `O novo salário é ${newSalary}`;
    };

    employee.addBenefits = function addBenefits(benefit){
        this.benefit.push(benefit);
        return benefit;
    }
    employee.removeBenefits = function removeBenefits(){
        return this.benefit.pop();

    }
    employee.listBenefits = function listBenefits(){
        return this.benefit;
    }

return employee;
}

const funcionario1 = createEmployee("Maria", "da Silva", 1000);
const funcionario2 = createEmployee("Jose", "da Silva", 1000);

console.log(funcionario1);
console.log("list" + funcionario1.listBenefits());
console.log("Add: " + funcionario1.addBenefits(" gympass "));
console.log("Add: " + funcionario1.addBenefits(" VR "));
console.log("Add: " + funcionario1.addBenefits(" PLR "));
console.log("remove: " + funcionario1.removeBenefits());
console.log("list" + funcionario1.listBenefits());

// console.log(funcionario1);
// console.log(funcionario1.raiseSalary(0.10));
// employee.id = Math.floor(Math.random() * 100).toFixed(1)