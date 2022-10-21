function createPokemon(
  name,
  number,
  types,
  abilities,
  hidden_ability,
  status,
  moves,
  evolution_stage,
  level,
  evolution_level,
  exp,
  nickname
) {
  this.name = name;
  this.number = number;
  this.type = types;
  this.ability = abilities;
  this.hidden_ability = hidden_ability;
  this.stats = status;
  this.moves = moves;
  this.evolution_stage = evolution_stage;
  this.level = level;
  this.evolution_level = evolution_level;
  this.exp = exp;
  this.nickname = nickname;

  return pokemon;
}



modeule.exports = createPokemon;