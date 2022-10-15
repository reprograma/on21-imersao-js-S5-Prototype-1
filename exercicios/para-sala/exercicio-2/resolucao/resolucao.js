function create_UUID(){
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (dt + Math.random()*16)%16 | 0;
        dt = Math.floor(dt/16);
        return (c=='x' ? r :(r&0x3|0x8)).toString(16);
    });
    return uuid;
}
function createEmployee(firstName, lastName, salary) {
const employee = {}

employee.id = create_UUID();
employee.firstName = firstName;
employee.lastName = lastName;
employee.salary = salary;

employee.raiseSalary = function (percent) {
    const newSalary = (this.salary
 * percent + this.salary);
    this.salary = newSalary;
    return `O novo salário é ${newSalary}`;
    };

return employee;
}

const funcionario1 = createEmployee("Maria", "da Silva", 1000);
const funcionario2 = createEmployee("Jose", "da Silva", 1000);

console.log(funcionario1);
console.log(funcionario1.raiseSalary(0.10));

// employee.id = Math.floor(Math.random() * 100).toFixed(1)
