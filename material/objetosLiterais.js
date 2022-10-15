

// function eat() {
//     console.log('O animal está comendo')
// }

// const animal = {}

// animal.type = 'cachorro';
// animal.name ='Aslam';
// animal.age = 3;
// animal.hobbies = ['comer', 'brincar', 'dormir'];
// animal['can I have'] = true;
// animal.eat = eat;
// animal.play = function play() {
//     console.log(`O primeiro hobby é ${this.hobbies}`)
// }

// animal.eat();

// console.log(animal.eat)
// console.log(animal.hobby1)
// // console.log(animal.hobbies[0])

function Animal(type, name, age){

    const animal = {};

    animal.type = type;
    animal.name = name;
    animal.age = age;

    animal.eat = function eat(){
        console.log(`O ${this.type} chamado ${this.name} está comendo`);
    }

    return animal;

}

const animal1 = Animal('cachorro', 'Aslam', 3);
const animal2 = Animal('gato', 'liria', 2)

console.log(animal1);
console.log(animal2);

animal1.eat();
animal2.eat();
=======
// const animal = {
//   type: 'cachorro',
//   name: 'Aslam',
//   age: 3,
//   hobbies: ['comer', 'brincar', 'correr atrás das motos'],
//   'can I have': true,
//   eat: function eat() {
//     //...
//   }
// }


function eat() {
  console.log('O animal está comendo')
}

const animal = {}

animal.type = 'cachorro';
animal.name = 'Aslam';
animal.age = 3;
animal.hobbies = ['comer', 'brincar', 'correr atrás das motos'];
animal['can I have'] = true;
animal.eat = eat;
animal.play = function play() {
  console.log(`O primeiro hobby é ${this.hobbies}`)
}

animal.eat()


