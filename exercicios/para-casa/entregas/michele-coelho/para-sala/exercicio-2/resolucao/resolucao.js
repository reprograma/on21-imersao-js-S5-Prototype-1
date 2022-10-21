
function employee(firstname, lastName, salary) {

    const employee = {}

    employee.id = Math.floor(Math.random() * 1000);
    employee.firstname = firstname;
    employee.lastName = lastName;
    employee.salary = salary;

    employee.raiseSalary = function raiseSalary(percent) {
        const newSalary = (this.salary * percent) + this.salary;
        return `O novo salário é ${newSalary}`;
    }

    return employee;
}

const funcionario1=employee("Joana","Barbosa", 3500);
const funcionario2=employee("Sarah","Torres", 5300);
