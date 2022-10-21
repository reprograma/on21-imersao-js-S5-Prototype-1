const damageDealt = {
  grass: [
    { name: "bug", value: 0.5 },
    { name: "dark", value: 1 },
  ],
  poison: [
    { name: "bug", value: 0.5 },
    { name: "dark", value: 1 },
  ],
};

const damageTaken = {
    grass: [
      { name: "bug", value: 0.5 },
      { name: "dark", value: 1 },
    ],
    poison: [
      { name: "bug", value: 0.5 },
      { name: "dark", value: 1 },
    ],
  };

function createType(typeName, damageDealt,damageTaken ) {
  this.typeName = typeName;
  this.damageDealt = damageDealt;
  this.damageTaken = damageTaken;
}

const typeGrass = new createType('grass', damageDealt.grass, damageTaken.grass)
const typePoison = new createType('poison', damageDealt.poison, damageTaken.poison)

module.exports = {
  damageDealt,
  damageTaken , 
  createType
}
