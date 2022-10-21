function Pokemon(name, number, type, abilities, hidden_abilities, evolution_stage, level, evolution_level, exp, nickname) {
  const pokemon = {};

  pokemon.name = name;
  pokemon.number = number;
  pokemon.type = type;
  pokemon.abilities = abilities;
  pokemon.hidden_abilities = hidden_abilities;
  pokemon.stats = function stats() {
    return {
      hp: 0,
      attack: 0,
      defense: 0,
      s_attack: 0,
      s_defense: 0,
      special_damage: 0,
      speed: 0
    }
  };
  pokemon.evolution_stage = evolution_stage;
  pokemon.level = level;
  pokemon.evolution_level = evolution_level;
  pokemon.exp = exp;
  pokemon.nickname = nickname;

  pokemon.move = pokemonMethods.move;
  pokemon.training = pokemonMethods.training;
  pokemon.evolution = pokemonMethods.evolution;

  return pokemon;
}


const pokemonMethods = {

  move: function move() {
    
  },

  training: function training(number) {
    if (this.exp >= 0 && this.exp < 100) {
      `Seu pokemon tem ${this.exp += number} ponto(s) de experiência`;
    } if (this.exp == 100) {
      `Seu pokemon está no level ${this.level += 1}`;
      this.exp = 0;
    }
  },

  evolution: function evolution() {
    
  },
}
