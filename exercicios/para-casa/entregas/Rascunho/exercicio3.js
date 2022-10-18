function Employee(firstName, lastName, salary) {
  const employee = {};

  employee.id = "id" + Math.floor(Math.random() * 20);
  employee.firstName = firstName;
  employee.lastName = lastName;
  employee.salary = salary;
  employee.benefit = [" convenio ", "VA "];
  employee.raiseSalary = function raiseSalary(percent) {
    let newSalary = this.salary + this.salary * (percent / 100);
    return `O novo salário é ${newSalary}`;
  };

  employee.addBenefits = function addBenefits(benefit) {
    this.benefit.push(benefit);
    return benefit;
  };

  employee.removeBenefits = function removeBenefits() {
    return this.benefit.pop();
  };
  employee.listBenefits = function listBenefits() {
    return this.benefit;
  };

  return employee;
}

let mabia = Employee("Mabia", "Duarte", 400000);

console.log(mabia);
console.log("list: " + mabia.listBenefits());
console.log("add: " + mabia.addBenefits("gympass"));
console.log("add: " + mabia.addBenefits(" VR"));
console.log("add: " + mabia.addBenefits(" PLR"));
console.log("REMOVE: " + mabia.removeBenefits());
console.log("list: " + mabia.listBenefits());
