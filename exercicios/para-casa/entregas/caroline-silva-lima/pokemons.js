const ability = require('./ability');
const Damage = require('./damagesPokemon');
const pokemonMethods ={
    movee : function movee(){},
    training : function training(){},
    evolution : function evolution(){}
}

function pokemon ( name, number ,stats, evolution_stage,level,evolution_level,
    exp,nickname ){
    let pokemon = {};

    pokemon.name = name;
    pokemon.number = number;
    pokemon.type = type();
    pokemon.ability = ability();
    pokemon.hidden_ability = ability();
    pokemon.stats = function stats(hp, attack,sattack,sdefense,speed){
        stats.hp = hp;
        stats.attack = attack;
        stats.sattack = sattack;
        stats.sdefense = sdefense;
        stats.speed = speed;
    };
    pokemon.evolution_stage = evolution_stage;
    pokemon.level = level;
    pokemon.evolution_level = evolution_level;
    pokemon.exp = exp;
    pokemon.nickname = nickname;

    pokemon.movee =  pokemonMethods.movee;
    pokemon.training = pokemonMethods.training;
    pokemon.evolution = pokemonMethods.evolution;
    return pokemon;
}

const movimento = new Damage ('Aromatheapy','Cures the entire', null , ['self', 'alies'], null, 0);
console.log(movimento)
console.log(movimento.type = ('Grass' , ['bug',5],['bug',6]));
console.log(movimento);
console.log(movimento.type.damage_dealt);
console.log(movimento.type.damage_taken);
console.log(movimento.type);