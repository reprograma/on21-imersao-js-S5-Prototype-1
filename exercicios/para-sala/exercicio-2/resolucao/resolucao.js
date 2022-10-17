

function employee(firstname, lastName, salary) {

    let employee = {}
    
   
    employee.id = Math.floor(Math.random() * 100).toString()
    employee.firstname = firstname;
    employee.lastName = lastName;
    employee.salary = salary;

    employee.raiseSalary = function raiseSalary(percent) {
        const newSalary = (this.salary * percent) + this.salary;
        return newSalary;
    }

    return employee;
    
} 

const newEmployee = employee('Luiza', 'Tavares', 12_000);

