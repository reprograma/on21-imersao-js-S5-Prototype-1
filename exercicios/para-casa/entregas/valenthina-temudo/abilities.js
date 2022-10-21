const abilityPokemon = {
	name: 'Overgrow',
	summary:
		'Strengthens Grass moves to inflict 1.5× damage at 1/3 max HP or less.',
	effect:
		'When this Pokémon has 1/3 or less of its HP remaining, its Grass-type moves inflict 1.5× as much regular damage.',
};

function Ability(name, summary, effect){
  const ability = {};

  ability.name = name;
  ability.summary = summary;
  ability.effect = effect;

  return ability;
};

const pokemonAbility = new Ability('run', abilityPokemon.summary, abilityPokemon.effect)

module.exports = {Ability, abilityPokemon};