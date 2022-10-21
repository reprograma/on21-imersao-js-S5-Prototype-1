function Animal(type, name, age){
    let animal = {}

    animal.type = type
    animal.name = name
    animal.age = age

    animal.eat = function eat() {
        console.log(`O ${this.type} chamado ${this.name} está comendo bolo do seu aniversário`)
    }

    return animal;
}

const animal1 = Animal('Cachorro', 'Aslam', 3);
const animal2 = Animal('Gato', 'Caju', 5)

console.log(animal1)
console.log(animal2)

animal1.eat()
animal2.eat()