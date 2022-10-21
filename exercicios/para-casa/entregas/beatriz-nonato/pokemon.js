const pokemonMethods ={
    movee : function movee(){},
    training : function training(){},
    evolution : function evolution(){}
}

function pokemon ( name, number , evolution_stage, level, evolution_level,
    exp, nickname ){

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
}

const moviment = new move ('Aromatheapy','Cures the entire', null , ['self', 'alies'], null, 0);
