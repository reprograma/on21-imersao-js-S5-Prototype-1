// TYPE
const damage = {
  name: 'Grass',
	damage_dealt: [
		{ name: 'bug', value: 0.5 },
		{ name: 'dark', value: 1 },
	],
	damage_taken: [
		{ name: 'bug', value: 2 },
		{ name: 'dark', value: 1 },
	],
}

function Type(name, damage_dealt, damage_taken) {
  const type = {};

  type.name = name;
  type.damage_dealt = damage_dealt;
  type.damage_taken = damage_taken;

  return type;
}

const pokemonType = new Type('grass', damage.damage_dealt, damage.damage_taken);

module.exports = {Type, damage};