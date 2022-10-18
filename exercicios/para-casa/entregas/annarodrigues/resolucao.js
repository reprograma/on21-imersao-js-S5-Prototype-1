function type (name)
{
    let type= {};

    type.name = name ;
    type.damage_dealt =[];
    type.damage_taken = [];

    type.damage_dealt = function damage_dealt( name, value){
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


function pokemon ( name, number , evolution_stage,level,evolution_level,
    exp,nickname )
{
    let pokemon = {};
    
    pokemon.name = name;
    pokemon.number = number;
    pokemon.type = type();
    pokemon.ability = ability();
    pokemon.hidden_ability = ability();
    pokemon.stats= stats() ;
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





const Bulbasaur = new pokemon('Bulbasaur', 1,'basic' ,1,16,0,'Robetinho')

Bulbasaur.type = type('Grass' , type.damage_dealt =['bug',0.5 ,'dark', 1], type.damage_taken =['bug',2 ,'dark', 1]);
Bulbasaur.type = type('Poison' , type.damage_dealt =['bug',1 ,'dark', 1], type.damage_taken =['bug',0.5 ,'dark', 1]);
Bulbasaur.ability = ability('Overgrow' ,'Strengthens Grass' , 'When this Pokémon')
Bulbasaur.hidden_ability = ability('Chlorophy11', 'Doubles Speed', 'This Pokémon')
Bulbasaur.stats = stats(45,49,49,65,65,45)
