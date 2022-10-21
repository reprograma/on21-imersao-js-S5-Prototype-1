function createType(name, damage_dealt, damage_taken){

    const type = {};

    type.name = name;
    type.damage_dealt = damage_dealt;
    type.damage_taken = damage_taken;

    return type;
}

function createAbilities(name,summary, effect){

    const abilities = {};

    abilities.name = name; 
	abilities.summary = summary;
	abilities.effect = effect; 

    return abilities;
}	

function movePokemon(name,description,power, target, accuracy,propriety){

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

function createPokemon(name,number, type,abilities, hidden_ability,  evolution_stage, level, exp, evolution_level, nickname){

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

    return pokemon;
}

const Pokemon1 = new createPokemon('Galarian', 1, 'agua', 'varios', 'Extraordinario Aremesso', 2, 15, 2, 6, 'Galarian');

Pokemon1.type = createType('Fogo', ['bug', 5, 'dark', 10], ['bug', 1.2, 'dark', 4]);
Pokemon1.abilities = createAbilities('Galarian',  'Voador', 'Lutador'); 


console.log(Pokemon1);