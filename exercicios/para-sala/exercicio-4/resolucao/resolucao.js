const employeeMethods = {
  raiseSalary: function raiseSalary(percent) {
    const aumento = this.salary * (percent / 100);
    this.salary = this.salary + aumento;
    return `O novo salário de ${this.firstName} é de: R$ ${this.salary}`;
  },
  addBenefits: function addBenefit(benefit) {
    return this.benefits.push(benefit);
  },
  removeBenefits: function removeBenefits(benefit) {
    this.benefits = this.benefits.filter((element) => element != benefit);

    return `O benefício ${benefit} foi removido da lista`;
  },
  listBenefits: function listBenefits() {
    return `O funcionário possui estes benefícios: ${this.benefits}`;
  },
};

function Employee(firstName, lastName, salary) {
  let employee = {};
  employee.id = Math.floor(Math.random() * 100);
  employee.firstName = firstName;
  employee.lastName = lastName;
  employee.salary = salary;
  employee.benefits = [];

  employee.raiseSalary = employeeMethods.raiseSalary;
  employee.addBenefits = employeeMethods.addBenefits;
  employee.removeBenefits = employeeMethods.removeBenefits;
  employee.listBenefits = employeeMethods.listBenefits;

  return employee;
}

const employee1 = Employee("Luara", "Kerlen", 10000);
employee1.addBenefits("VR");

console.log(employee1.listBenefits());
console.log(employee1.removeBenefits("VR"));
console.log(employee1.listBenefits());
console.log(employee1.salary);
employee1.raiseSalary(15);
console.log(employee1.salary);
