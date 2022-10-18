function Employee(firstName, lastName, salary) {
    const employee = {}
    employee.randomId = Math.floor(Math.random() * 100) + firstName
    // employee.id = "id" + new Date().getTime();
    employee.firstName = firstName;
    employee.lastName = lastName;
    employee.salary = salary; 
    employee.benefits = []
    employee.raiseSalary = (percentage) => {
        const increseOfSalary = employee.salary * percentage;
        const newSalary = employee.salary + increseOfSalary;

        employee.salary = newSalary

        return newSalary
    }
    employee.addBenefits = (benefit) => {
        employee.benefits = [...employee.benefits, ...benefit]
    }

    employee.removeBenefits = (benefit) => {
        employee.benefits = employee.benefits.filter((item) => benefit !== item)
    }

    employee.listOfBenefits = () => employee.benefits 

    return employee;
}

const igorViana = Employee('Igor', 'Viana', 14000)
igorViana.raiseSalary(0.1)
igorViana.addBenefits(['VR', 'VA', 'Gympass'])
igorViana.removeBenefits('VA')
console.log(igorViana.listOfBenefits())




