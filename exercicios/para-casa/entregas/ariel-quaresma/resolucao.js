const pokemonMethods = require ('./pokemonMethods')

function Type(name, damage_dealt, damage_taken){
    let type = {};
    type.name = name;
    type.damage_dealt = damage_dealt;
    type.damage_taken = damage_taken;

    return type;
}

function Abilities(name, summary, effect){
    let abilities = {};
    abilities.name = name;
    abilities.summary = summary;
    abilities.effect = effect;

    return abilities;
}

function Move(name, type, summary, power, target, accuracy, priority){
    let move = {};
    move.name = name;
    move.type = type;
    move.summary = summary;
    move.power = power;
    move.target = target;
    move.accuracy = accuracy;
    move.priority = priority;

    return move;
}

function Pokemon(name, number, types, abilities, hidden_abilities, stats, moves, evolution_stage, level, evolution_level, exp, nickname){
    let pokemon = {};
    pokemon.name = name;
    pokemon.number = number;
    pokemon.types = types;
    pokemon.abilities = abilities;
    pokemon.hidden_abilities = hidden_abilities;
    pokemon.stats = stats;
    pokemon.moves = moves;
    pokemon.evolution_stage = evolution_stage;
    pokemon.level = level;
    pokemon.evolution_level = evolution_level;
    pokemon.exp = exp;
    pokemon.nickname = nickname;
    pokemon.use_movement = pokemonMethods.useMovement;
    pokemon.training = pokemonMethods.training;
    pokemon.evolve = pokemonMethods.evolve;

    return pokemon;
}

module.exports = { Type, Pokemon, Abilities, Move}