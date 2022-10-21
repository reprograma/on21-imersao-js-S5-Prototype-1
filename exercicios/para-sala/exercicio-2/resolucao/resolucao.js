function Employee(firstname, lastname, salary) {
    let employee = {}

    //employee.id = Math.random().toString(20)
    //employee.id = Math.floor(Math.random() * 100).toFixed(1) 
    //Marh.random gera numero aleatorio multiplicou por 100 o math floor aredondou para baixo e o to fixed deixa uma casa decimal
    employee.id = create_UUID();
    employee.firstname = firstname;
    employee.lastname = lastname;
    employee.salary = salary

    employee.raiseSalary = function raiseSalary(percent) {
        const newSalary  = (this.salary * percent) + this.salary;
        this.salary = newSalary
        return newSalary;
    }

    return employee;
}

function create_UUID(){
    let dt = new Date().getTime();
    let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        let r = (dt + Math.random()*16)%16 | 0;
        dt = Math.floor(dt/16);
        return (c=='x' ? r :(r&0x3|0x8)).toString(16);
    });
    
    return uuid;
}

const employee1 = Employee('Juliana', 'Amaral', 5000)
const employee2 = Employee('Amanda', 'Santos', 2000)

console.log(employee1, employee2)
console.log(employee1.raiseSalary(0.15),  employee2.raiseSalary(0.25))
