function animal(type, name, age) {
    const animal = {};
    animal.type = type;
    animal.name = name;
    animal.age = age;

    animal.eat = function eat() {
        console.log('comendo');
    };
    return animal;
}

const cachorroAslam = animal('cachorro', 'Aslam', 3);
const gatoMiau = animal('gato', 'Miau', 2);


console.log(cachorroAslam);
// Compare this snippet from exercicios/para-sala/explicacao.js: