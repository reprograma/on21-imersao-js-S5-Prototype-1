/*
damage_dealts: dano causado
damage_taken: dano sofrido
summary: resumo
target: alvo
accuracy:precisao
DamageType: tipo de danos
*/

const pokemonMethods = {
    atack: function atack (move, attackedPokemon, attackingPokemon){
        let damageSum = 0;
         move.type.damage_dealts.array.forEach(d => {
            damageSum += d.value;
        });
        if(!attackingPokemon.types.includes(move.type)){
            throw `O pokemón ${attackingPokemon.name} não pode realizar movimentos do tipo ${move.type}`; 
        }        
        console.log(`O pokemón ${attackingPokemon.name} usou o movimento ${move.name}`);

        if(attackedPokemon.stats.hp <= damageSum){
            console.log(`O pokémon ${attackedPokemon.name} foi derrotado.`);
        }else{
            attackedPokemon.stats.hp -= damageSum;
            console.log(`O pokemón ${attackedPokemon.name} sofreu ${damageSum} de dano.`);
        }
    }
}

function DamageType(name, value){
    const damageType = {};
    damageType.name = name;
    damageType.value = value;

    return damageType;
}

function Type(name, damage_dealts, damacge_taken) { //move type
    const type = {};
    type.name = name;
    type.damage_dealts = damage_dealts; //array de DamageTypes
    type.damage_taken = damage_taken; //array de DamageTypes

    return type;
}

function Ability(name, summary, effect) {
    const ability = {};
    ability.name = name;
    ability.summary = summary;
    ability.effect = effect;

    return ability;
}

function Move(name, type, summary, power, target, accuracy, priority) {
    const move = {};
    move.name = name;
    move.type = type; //Type
    move.summary = summary;
    move. power = power;
    move.target = target; //  ('self', 'allies', 'selected')
    move.accuracy = accuracy;
    move.priority = priority;
    
    return move;
}

function Stats (hp, attack, defense, specialAtack, specialDefense, speed){
    const stats = {};
    stats.hp = hp;
    stats.attack = attack;
    stats.defense = defense;
    stats.specialAtack = specialAtack;
    stats.specialDefense = specialDefense;
    stats.speed = speed;

    return stats;
}

function Pokemon(name, number, types, abilities, hidden_ability, stats,
    evolution_stage, level, evolution_level, exp, nickname) {
    const pokemon = {};
    pokemon.name = name;
    pokemon.number = number;
    pokemon.types = types;  //array de Type
    pokemon.abilities = abilities;   //array de Abilities
    pokemon.hidden_ability = hidden_ability; //Ability
    pokemon.stats = stats; //Stats
    pokemon.evolution_stage = evolution_stage ;  // ('baby', 'basic', 'stage-1', 'stage-2')
    pokemon.level = level;
    pokemon.evolution_level = evolution_level;
    pokemon.exp = exp;
    pokemon.nickname = nickname;
    pokemon.atack = pokemonMethods.atack;

    return pokemon;
}