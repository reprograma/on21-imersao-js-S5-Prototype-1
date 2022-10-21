function newType(name, damage_dealt, damage_taken) {

    const type = {};
    type.name = name;
    type.damage_dealt = damage_dealt;
    type.damage_taken = damage_taken;

    return newType;
}

function newAbilities(name, summary, effect) {

    const abilities = {};
    abilities.name = name;
    abilities.summary = summary;
    abilities.effect = effect;

    return newAbilities;
}

function hiddenAbilities(name, summary, effect) {
    
    const ability = {};
    ability.name = name;
    ability.summary = summary;
    ability.effect = effect;
    
    return hiddenAbilities;
}

function move(name, description, power, target, accuracy, propriety) {

    const move = {};
    move.name = name;
    move.type = newType();
    move.description = description;
    move.power = power;
    move.target = target;
    move.accuracy = accuracy;
    move.propriety = propriety;

    return move;
}

const pokemonMethods = {

    move: function move() { },
    training: function training() { },
    evolution: function evolution() { },
}

function pokemon(name, number, type, abilities, hiddenAbilities, evolution_stage, level, exp, evolution_level, nickname) {

    const pokemon = {};

    pokemon.name = name;
    pokemon.number = number;
    pokemon.type = newType(type);
    pokemon.abilities = newAbilities(abilities);
    pokemon.hiddenAbilities = hiddenAbilities;
    pokemon.stats = functionStats(hp, attack, defense, sAattack, sDefense, speed);
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

const Blastoise = new pokemon('Blastoise', 0, 'water', 0, 0, 0, 'Blastoise');


