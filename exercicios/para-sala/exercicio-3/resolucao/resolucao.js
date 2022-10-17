function Employee(firstName, lastName, salary, benefits) {

  const newEmployee = {};

  newEmployee.id = Math.floor(Math.random() * 10);
  newEmployee.firstName = firstName,
    newEmployee.lastName = lastName,
    newEmployee.salary = salary;
  newEmployee.benefits = benefits
  newEmployee.raiseSalary = function raiseSalary(percent) {
    const newSalary = (this.salary * percent) + this.salary;
    newEmployee.salary = newSalary
    return newSalary;
  }
  newEmployee.addBenefits = function addBenefit(benefit) {
    this.benefits.push(benefit);
    return `Benefício: ${benefit} adicionado com sucesso`
  };
  newEmployee.removeBenefits = function removeBenefits(benefit) {
     this.benefits = this.benefits.filter((b) => b != benefit);
     return `Benefício: ${benefit} removido com sucesso`
  };

  newEmployee.listBenefits = function listBenefits() {

      return `O funcionário possui estes benefícios: ${this.benefits}`;
  }
  return newEmployee
}


const Jessica = Employee("Jessica", "Sampaio", 10_000, []);

console.log(Jessica.addBenefits("Convênio"));
console.log(Jessica.addBenefits("VA"));
console.log(Jessica.addBenefits("Gympass"));
console.log(Jessica.addBenefits("Zenklub"));
console.log(Jessica.listBenefits())
console.log(Jessica.removeBenefits("Gympass"));
console.log(Jessica.listBenefits());

// o this nesse caso é se referenciando ao newEmployee q vc ta querendo criar. 