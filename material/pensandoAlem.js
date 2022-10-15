function Animal (type, name, age) {
    const animal = {}
    animal.type = type
    animal.name = name
    animal.age = age

    animal.eat = function () {
        console.log(`${animal.name} is eating`)
    }

    return animal; 
}

const dog = Animal('dog', 'Rex', 3)
