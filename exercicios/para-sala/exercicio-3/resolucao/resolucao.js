function Employee(firstName, lastName, salary, benefits){
  const employee = {};
  
  employee.id = "id" + new Date().getTime();
  employee.firstName = firstName;
  employee.lastName = lastName;
  employee.salary = salary;
  employee.benefits = benefits;
  employee.raiseSalary = function raiseSalary(percent){
      let newSalary = this.salary + this.salary * ( percent/100 );
      return `O novo salário é ${newSalary}`
  }
  employee.addBenefits = function addBenefits(benefit){
    this.benefits.push(benefit);  
    return benefit
  }
  employee.removeBenefits = function removeBenefits(){
      return this.benefits.pop();

  }
  employee.listBenefits = function listBenefits(){
      return this.benefits;
  }
  return employee;
}
let barbara = Employee('Bárbara', 'Pereira', 10000, ["convênio", "VA"]);
console.log(barbara);
console.log("list" + barbara.benefits);
console.log("Add: " + barbara.addBenefits(["gympass","VR", "PLR"]));
console.log("remove: " + barbara.removeBenefits());
console.log("list" + barbara.benefits);

/* Resolução da Claudia
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
*/