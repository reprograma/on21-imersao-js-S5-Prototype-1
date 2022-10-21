//exercícios feitos pela profa aqui


const employee = {};0

employee.id = 1;
employee.firstName = 'Artemiza';
employee.lastName = 'Rocha';
employee.salary = 50000;

employee.raiseSalary = function raiseSalary(percent) {
	const newSalary = this.salary * percent + this.salary;
	this.salary = newSalary;
	return `O novo salário é ${newSalary}`;
};

console.log(employee.raiseSalary(0.1));