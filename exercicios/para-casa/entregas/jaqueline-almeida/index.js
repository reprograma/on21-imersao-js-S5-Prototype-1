const createType = require('./createType.js');
const createAbilities = require('./createAbilities.js');
const movePokemon = require('./movePokemon.js')

const pokemonMethods ={
    move : function move(){

        console.log('--------------Move---------')
        if (this.move.find(({ name }) => name === movementName)) {
            console.log(`O ${this.name} usou o ${movementName}`);
          } else {
            console.log(`O ${this.name} não pode usar o ${movementName}`);
          }

    },
    training : function training(){},
    evolution : function evolution(){}
}

function getStats(hp, attack, defense,s_attack,s_defense, speed) {
    
    const stats = {};

    stats.hp = hp;
    stats.attack = attack;
    stats.defense = defense;
    stats.s_attack =s_attack;
    stats.s_defense = s_defense; 
    stats.speed = speed;

    return stats;
};

const evolutionStage = {
    baby: 'baby',
    basic: 'basic', 
    stage1: 'stage-1',
    stage2: 'stage-2'
}


function createPokemon(name,number, hidden_ability, exp, level,  evolution_level, nickname){

    const pokemon = {};

    pokemon.name = name;
    pokemon.number = number;
    pokemon.type = createType();
    pokemon.abilities = createAbilities();
    pokemon.hidden_ability = hidden_ability;
    pokemon.stats = getStats();
    pokemon.evolution_stage = evolutionStage;
    pokemon.level = level;
    pokemon.evolution_level = evolution_level;
    pokemon.exp = exp;
    pokemon.nickname = nickname;
    
    pokemon.move = pokemonMethods.move;
    pokemon.training = pokemonMethods.training;
    pokemon.evolution = pokemonMethods.evolution;

    return pokemon;
}

const Bulbasaur = new createPokemon('Bulbasuar', 1, 'basic', 1, 16, 0, 'Bulbasaurrr');

Bulbasaur.type = createType('Grass', ['bug', 1, 'dark', 1], ['bug', 0.5, 'dark', 1]);
Bulbasaur.abilities = createAbilities('Overgrow', 'Strengthens Grass', 'When this Pokemon');
Bulbasaur.stats = getStats(45,49,49,65,65,45)
Bulbasaur.movement = movePokemon('Aromatherapy', 'Cures the entire party of major status effects.', null, ['self', 'allies'], null,0)
console.log(Bulbasaur);

// 