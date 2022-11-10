function Animal() {
  const animal = {};
  animal.type = type; //"cachorro";
  animal.name = name; //"Aslam";
  animal.age = age; //3;

  animal.eat = function eat() {
    console.log(`O ${this.type} chamado ${this.name} está comendo`);
  };

  return animal;
}

//const cachorroAslam = Animal();
const animal1 = Animal("cachorro", "Aslam", 3);
const animal2 = Animal("Gato", "Caju", 1);

console.log("animal 1: ", animal1);
console.log("animal 2: ", animal2);
