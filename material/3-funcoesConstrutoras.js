// função construtora é uma função que vai retornar um objeto 

function Animal(type, name, age) {
	const animal = {};

	animal.type = type;
	animal.name = name;
	animal.age = age;

	animal.eat = function eat() {
		console.log(`O ${this.type} chamado ${this.name} está comendo`);
	};

	return animal;
}

// functional instantiation é a maneira como estou criando a função e instanciando um objeto
const animal1 = Animal('tigre', 'Chaninho', 6); 
console.log(animal1)