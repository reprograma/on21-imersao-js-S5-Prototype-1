function Employee(firstName, lastName, salary, benefits) {
    const employee = {};
  
    employee.id = Math.floor(Math.random() * 100);
    employee.firstName = firstName;
    employee.lastName = lastName;
    employee.salary = salary;
    employee.benefits = benefits;
  
    employee.raiseSalary = function raiseSalary(percent) {
      const aumento = this.salary * (percent / 100);
      this.salary = this.salary + aumento;
      return `O novo salário de ${this.firstName} é de: R$ ${this.salary}`;
    };
    employee.addBenefits = function addBenefit(benefit) {
      return this.benefits.push(benefit);
    };
    employee.removeBenefits = function removeBenefits(benefit) {
      return (this.benefits = this.benefits.filter((b) => b != benefit));
    };
  
    employee.listBenefits = function listBenefits() {
      return `O funcionário possui estes benefícios: ${this.benefits}`;
    };
  
    return employee;
  }
  const employee1 = Employee("Cláudia Maria", "Prudente", 10_000, [
    "VR",
    "VT",
    "gympass",
    "auxílio creche",
  ]);
  
  console.log(employee1.listBenefits());
  employee1.removeBenefits("VR");
  console.log(employee1.listBenefits());

 
  
 
