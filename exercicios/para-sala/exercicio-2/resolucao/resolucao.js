function uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

function Employee(firstName, lastName, salary) {
    const employee = {}

    // employee.id = "id" + Math.random().toString(16).slice(2)
    employee.id = uuid()
    employee.firstName = firstName;
    employee.lastName = lastName;
    employee.salary = salary;
    employee.raiseSalary = function(percent){
        const raiseValue =  (this.salary * (percent / 100) + this.salary)
        return this.salary = raiseValue
    }
    return employee
}


const employee1 = Employee('Renata', 'Igarashi', 5000)
console.log(employee1);

const employee2 = Employee('Maria', 'Silva', 20000)
console.log(employee2);
employee2.raiseSalary(10)
console.log('Maria new salary:', employee2.raiseSalary(10));
