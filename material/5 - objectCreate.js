const parent = {
<<<<<<< HEAD
    name: 'Maria',
    age: 35,
    nationality: 'brasileira',
}

const child = Object.create(parent)
child.name = 'Luara',
child.age = 27

console.log(parent)
console.log(child.name) //"Luara"
console.log(child.nationality)// brasileira
console.log(child.email)//undefined
=======
  name: 'Maria',
  age: 50,
  nationality: 'brasileira',
}

const child = Object.create(parent)
child.name = 'Luara'
child.age = 27

console.log(parent)
console.log(child.name) //Luara
console.log(child.nationality) //brasileira
console.log(child.email) //undefined
>>>>>>> f2cd03d4c46a4295b6b23d75717c279e425808b4
