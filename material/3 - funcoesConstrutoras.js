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

const animal1 = Animal('tigre', 'bravo', 6);

console.log(animal1.type);

console.log(animal1);

