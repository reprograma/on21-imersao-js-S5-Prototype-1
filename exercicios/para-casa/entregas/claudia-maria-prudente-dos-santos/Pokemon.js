function Pokemon(
  name,
  number,
  types,
  abilities,
  hidden_ability,
  stats,
  moves,
  evolution_stage,
  level,
  evolution_level,
  exp,
  nickname
) {
  this.name = name;
  this.number = number;
  this.types = types;
  this.abilities = abilities;
  this.hidden_ability = hidden_ability;
  this.stats = stats;
  this.moves = moves;
  this.evolution_stage = evolution_stage;
  this.level = level;
  this.evolution_level = evolution_level;
  this.exp = exp;
  this.nickname = nickname;
}

Pokemon.prototype.useMove = function useMove(choiceMove) {
  if (this.moves.indexOf(choiceMove) != -1) {
    return `----------------------- 
    ${this.name} usou ${choiceMove.name}`;
  } else {
    return `----------------------- 
    ${this.name} não pode usar ${choiceMove.name}`;
  }
};

Pokemon.prototype.trainPokemon = function trainPokemon(exp) {
  const auxExp = this.exp + exp;

  if (auxExp < 100) {
    this.exp = auxExp;
    return `----------------------- 
    Experiência de ${this.name}: ${this.exp} 
    Level: ${this.level}`;
  } else {
    this.level = this.level + Math.floor(auxExp / 100);
    this.exp = 0;
    return `----------------------- 
    Surpresa! Seu pokemon avançou de level.
    Experiência de ${this.name}: ${this.exp}
    Novo level: ${this.level}`;
  }
};

Pokemon.prototype.evolvePokemon = function evolvePokemon(
  name,
  type,
  abilities,
  hidden_ability,
  stats,
  moves,
  evolution_level
) {
  if (this.level >= this.evolution_level) {
    this.name = name;
    this.number++;
    const evolutionStages = ["baby", "basic", "stage-1", "stage-2"];
    this.evolution_stage =
      evolutionStages[evolutionStages.indexOf(this.evolution_stage) + 1];
    this.type = type;
    this.abilities = abilities;
    this.hidden_ability = hidden_ability;
    this.stats = stats;
    // this.moves = checkParameters(moves, this.moves);
    this.moves = moves;
    this.evolution_level = evolution_level;

    return `----------------------- 
  Pokemon evoluído. ${this.name}`;
  } else {
    return `----------------------- 
  Não foi possível evoluir ${this.name}. 
  Level atual: ${this.level}
  Level de evolução: ${this.evolution_level}`;
  }
};

const checkParameters = function (evoluteParameters, actualParameters) {
  let newParameters = [];
  let auxParameter = [];
  actualParameters.forEach((parameter) => {
    auxParameter = evoluteParameters.filter(
      (elem) => elem.name === parameter.name
    );
    if (auxParameter.length === 0) {
      newParameters.push(parameter);
    }
  });

  evoluteParameters.forEach((parameter) => {
    newParameters.push(
      newParameters.filter((elem) => elem.name != parameter.name)
    );
  });

  return newParameters;
};

module.exports = Pokemon;
