const animalMehods = {

}

function Animal(type, name, age) {
    const animal = Object.create(Animal.prototype);

    animal.name = name;
    animal.type = type;
    animal.age = age;

    return animal;
}

Animal.prototype.comida = 'Salmão'

console.log(Animal.prototype)

const animal1 = Animal('cachorro', 'Aslam', 2)
console.log(animal1)
