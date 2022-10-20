// let animal = {
// 	type: 'cachorro',
// 	name: 'Aslam',
// 	age: 3,
// 	hobbies: ['brincar com bolinha', 'latir pras motos', 'comer'],
// 	'can I have': true,
//     eat: function eat() {
//         console.log('comendo');
//     }
// };

let animal = {};

animal.type = 'cachorro';
animal.name = 'Aslam';
animal.age = 3;
animal.hobbies = ['brincar com bolinha', 'latir pras motos', 'comer'];
animal['can I have'] = true;
animal.eat = eat;
animal.hobbies1 = animal.hobbies[0];
animal.paly = function () {
    console.log('o primeiro hobby do animal é: ' + this.hobbies[0]);
}

animal.paly();


