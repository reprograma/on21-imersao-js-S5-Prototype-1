const createType = require('./createType.js') 
const move = require('./move.js') 
const ability = require('./ability.js') 

const pokemonMethods ={
    movee : function movee(){

        console.log('--------------Move---------')
        if (this.move.find(({ name }) => name === movementName)) {
            console.log(`O ${this.name} usou o ${movementName}`);
          } else {
            console.log(`O ${this.name} não pode usar o ${movementName}`);
          }

    },
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

const optionLevel = {
    baby : 'baby' ,
    basic : 'basic',
    stage1 : 'stage-1',
    stage2 : 'stage=2',
}

function pokemon ( name, number ,type , damage_dealt, damage_taken , evolution_stage,optionLevel,evolution_level,
    exp,nickname )
{
    let pokemon = {};
    
    pokemon.name = name;
    pokemon.number = number;
    pokemon.type = createType(type , damage_dealt, damage_taken);
    pokemon.ability = ability();
    pokemon.hidden_ability = ability();
    pokemon.stats= stats() ;
    pokemon.evolution_stage = evolution_stage;
    pokemon.level = optionLevel;
    pokemon.evolution_level = evolution_level;
    pokemon.exp = exp;
    pokemon.nickname = nickname;

    pokemon.movee =  pokemonMethods.movee;
    pokemon.training = pokemonMethods.training;
    pokemon.evolution = pokemonMethods.evolution;

    return pokemon;
    

}


const Bulbasaur = new pokemon('Bulbasaur', 1,'basic' ,1,16,0,'Robetinho')

Bulbasaur.type = createType('Grass' , ['bug',0.5 ,'dark', 1], ['bug',2 ,'dark', 1]);
Bulbasaur.type = createType('Poison' , ['bug',1 ,'dark', 1], ['bug',0.5 ,'dark', 1]);
Bulbasaur.ability = ability('Overgrow' ,'Strengthens Grass' , 'When this Pokémon')
Bulbasaur.hidden_ability = ability('Chlorophy11', 'Doubles Speed', 'This Pokémon')
Bulbasaur.stats = stats(45,49,49,65,65,45)

