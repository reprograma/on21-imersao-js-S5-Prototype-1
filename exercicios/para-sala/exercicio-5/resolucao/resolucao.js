//exercicios feitos pela profa aqui

const parent = {
    name: 'Joana',
    age: 40,
    nationality: 'brasileira',
}

const child = Object.create(parent)
child.name = 'Maria',
child.age = 37

console.log(parent)
console.log(child.name)
console.log(child.nationality)
console.log(child)
console.log(child.email)
