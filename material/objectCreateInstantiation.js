const animalMethods = {
    eat: function eat(){
        return `O ${this.type} chamado ${this.name} está comendo`;
    },

    sleep: function sleep(amount) {
        if(this.energy < 100){
            return this.energy += amount
        } else {
            return `energy is full`
        }
    }
}

function Animal(type, name, age) {
    const animal = Object.create(animalMethods)

    animal.type  = type
    animal.name = name
    animal.age = age
    animal.energy = 0

    return animal
}

const animal1 = Animal('Gato', 'Docinho', 11)

console.log(animal1)
console.log(animal1.eat())