//function qualquerFuncao() {}

//console.log(qualquerFuncao.prototype);

const animalMethods = {
  //metodos
};

function Animal(type, name, age) {
  const animal = Object.create(Animal.prototype);

  animal.name = name;
  animal.type = type;
  animal.age = age;

  const prototipo = {
    dia: "terça",
    nome: "mabia",
  };

  return animal;
}

Animal.prototype.dia = "terça";

console.log(Animal.prototype);

const animal1 = Animal("cachorro", "Aslam", 3);

console.log(animal1.prototipo);
