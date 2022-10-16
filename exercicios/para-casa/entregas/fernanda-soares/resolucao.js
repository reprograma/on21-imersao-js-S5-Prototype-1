const { move1 } = require("./Move.js");
const { creature1, creature2, creature3 } = require("./Creature.js");

console.log("======== CREATURE 1 ========");
console.log("Name: " + creature1.name);
console.log(creature1.UseMovement(move1));
console.log("======== CREATURE 2 ========");
console.log("Name: " + creature2.name);
console.log(creature2.TrainCreature());
console.log("======== CREATURE 3 ========");
console.log("Name: " + creature3.name);
console.log(creature3.EvolveCreature());
