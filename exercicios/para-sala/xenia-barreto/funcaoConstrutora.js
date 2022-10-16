//ideia retirada da internet para criação de id unico.
function create_UUID(){
    let dt = new Date().getTime();
    let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        let r = (dt + Math.random()*16)%16 | 0;
        dt = Math.floor(dt/16);
        return (c=='x' ? r :(r&0x3|0x8)).toString(16);
    });

    return uuid;
}

function Employee(firstName, lastName, salary){ //function constructor
    let employee = {};
    
    employee.id = create_UUID()
    employee.firstName = firstName;
    employee.lastName = lastName;
    employee.salary = salary;
    
    employee.raiseSalary = function raiseSalary(percent){
        let calc = this.salary * percent / 100
        return this.salary + calc
    }

    return employee
}

const employee1 = Employee('Amanda', 'Silva',3000) //function instanciation
const employee2 = Employee('Amanda', 'Silva',3000) //function instanciation

console.log(employee1);
console.log(employee2);
console.log(employee1.raiseSalary(10));

