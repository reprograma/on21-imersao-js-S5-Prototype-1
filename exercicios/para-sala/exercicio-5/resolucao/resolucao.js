
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

    const employee = Object.create(employeeMethods);

    employee.id = Math.floor(Math.random() * 10);
    employee.firstName = firstName,
    employee.lastName = lastName,
    employee.salary = salary;
    employee.benefit = []

    return employee
}


const Jessica = Employee("Jessica", "Sampaio", 10_000);

console.log(Jessica.addBenefit("Convênio"));
console.log(Jessica.addBenefit("VA"));
console.log(Jessica.addBenefit("Gympass"));
console.log(Jessica.addBenefit("Zenklub"));
console.log(Jessica.listBenefits())
console.log(Jessica)


