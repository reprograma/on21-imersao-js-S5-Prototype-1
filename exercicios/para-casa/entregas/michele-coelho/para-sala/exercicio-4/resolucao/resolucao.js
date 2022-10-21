/*
Com base no código criado na questão anterior, cria uma função construtora usando a instância Compartilhada Funcional.
Teste tudo o que foi criado.
 */


const employeeMetodos = {
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
    listBenefits: function listBenefits() {
        return this.beneficio;
    }
}
function employee(firstname, lastName, salary) {

    const employee = {}

    employee.id = Math.floor(Math.random() * 1000);
    employee.firstname = firstname;
    employee.lastName = lastName;
    employee.salary = salary;
    employee.beneficio = [];

    employee.raiseSalary = employeeMetodos.raiseSalary;
    employee.addBenefits = employeeMetodos.addBenefits;
    employee.removeBenefits = employeeMetodos.removeBenefits;
    employee.listBenefits = employeeMetodos.listBenefits;

    return employee;
}
const funcionario2 = employee("Sarah", "Torres", 5300);
funcionario2.addBenefits("vt");
funcionario2.addBenefits("vA");
funcionario2.addBenefits("vale");
funcionario2.removeBenefits("vale");