function Employee(firstName, lastName, salary, benefits) {
  const employee = {};

  employee.id = Math.floor(Math.random() * 100)
  employee.firstName = firstName;
  employee.lastName = lastName;
  employee.salary = salary;
  employee.benefits = [
    "Gympass",
    "VA",
    "VR",
    "AuxílioPet",
  ];

  employee.raiseSalary = function raiseSalary(percent) {
    const newSalary = (this.salary * percent) + this.salary;
    this.salary = newSalary;
    return `O novo salário é ${newSalary}`;
  }

  employee.addBenefits = function addBenefits(benefit) {
    this.benefits.push(benefit);
    return this.benefits;
  }
  
  employee.removeBenefits = function removeBenefits(benefit) {
    this.benefits.slice(benefit)
    return this.benefits;
  }
  
  employee.listBenefits = function listBenefits() {
    return this.benefits
  }

  return employee;
}


const employee1 = Employee("Meredith", "Grey", 9000);
console.log(employee1.raiseSalary(0.15))
console.log(employee1.addBenefits("Plano de saúde"))
console.log(employee1.removeBenefits(0))
console.log(employee1.listBenefits())
