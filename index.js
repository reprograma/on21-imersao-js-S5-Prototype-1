const Type = require('./type');
const Ability = require('./abilities');
const Move = require('./move');
const Pokemon = require("./pokemon");

function Stats(hp, attack, sattack, sdefense, speed) {
  
  this.hp = hp;
  this.attack = attack;
  this.sattack = sattack;
  this.sdefense = sdefense;
  this.speed = speed;
}


const updateStats = new Stats("HP", "incrible attack", "new sattack", 400, 100);

console.log(updateStats)
