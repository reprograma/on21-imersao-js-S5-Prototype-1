function funcaoTipo(name, damage_dealt, damage_taken) {
    const type = {};
    type.name = name;
    type.damage_dealt = damage_dealt;
    type.damage_taken = damage_taken;

    return type;
}

function funcaoAbility(name, summary, effect) {
    const ability = {};
    ability.name = name;
    ability.summary = summary;
    ability.effect = effect;

    return ability;
}

function hidden_abilit(name, summary, effect) {
    const ability = {};
    ability.name = name;
    ability.summary = summary;
    ability.effect = effect;
    return ability;
}


function funcaoMove(name, nameMove, damage_dealt, damage_taken, summary, power, target, accuracy, priority) {
    const move = {}
    move.name = name;
    move.type = funcaoTipo(nameMove, damage_dealt, damage_taken);
    move.summary = summary;
    move.power = power;
    move.target = target;
    move.accuracy = accuracy;
    move.priority = priority;

    return move;
}

function funcaoStats(hp, attack, defense, sAattack, sDefense, speed) {
    const stats = {};

    stats.hp = hp;
    stats.attack = attack;
    stats.defense = defense;
    stats.sAattack = sAattack;
    stats.sDefense = sDefense;
    stats.speed = speed;

    return stats;
}


function funcaoPokemon(name, number, nameType, damage_dealt, damage_taken, nameAbility, summary, effect, nameHiggen_ablit, summary, effect, hp, attack, defense, sAattack, sDefense, speed, nameMove, power, target, accuracy, priority, evolution_stage, level, evolution_level, exp, nickname) {

    const pokemon = {};
    pokemon.name = name;
    pokemon.number = number;
    pokemon.type = funcaoTipo(nameType, damage_dealt, damage_taken);
    pokemon.ability = funcaoAbility(nameAbility, summary, effect);
    pokemon.hidden_ability = hidden_abilit(nameHiggen_ablit, summary, effect);
    pokemon.stats = funcaoStats(hp, attack, defense, sAattack, sDefense, speed);
    pokemon.move = funcaoMove(name, nameMove, damage_dealt, damage_taken, summary, power, target, accuracy, priority);
    pokemon.evolution_stage = evolution_stage;
    pokemon.level = level;
    pokemon.evolution_level = evolution_level;
    pokemon.exp = exp;
    pokemon.nickname = nickname;

    return pokemon;
};


const pokemon = funcaoPokemon('Bulbasaur', 1, 'Grass', ['bug', 0.5,'dark', 1], ['bug', 2, 'dark', 1], 'Overgrow', 'Strengthens Grass moves to inflict 1.5× damage at 1/3 max HP or less.', 'When this Pokémon has 1/3 or less of its HP remaining, its Grass-type moves inflict 1.5× as much regular damage.', 'Chlorophyll', 'Doubles Speed during strong sunlight.', "This Pokémon's Speed is doubled during strong sunlight.", 45, 49, 49, 65, 65, 45, "Aromatherapy", null, ['self', 'allies'], null, 0, 'basic', 1, 16, 0, 'Robertinho');
console.log(pokemon)