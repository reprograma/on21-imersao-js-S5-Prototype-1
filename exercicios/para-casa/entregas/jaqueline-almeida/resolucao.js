function createType(name, damage_dealt, damage_taken){

    const type = {};

    type.name = name;
    type.damage_dealt = damage_dealt;
    type.damage_taken = damage_taken;

    return createType;
}


function createAbilities(name,summary, effect){

    const abilities = {};

    abilities.name = name; 
	abilities.summary = summary;
	abilities.effect = effect; 

    return createAbilities;
}	

function move(name,description,power, target, accuracy,propriety){

    const move = {};

    move.name = name; 
	move.type = createType();
	move.description = description; 
    move.power = power;
    move.target = target;
    move.accuracy = accuracy;
    move.propriety = propriety;

    return move;
}	

const pokemonMethods = {
    move: function move(){},
    training: function training(){},
    evolution: function evolution(){},
}

function createPokemon(name,number, type,abilities, hidden_ability, evolution_stage, level, exp, evolution_level, nickname){

    const pokemon = {};

    pokemon.name = name;
    pokemon.number = number;
    pokemon.type = createType(type);
    pokemon.abilities = createAbilities(abilities);
    pokemon.hidden_ability = hidden_ability;
    pokemon.stats = function stats(hp, attack, defense,s_attack,s_defense,  speed, ) {
        stats.hp = hp;
		stats.attack = attack;
		stats.defense = defense;
		stats.s_attack =s_attack;
		stats.s_defense = s_defense; 
		stats.s_speed = speed;
    }
    pokemon.evolution_stage = evolution_stage;
    pokemon.level = level;
    pokemon.exp = exp;
    pokemon.evolution_level = evolution_level;
    pokemon.nickname = nickname;
    
    pokemon.move = pokemonMethods.move;
    pokemon.training = pokemonMethods.training;
    pokemon.evolution = pokemonMethods.evolution;

    return createPokemon;
}

const Bulbasaur = new createPokemon('Pikachu', 1, 'fire', 1, 20, 0, 'Pika');

Bulbasaur.type = createType('Grass', ['bug', 1, 'dark', 1], ['bug', 0.5, 'dark', 1]);
Bulbasaur.abilities = createAbilities('Overgrow', 'Strengthens Grass', 'When this Pokemon');


console.log(Bulbasaur);

// 