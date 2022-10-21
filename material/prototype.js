
function Animal(type, name, age) {
    const animal = Object.create(Animal.prototype); //criacao do objeto

    animal.name = name;
    animal.type = type;
    animal.age = age;

    animal.prototype = {
        dia: "terça",
        name: 'Luara',
    }

    return animal; //retorno do objeto
}



// Animal.prototype.comida = 'Salmão'

// console.log(Animal.prototype)

// const animal1 = Animal('cachorro', 'Aslam', 2)
// console.log(animal1)
// console.log(animal1.prototype.name);
// passando um objeto (prototype) que ja existe dentro do create
// default vazio