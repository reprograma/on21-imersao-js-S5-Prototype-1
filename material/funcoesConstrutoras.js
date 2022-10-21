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