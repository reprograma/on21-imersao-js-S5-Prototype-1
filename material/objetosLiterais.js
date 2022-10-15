const animal = {}

animal.type = 'cachorro'
animal.name = 'dogo'
animal.age = '3'
animal.hobbies = ['comer', 'brincar', 'dormir']
animal['can i have'] = true


const animal2 = {
    eat: function eat() {
        return console.log('oieeee');
        //...
    }
}

console.log(animal2.eat());

//conseguimos usar this dentro de objetos literais tb 