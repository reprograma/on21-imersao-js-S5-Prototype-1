// Modifique a função criada anteriormente para ter também os seguintes métodos:
// - [ ] `addBenefits(benefit)`
// - [ ] `removeBenefits(benefit)`
// - [ ] `listBenefits()`

// que devem adicionar, remover e listar um array de benefícios, respectivamente.

// Crie um objeto a partir da função construtora e teste os novos métodos criados.

function Employee (firstName, lastName, salary){

    const employee = {};

    // employee.id = Math.floor(Math.random() * 100)
    employee.id = Math.floor(Math.random() * 100).toFixed(1)
    // employee.uid = Math.random(1, 1000)
    // employee.id = "id" + new Date().getTime(); pode gerar o mesmo id
    employee.fistName = firstName;
    employee.lastName = lastName;
    employee.salary = salary;
    employee.benefit = ['VA', 'VR', 'auxilio creche', 'cartão SESC'];

    employee.raiseSalary = function raiseSalary(percent){
        const newSalary = (this.salary * percent) + this.salary;
        this.salary = newSalary;
       console.log(`O novo salário é ${newSalary}`) ;
    };


    employee.listBenefits = function listBenefits() {
        return this.benefit;
    }

    employee.addBenefits = function addBenefits(benefit) {
        this.benefit.push(benefit);
        return benefit;
    };

    // employee.removeBenefits = function removeBenefits(benefit) {
    //     return this.benefit.pop();
    // };

    employee.removeBenefits = function removeBenefits(benefit){
        const index = this.benefits.indexOf(benefit)
        this.benefits.splice(index,1)
        return `List of benefits: ${this.benefits}`
      }

    // employee.removeBenefits = function removeBenefits(benefit) {
    //     return (this.benefits = this.benefits.filter((b) => b != benefit));
    // };

    // employee.removeBenefits = function removeBenefits(benefit) {
    //     const index = this.listBenefits.indexOf(benefit)
    //     this.listBenefits.splice(index, 1)
    // };
    

    return employee;
}

const name1 = Employee('Maria', 'Santos', 33_000);
const name2 = Employee('Fernando', 'Soares', 20_000)

console.log(name1, name2)
console.log(name1.raiseSalary(0.10));
console.log(name2.raiseSalary(0.5));


console.log("list" + name1.listBenefits());
console.log("Add: " + name1.addBenefits(" gympass "));
console.log("Remove: " + name1.removeBenefits(" VR "));

