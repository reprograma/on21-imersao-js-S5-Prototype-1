const animalMethods = {
    eat: function eat() {
        console.log(`o animal chamado ${this.name} está comendo`)
         return `O animal chamado ${this.name} está comendo`
    },

    sleep: function sleep(hours) {
        this.energy += hours;
    },
}



function Animal(type,name, age){
   const animal = Object.create(animalMethods);

   animal.type = type;
   animal.name = name;
   animal.age = age;
   animal.energy = 0;

    return animal;
}

const animal1 = Animal('cachorro', 'Aslam', 3);
console.log(animal1)
animal1.eat()
// se usa o retorno dentro da funcao, precisa da console log apos o objeto e chamar a funcao dentro do console