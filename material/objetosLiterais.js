const animal2 = {
  type: "cachorro",
  name: "Aslam",
  age: 3,
  hobbies: ["comer", "brincar", "correr atrás das motos"],
  "can I have": true,
  eat: function eat() {
    // ...implementação da função
  },
};

const eat = function eat() {
  // ...implementação da função
};

const animal = {};

animal.type = "cachorro";
animal.name = "Aslam";
animal.age = 3;
animal.hobbies = ["comer", "brincar", "correr atrás das motos"];
animal["can I have"] = true;
animal.eat = eat;
animal.play = function play() {
  console.log(`O primeiro hobby é ${this.hobbies[0]}`);
};

animal.play();
