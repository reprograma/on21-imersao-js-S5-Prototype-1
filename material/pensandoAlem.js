function Animal(type, name, age) {
	let animal = {};

	animal.type = type;
	animal.name = name;
	animal.age = age;

	animal.eat = function eat() {
		console.log(`O ${this.type} chamado ${this.name} está comendo`);
	};

	return animal;
}

const animal1 = Animal('cachorro', 'Aslam', 3);
const animal2 = Animal('gato', 'Caju', 1);

console.log('Animal 1: ', animal1);
console.log('Animal 2: ', animal2);

animal1.eat(); //O cachorro chamado Aslam está comendo
animal2.eat(); //O gato chamado Caju está comendo