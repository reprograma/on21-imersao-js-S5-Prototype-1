/**
const animal = {
    type: 'cachorro',
    name: 'Aslam',
    age: 3,
    hobbies: ['comer', 'brincar', ' atrás das motos'],
    'can I have': true,
    eat: function eat() {
        //... implementação aqui
    }
}

*/

function eat() {
   console.log('O animal está comendo')
}
const animal = {}

animal.type = 'cachorro';
animal.name = 'Aslam',
animal.age = 3,
animal.hobbies = ['comer', 'brincar', ' correr atrás das motos']
animal['can I have'] = true;
animal.eat = eat;
animal.hobby2 = animal.hobbies[1]
animal.play = function play() {
    console.log(`O primeiro hobby é ${this.hobbies[0]}`)
}
animal.comer = function comer() {
    console.log(`O ${this.type} chamado ${this.name} está comendo bolo do seu aniversário`)
}

animal.play();
animal.comer();

console.log(animal.name)
console.log(animal.email)
console.log(animal.hobbies[2])
console.log(animal.hobby2)