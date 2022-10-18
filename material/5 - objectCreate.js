const parent = {
    name: 'Maria',
    age: 50,
    nationality: 'brasileira',
}

const child = Object.create(parent)
child.name = 'Luara'
child.age = 27

console.log(parent);
console.log(child.name);
console.log(child.nationality);
console.log(child.email);