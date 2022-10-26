const Type = require("./Type.js");
const Abilities = require("./Abilities.js");
const Move = require("./Move.js");
const Creature = require("./Creature.js");

// Criando Types
// type 1
const type1_damage_dealt = [
  { name: "Werewolf", value: 1.5 },
  { name: "Witch", value: 0.5 },
];
const type1_damage_taken = [
  { name: "Werewolf", value: 1 },
  { name: "Witch", value: 1.5 },
];
const type1 = new Type("Vampire", type1_damage_dealt, type1_damage_taken);

// type 2
const type2_damage_dealt = [
  { name: "Vampire", value: 1 },
  { name: "Witch", value: 1.5 },
];
const type2_damage_taken = [
  { name: "Vampire", value: 0.5 },
  { name: "Witch", value: 2 },
];
const type2 = new Type("Werewolf", type2_damage_dealt, type2_damage_taken);

// type 3
const type3_damage_dealt = [
  { name: "Werewolf", value: 3.5 },
  { name: "Vampire", value: 0.5 },
];
const type3_damage_taken = [
  { name: "Werewolf", value: 2 },
  { name: "Vampire", value: 1 },
];
const type3 = new Type("Witch", type3_damage_dealt, type3_damage_taken);

// Criando Abilities
const ability1 = new Abilities(
  "Mordida de Sangue",
  "A criatura utiliza as presas para paralisar o inimigo.",
  "A criatura ganha +5 de saúde e o inimigo perde -5."
);

const ability2 = new Abilities(
  "Ataque canino",
  "A criatura utiliza as garras afiadas contra o inimigo.",
  "A criatura ganha +5 de saúde e o inimigo perde -5."
);

const ability3 = new Abilities(
  "Avada Kedavra",
  "A criatura lança um feitiço no inimigo.",
  "A criatura ganha +5 de saúde e o inimigo perde -5."
);

// Criando Moves
const move1 = new Move(
  "Virar morcego",
  type1,
  "A criatura neutraliza o ataque do inimigo",
  null,
  "inimigos",
  null,
  0
);

const move2 = new Move(
  "Rosnado sônico",
  type2,
  "A criatura neutraliza o ataque do inimigo",
  null,
  "inimigos",
  null,
  0
);

const move3 = new Move(
  "Expectro Patrono",
  type3,
  "A criatura neutraliza o ataque do inimigo",
  null,
  "inimigos",
  null,
  0
);

// Criando Creatures
// Creature 1
const stats1 = {
  hp: 45,
  attack: 49,
  defense: 25,
  s_attack: 70,
  s_defense: 80,
  speed: 82,
};
const creature1 = new Creature(
  "Lestat",
  1,
  type1,
  ability1,
  null,
  stats1,
  [move1],
  "basic",
  3,
  10,
  5,
  "Lele"
);

// Creature 2
const stats2 = {
  hp: 65,
  attack: 33,
  defense: 45,
  s_attack: 60,
  s_defense: 60,
  speed: 75,
};
const creature2 = new Creature(
  "Jacob",
  2,
  type2,
  ability2,
  null,
  stats2,
  [move2],
  "baby",
  2,
  5,
  3,
  "JJ"
);

// Creature 3
const stats3 = {
  hp: 55,
  attack: 100,
  defense: 40,
  s_attack: 35,
  s_defense: 45,
  speed: 10,
};
const creature3 = new Creature(
  "Dumbledore",
  3,
  type3,
  ability3,
  null,
  stats3,
  [move3],
  "stage-1",
  10,
  30,
  50,
  "Dumbinho"
);

// Testando Tudo
console.log("\n ======== CREATURE 1 ======== \n");
console.log(creature1.UseMovement(move1)); // Lestat is using movement "Virar morcego".
console.log("*****");
console.log(creature1.UseMovement(move2)); // Lestat can't use movement "Rosnado sônico".

console.log(" \n ======== CREATURE 2 ======== \n ");
console.log(creature2.TrainCreature(90)); // Training complete. Final: Exp 93 | Level 2
console.log("*****");
console.log(creature2.TrainCreature(10)); // Training complete. Final: Exp 2 | Level 3

console.log("\n ======== CREATURE 3 ======== \n");
console.log(creature3.EvolveCreature()); // Dumbledore can't evolve yet. Current level: 10 | Evolution Level: 30
console.log("*****");
creature3.level = 30; //(alterando level à força pro teste)
console.log(
  creature3.EvolveCreature(
    "Master Dumbledore",
    this.type,
    this.abilities,
    this.hidden_ability,
    this.stats,
    this.moves,
    50
  ) // Creature successfully evolved to 'Master Dumbledore'.
);
