let animal = {
	type: 'cachorro',
	name: 'Aslam',
	age: 3,
	hobbies: ['brincar com bolinha', 'latir pras motos', 'comer'],
	'can I have': true,
};

let animal1 = {};

animal1.type = 'cachorro';
animal1.name = 'Aslam';
animal1.age = 3;
animal1.hobbies = ['brincar com bolinha', 'latir pras motos', 'comer'];
animal1['can I have'] = true;

let animal2 = {
	type: 'cachorro',
	//...
	eat: function eat() {
		console.log('O animal está comendo');
	},
}