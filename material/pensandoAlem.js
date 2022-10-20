function Animal(type, name, age) {
    const animal = {}

    animal.type  = type
    animal.name = name
    animal.age = age

    animal.eat = function eat(){
        return `O ${this.type} chamado ${this.name} está comendo`;
    }
    return animal
}

const cachorroAslam = Animal('cachorro', 'Aslam', 3)

const gatoCaco = Animal('gato', 'Caco', 11)

console.log(cachorroAslam.eat())
console.log(gatoCaco.eat())
