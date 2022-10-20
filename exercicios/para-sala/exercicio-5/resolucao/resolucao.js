const employeeMethods = {
    raiseSalary: function raiseSalary(percent){
        const newSalary = (this.salary * percent) + this.salary;
        return newSalary;
    },
    addBenefits: function addBenefits(benefit){
        this.benefits.push(benefit);
        return this.benefits;
    },
    removeBenefits: function removeBenefits(benefit){
        return (this.benefits = this.benefits.filter((b) => b != benefit));
    },
    listBenefits: function listBenefits(){
        return this.benefits;
    }
}


function createEmployee(firstname, lastname, salary, benefits){
    const employee = Object.create(employeeMethods);
    employee.id = Math.floor(Math.random() * 100);
    employee.firstName = firstname;
    employee.lastname = lastname;
    employee.salary = salary;
    employee.benefits = [];
   
    return employee;
}

const employee1 = createEmployee('Yoshi', 'Mario', 10000);
console.log(employee1.addBenefits("Vale refeição"));
console.log(employee1.addBenefits("Vale transporte"));
console.log(employee1.addBenefits("Gympass"));
console.log(employee1.removeBenefits("Gympass"));
console.log(employee1);

/*
// Resolução da Claudia
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
  const employee = Object.create(employeeMethods);
  employee.id = Math.floor(Math.random() * 100);
  employee.firstName = firstName;
  employee.lastName = lastName;
  employee.salary = salary;
  employee.benefits = [];

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
*/