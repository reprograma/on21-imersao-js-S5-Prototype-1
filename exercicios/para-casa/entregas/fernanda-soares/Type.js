function Type(name, damage_dealt, damage_taken) {
  const type = {
    name: name,
    damage_dealt: damage_dealt,
    damage_taken: damage_taken,
  };

  return type;
}

// type 1
const type1_damage_dealt = [
  { name: "Werewolf", value: 1.5 },
  { name: "Witch", value: 0.5 },
];
const type1_damage_taken = [
  { name: "Werewolf", value: 1 },
  { name: "Witch", value: 1.5 },
];
const type1 = Type("Vampire", type1_damage_dealt, type1_damage_taken);

// type 2
const type2_damage_dealt = [
  { name: "Vampire", value: 1 },
  { name: "Witch", value: 1.5 },
];
const type2_damage_taken = [
  { name: "Vampire", value: 0.5 },
  { name: "Witch", value: 2 },
];
const type2 = Type("Werewolf", type2_damage_dealt, type2_damage_taken);

// type 3
const type3_damage_dealt = [
  { name: "Werewolf", value: 3.5 },
  { name: "Vampire", value: 0.5 },
];
const type3_damage_taken = [
  { name: "Werewolf", value: 2 },
  { name: "Vampire", value: 1 },
];
const type3 = Type("Witch", type3_damage_dealt, type3_damage_taken);

module.exports = { type1, type2, type3 };
