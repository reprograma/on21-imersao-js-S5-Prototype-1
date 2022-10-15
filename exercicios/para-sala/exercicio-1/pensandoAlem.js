function Animal(type, name, age) {
    let animal = {}

    animal.type = type;
    animal.name = name;
    animal.age = age;

    animal = function eat() {
        console.log(`O ${animal.type} chamado ${animal.name} está comendo`);
    }

    return animal;
}

const animal1 = Animal('cachorro', 'Aslam', 
3);
const animal2 = Animal('gato', 'Caju', 1);

console.log('Animal 1: ', animal1);
console.log('Animal 2: ', animal2);

animal1.eat();
animal2.eat();

