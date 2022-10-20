function Animal(type, name, age) {
    const animal = Object.create(Animal.prototype)

   animal.type = type
   animal.name = name
   animal.age = age

   const prototipo = {
    dia: 'terca'
   }

   return animal
}

Animal.prototype.dia = 'terça'

console.log(Animal.prototipo.dia);
