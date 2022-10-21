function Type(nome, damage_dealt, damage_taken) {
    const type = {};
    type.name = name;
    type.damage_dealt = damage_dealt;
    type.damage_taken = damage_taken;

    return type;
}

function Abilities(name, summary, effect) {
    const abilities = {};
    abilities.name = name;
    abilities.summary = summary;
    abilities.effect = effect;

    return abilities;
}

function Move(name, type, summary, power, target, accuracy, priority) {
    const move = {};
    move.name = name;
    move.type = type;
    move.summary = summary;
    move. power = power;
    move.target = target;
    move.accuracy = accuracy;
    move.priority = priority;
    
    return move;
}

function Pokemon(name, number, types, abilities, hidden_ability, stats,
    evolution_stage, level, evolution_level, exp, nickname) {
    const pokemon = {};
    pokemon.name = name;
    pokemon.number = number;
    pokemon.types = types;
    pokemon.abilities = abilities;
    pokemon.hidden_ability = hidden_ability;
    pokemon.stats = stats;
    pokemon.evolution_stage = evolution_stage ;
    pokemon.level = level;
    pokemon.evolution_level = evolution_level;
    pokemon.exp = exp;
    pokemon.nickname = nickname;

    return pokemon;
}