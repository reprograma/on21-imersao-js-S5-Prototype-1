/*
  Modifique a função criada anteriormente para ter também os seguintes métodos:

 addBenefits(benefit)
 removeBenefits(benefit)
 listBenefits()
que devem adicionar, remover e listar um array de benefícios, respectivamente.

Crie um objeto a partir da função construtora e teste os novos métodos criados.


 */
function employee(firstname, lastName, salary) {

    const employee = {}

    employee.id = Math.floor(Math.random() * 1000);
    employee.firstname = firstname;
    employee.lastName = lastName;
    employee.salary = salary;
    employee.beneficio = [];

    employee.raiseSalary = function raiseSalary(percent) {
        return `O novo salário é: ${(this.salary * percent) + this.salary}`;
    }
    employee.addBenefits = function addBenefits(benefit) {
        this.beneficio.push(benefit);
    }
    employee.removeBenefits = function removeBenefits(benefit) {
        return (this.beneficio = this.beneficio.filter(item => item != benefit
        ))
    }

    employee.listBenefits = function listBenefits() {
        return this.beneficio;
    }

    return employee;
}

const funcionario1 = employee("Joana", "Barbosa", 3500);
const funcionario2 = employee("Sarah", "Torres", 5300);

funcionario1.addBenefits("vale gás");
funcionario1.addBenefits(" VA");
funcionario1.addBenefits("VR");
funcionario1.addBenefits("vt");
funcionario1.removeBenefits("vale gás");
