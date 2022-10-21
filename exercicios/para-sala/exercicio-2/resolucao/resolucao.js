// Crie uma função construtora para o objeto da questão anterior. O construtor deve receber como parâmetros:

//  firstname
//  lastName
//  salary
// O id deve ser gerado automaticamente sendo uma string com o formato de uid.

// Crie dois objetos com valores diferentes e teste.

function createEmployee(firstname, lastname, salary) {
    const employee = {};
  
    employee.id = "id" + new Date().getTime();
    employee.firstname = firstname;
    employee.lastname = lastname;
    employee.salary = salary;
  
    return employee;
  }
  
  const funcionario1 = createEmployee("Ana Paula", "Gomes", 1000);
  const funcionario2 = createEmployee("João", "Silva", 1000);
  
  console.log(funcionario1, funcionario2);

  Math.floor(Math.random() * 100) aí vai até 100

  