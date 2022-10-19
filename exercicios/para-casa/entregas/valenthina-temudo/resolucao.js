// TYPE
function type(name) {
  const type = {};

  type.name = name;
  type.damage_dealt = [];
  type.damage_dealt = function damage_dealt(name, value) {

    damage_dealt.name = name;  
    damage_dealt.value = value;

    return damage_dealt;
  }

  type.damage_taken = [];
  type.damage_taken = function damage_taken(name, value) {

    damage_taken.name = name;  
    damage_taken.value = value;

    return damage_taken;
  }

  return type;
}

// ABILITY
function ability(name, summary, effect){
  const ability = {};

  ability.name = name;
  ability.summary = summary;
  ability.effect = effect;

  return ability;
};

// MOVE
function move(name, description, power, target, accuracy, priority) {
  const move = {};

  move.name = name;
  move.type = type();
  move.description = description;
  move.power = power;
  move.target = target;
  move.accuracy = accuracy;
  move.priority = priority;

  return move;
}

// Pokemon Methods
const pokemonMethods = {

  move: function move() {
    console.log(`O pokemon chamado ${this.name} uso ${this.attack}`);
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

// POKEMON
function pokemon(name, number, evolution_stage, level, evolution_level, exp, nickname) {
  const pokemon = {};

  pokemon.name = name;
  pokemon.number = number;
  pokemon.type = type();
  pokemon.ability = ability();
  pokemon.hidden_ability = ability();
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
