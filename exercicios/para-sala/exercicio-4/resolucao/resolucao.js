const employeeMethods = {
    raiseSalary: function raiseSalary(percent) {
        return `O novo salário é: ${(this.salary * percent) + this.salary}`;
    },
    addBenefits: function addBenefits(benefit) {
        this.beneficio.push(benefit);
    },
    removeBenefits: function removeBenefits(benefit) {
        return (this.beneficio = this.beneficio.filter(item => item != benefit
        ))
    },

};
//função construtora
function Employee(firstName, lastName, salary){
    
    const employee = {};

    employee.id = Math.floor(Math.random() * 1000);
    employee.firstName = firstName;
    employee.lastName = lastName;
    employee.salary = salary;
    employee.beneficio = [];

    employee.raiseSalary = employeeMetodos.raiseSalary;
    employee.addBenefits = employeeMetodos.addBenefits;
    employee.removeBenefits = employeeMetodos.removeBenefits;
    employee.listBenefits = employeeMetodos.listBenefits;

    return employee;
};

const funcionario2 = employee("Sarah", "Torres", 5300);
console.log(funcionario2);
funcionario2.addBenefits("VT");
funcionario2.addBenefits("VA");
funcionario2.addBenefits("vale");
funcionario2.removeBenefits("vale");
console.log(funcionario2.listBenefits());
console.log(funcionario2.raiseSalary(0.4));
