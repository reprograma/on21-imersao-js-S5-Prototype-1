const { type1, type2, type3 } = require("./Type.js");
const { ability1, ability2, ability3 } = require("./Abilities.js");
const { SharedMethods } = require("./SharedMethods.js");

function Creature(
  name,
  number,
  types,
  abilities,
  hidden_ability,
  stats,
  evolution_stage,
  level,
  evolution_level,
  exp,
  nickname
) {
  const creature = {
    name: name,
    number: number,
    types: types,
    abilities: abilities,
    hidden_ability: hidden_ability,
    stats: stats,
    evolution_stage: evolution_stage,
    level: level,
    evolution_level: evolution_level,
    exp: exp,
    nickname: nickname,
    UseMovement: SharedMethods.UseMovement,
    TrainCreature: SharedMethods.TrainCreature,
    EvolveCreature: SharedMethods.EvolveCreature,
  };

  return creature;
}

function Stats(hp, attack, defense, s_attack, s_defense, speed) {
  const stats = {
    hp: hp,
    attack: attack,
    defense: defense,
    s_attack: s_attack,
    s_defense: s_defense,
    speed: speed,
  };

  return stats;
}

// Creature 1
const stats1 = Stats(45, 49, 25, 70, 80, 90);
const creature1 = Creature(
  "Lestat",
  1,
  type1,
  ability1,
  null,
  stats1,
  "basic",
  3,
  10,
  5,
  "Lele"
);

// Creature 2
const stats2 = Stats(65, 33, 45, 60, 60, 75);
const creature2 = Creature(
  "Jacob",
  2,
  type2,
  ability2,
  null,
  stats2,
  "baby",
  2,
  5,
  3,
  "JJ"
);

// Creature 3
const stats3 = Stats(55, 100, 40, 35, 45, 10);
const creature3 = Creature(
  "Dumbledore",
  3,
  type3,
  ability3,
  null,
  stats3,
  "stage-1",
  10,
  30,
  50,
  "Dumbinho"
);

module.exports = { creature1, creature2, creature3 };
