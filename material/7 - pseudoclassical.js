function Animal(type, name, age) {
	this.type = type;
	this.name = name;
	this.age = age;
	this.energy = 0;
}

Animal.prototype.eat = function eat() {
	console.log(`O ${this.type} chamado ${this.name} está comendo`);
	this.energy += 5;
	console.log(`Energia atual: ${this.energy}`);
};

Animal.prototype.sleep = function sleep(amount) {
	console.log(`O ${this.type} chamado ${this.name} está dormindo`);
	this.energy += amount;
	console.log(`Energia atual: ${this.energy}`);
};

const animal1 = new Animal('cachorro', 'Aslam', 3);
const animal2 = new Animal('gato', 'Caju', 1);

console.log(animal1);
console.log(animal2);