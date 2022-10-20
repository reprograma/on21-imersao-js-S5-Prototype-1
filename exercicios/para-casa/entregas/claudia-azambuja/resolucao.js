function type (name)
{
    let type= {};

    type.name = name ;
    type.damage_dealt = [];
    type.damage_taken = [];

    type.damage_dealt = function damage_dealt(name, value){
        damage_dealt.name = name;
        damage_dealt.value = value;

          return damage_dealt;

    };

    type.damage_taken = function damage_taken( name, value){
        damage_taken.name = name;
        damage_taken.value = value;

        return damage_taken;
    };
    return type;
}

function ability(name, summary , effect)
{
    let ability= {};

    ability.name = name;
    ability.summary = summary;
    ability.effect = effect;

    return ability;
}

function move (name, summary, power, target,accuracy, priority)
{
    let move ={};

    move.name = name;
    move.type = type();
    move.summary= summary;
    move.power = power;
    move.target = target;
    move.accuracy = accuracy;
    move.priority = priority;

    return move;
}

const pokemonMethods ={
    movee : function movee(){},
    training : function training(){},
    evolution : function evolution(){}
}


function stats(hp, attack, defense, sattack,sdefense,speed){
    stats.hp = hp;
    stats.attack = attack;
    stats.defense = defense;
    stats.sattack = sattack;
    stats.sdefense = sdefense;
    stats.speed = speed;

    return stats;
};







