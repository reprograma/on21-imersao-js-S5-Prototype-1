const employee = {
  id: 1,
  firstName: "Mabia",
  lastNamea: "Duarte",
  salary: 30000,
  raiseSalary(percent) {
    const newSalary = this.salary * percent + this.salary;
    return newSalary;
  },
};

console.log(employee.raiseSalary(0.12));

const employee2 = {
  id: 2,
  firstName: "Jurema",
  lastNamea: "Duarte",
  salary: 29000,
  raiseSalary(percent) {
    const newSalary = this.salary * percent + this.salary;
    return newSalary;
  },
};

console.log(employee2.raiseSalary(0.5));
