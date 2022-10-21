// const animal = {
//     type: 'cachorro',
//     name: 'Aslam',
//     age: 3,
//     hobbies: ['comer', 'brincar', 'correr atrás das motos'],
//     'can I have': true,
//     eat: function eat(){
//         //...
//     }
// }

// console.log(animal);

//para prototype utiliza mais o metodo abaixo:

function eat(){
    console.log('O animal está comendo.');
}


const animal2 = {}

animal2.type = 'cachorro';
animal2.name = 'Aslam';
animal2.age = 3;
animal2.hobbies = ['comer', 'brincar', 'correr atrás das motos'];
animal2.hobbies1 = animal2.hobbies[0]
animal2['can I have'] = true;
animal2.eat = eat;
animal2.play = function play(){
    console.log(`O primero hobby é ${this.hobbies[0]}`);
}

animal2.eat();
animal2.play();


console.log(animal2);
console.log(animal2.name);
console.log(animal2.eat);
console.log(animal2.play);
console.log(animal2.hobbies);
console.log(animal2.hobbies1);