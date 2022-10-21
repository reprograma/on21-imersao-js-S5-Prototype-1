function create_UUID() {
  let dt = new Date().getTime();
  let uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
    /[xy]/g,
    function (c) {
      let r = (dt + Math.random() * 16) % 16 | 0;
      dt = Math.floor(dt / 16);
      return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
    }
  );

  return uuid;
}

const employeeMethods = {
  raiseSalary: function raiseSalary(percent) {
    console.log((this.salary += (this.salary * percent) / 100));
  },

  addBenefits: function addBenefits(benefit) {
    console.log(this.benefits.push(...benefit));
    //DOC: https://devpleno.com/spread-operator 
  },
  /* OU OPCAO ABAIXO
    employee.addBenefits = function addBenefits(benefits) {
        benefits.forEach((b) => {
        this.benefits.push(b);
  });
};
    */

  removeBenefits: function removeBenefits(benefit) {
    this.benefits = this.benefits.filter(function (element) {
      element != benefit;
    });
    console.log(`Deletado ${benefit}.`);
  },

  listBenefits: function listBenefits() {
    console.log(this.benefits);
  },
};

function Employee(firstName, lastName, salary) {
  const employee = Object.create(employeeMethods);

  employee.firstName = firstName;
  employee.lastName = lastName;
  employee.salary = salary;
  employee.benefits = [];

  return employee;
}

const employee1 = Employee("Rodrigo", "Amancio", 3500);
console.log(employee1);
employee1.listBenefits();
employee1.addBenefits(["Vale Alimentacao", "Assistencia Medica"]);
employee1.listBenefits();
employee1.raiseSalary(100);
employee1.removeBenefits(["Vale Alimentacao"]);
employee1.listBenefits(); //ta retornando vazio, verificar depois
