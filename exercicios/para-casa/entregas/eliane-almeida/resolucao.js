const { type } = require("os");

function Type(name) {
    let type = {}

    type.name = name;
    type.damage_dealt = [];
    type.demage_taken = [];

    type.damage_dealt = function damage_dealt(name, value) {
        damage_dealt.name = name;
        damage_dealt.value = value;

        return damage_dealt

    }

    type.damage_taken = function damage_taken(name, value) {
        damage_taken.name = name;
        damage_taken.value = value;

        return damage_taken

    }

    return type

}

function Ability(name, sumary, effect) {
    let abilities = {}

    abilities.name = name;
    abilities.sumary = sumary;
    abilities.effect = effect;

    return abilities
}

function Move(name, sumary, power, target, accurancy, priority) {
    let move = {}

    move.name = name;
    move.type = Type(name)
    move.sumary = sumary;
    move.power = power;
    move.target = target
    move.accurancy = accurancy;
    move.priority = priority

    return move
}

function Hidden_ability(name, sumary, effect) {
    let hidden_ability = {}

    hidden_ability.name = name;
    hidden_ability.sumary = sumary;
    hidden_ability.effect = effect

    return hidden_ability
}

function Stats(hp, attack, defense, sattack, sdefense, speed) {
    let stats = {}

    stats.hs = hp;
    stats.attack = attack;
    stats.defense = defense;
    stats.sattack = sattack;
    stats.sdefense = sdefense;
    stats.speed = speed;

    return stats

}
function Pokemon(name, number, evolution_stage, level, evolution_level, exp, nickname){
    let pokemon = {}

    pokemon.name = name;
    pokemon.number = number;
    pokemon.type = Type();
    pokemon.abilities = Ability();
    pokemon.hidden_ability = Hidden_ability();
    pokemon.evolution_stage = evolution_stage
    pokemon.level = level;
    pokemon.evolution_level = evolution_level;
    pokemon.exp = exp;
    pokemon.nickname = nickname;

    return pokemon
}

const pokemonMethods ={
    movee : function movee(){},
    training : function training(){},
    evolution : function evolution(){}
} 

const pokemonBulbasaur = ('Bulbasaur', 1, 'basic', 1, 16, 0, 'Robertinho' )

pokemonBulbasaur.type = type('Grass', type.damage_dealt = ['bug', 0.5], ['dark', 1 ], type.damage_taken = ['bug', 2, 'dark', 1 ]);
pokemonBulbasaur.type = type('Poison', type.damage_dealt = ['bug', 1, 'dark', 1 ], type.damage_taken = ['bug', 0.5, 'dark', 1 ]);
pokemonBulbasaur.abilities = abilities('Overgrow','Strengthens Grass moves to inflict 1.5× damage at 1/3 max HP or less.', 'When this Pokémon has 1/3 or less of its HP remaining, its Grass-type moves inflict 1.5× as much regular damage.')
pokemonBulbasaur.hidden_ability = hidden_ability('Chlorophyll', 'Doubles Speed during strong sunlight.', "This Pokémon's Speed is doubled during strong sunlight.")
pokemonBulbasaur.stats = stats(45, 49, 49, 65, 65, 45)



