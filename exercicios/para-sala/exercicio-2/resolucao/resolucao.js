// Crie uma função construtora para o objeto da questão anterior.
// O construtor deve receber como parâmetros:
// - [ ] `firstname`
// - [ ] `lastName`
// - [ ] `salary`

// O `id` deve ser gerado automaticamente sendo uma `string` com o formato de `uid`.

// Crie dois objetos com valores diferentes e teste.



function Employee (firstName, lastName, salary){

    const employee = {};

    // employee.id = Math.floor(Math.random() * 100)
    employee.id = Math.floor(Math.random() * 100).toFixed(1)
    // employee.uid = Math.random(1, 1000)
    // employee.id = "id" + new Date().getTime(); pode gerar o mesmo id
    employee.fistName = firstName;
    employee.lastName = lastName;
    employee.salary = salary;

    employee.raiseSalary = function raiseSalary(percent){
        const newSalary = (this.salary * percent) + this.salary;
        this.salary = newSalary;
       console.log(`O novo salário é ${newSalary}`) ;
    }
    return employee;
}

const name1 = Employee('Maria', 'Santos', 33_000);
const name2 = Employee('Fernando', 'Soares', 20_000)

console.log(name1, name2)
console.log(name1.raiseSalary(0.10));
console.log(name2.raiseSalary(0.5));

