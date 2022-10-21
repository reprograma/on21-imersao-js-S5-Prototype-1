const parent = {
name: 'Elzanir',
age: '62',
nationality:'brasileira',

}

const child = Object.create(parent)
child.name = 'Alane'
child.age = '38'

//console.log(parent)
console.log(child.name)
//console.log(child.nationality)
