const parent = {
    name: 'Tereza',
    age: 62,
    nationality: 'brazilian'
}

// qdo cria objeto criando o object create, ele busca o que tem no parent
// ele só busca no "pai", quando ele tem aquele atributo no objeto que foi criado
const child = Object.create(parent)
child.name = 'Renata'
child.age = 39



console.log(parent)
console.log(child.name); // Renata
console.log(child.nationality) // brazilian
console.log(child.email) // undefined
