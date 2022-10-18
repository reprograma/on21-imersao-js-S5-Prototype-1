
const employeeMethods = {
    raiseSalary: function raiseSalary(percent) {
        const newSalary = (this.salary * percent) + this.salary;
        return newSalary;
    },
    addBenefit: function addBenefit(benefit) {
        this.benefit.push(benefit);
        return `Benefício: ${benefit} adicionado com sucesso`
    },
    listBenefits: function listBenefits() {
        return `O funcionário possui estes benefícios: ${this.benefit}`;
    },
    removeBenefits: function removeBenefits(benefit) {
        this.benefit = this.benefit.filter((b) => b != benefit);
        return `Benefício: ${benefit} removido com sucesso`
    }
}

function Employee(firstName, lastName, salary) {

    const newEmployee = {};

    newEmployee.id = Math.floor(Math.random() * 10);
    newEmployee.firstName = firstName,
    newEmployee.lastName = lastName,
    newEmployee.salary = salary;
    newEmployee.benefit = []
   newEmployee.raiseSalary = employeeMethods.raiseSalary
   newEmployee.addBenefits = employeeMethods.addBenefit
   newEmployee.removeBenefits = employeeMethods.removeBenefits
   newEmployee.listBenefits = employeeMethods.listBenefits
   

    return newEmployee
}


const Jessica = Employee("Jessica", "Sampaio", 10_000);

console.log(Jessica.addBenefits("Convênio"));
console.log(Jessica.addBenefits("VA"));
console.log(Jessica.addBenefits("Gympass"));
console.log(Jessica.addBenefits("Zenklub"));
console.log(Jessica.listBenefits())
console.log(Jessica.removeBenefits("Gympass"));
console.log(Jessica.listBenefits());
console.log(Jessica.raiseSalary(0.4));


  // o this nesse caso é se referenciando ao newEmployee q vc ta querendo criar. 
