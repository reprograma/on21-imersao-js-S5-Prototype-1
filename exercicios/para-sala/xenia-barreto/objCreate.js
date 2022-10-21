const parents = {
    name: 'Angelita',
    age: 58,
    nationality: 'Brasileira'
}

console.log(parents);

const child = Object.create(parents);
child.name = 'Xenia';
child.age = 32;

console.log(child.name);
console.log(child.age);
console.log(child.nationality);
console.log(child.email);