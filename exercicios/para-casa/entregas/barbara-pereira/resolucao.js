const pokemonMethods  = {
    moviment: function moviment(){},
    trainning: function trainning(){},
    evolution: function evolution(){}    
}

function createType(nameType, damageDealt, damageTaken){
    let type = {};
    type.nameType = nameType;
    type.damageDealt = damageDealt; // na hora de passar o parâmetro: ("grass", [{name: "bug", value: 1}, {name: "eletric", value: 2}])
    type.damageTaken = damageTaken;

    return type;
}

function createAbilities(nameAbilities, summaryAbilities, effectAbilities){
    let abilities = {};
    abilities.nameAbilities = nameAbilities;
    abilities.summaryAbilities = summaryAbilities;
    abilities.effectAbilities = effectAbilities;

    return abilities;
}

function createMove(nameMove, nameType, damageDealt, damageTaken, summaryMove, powerMove, targetMove, accuracyMove, priorityMove){
    let move = {};
    move.nameMove = nameMove;
    move.type = createType(nameType, damageDealt, damageTaken);    
    move.summaryMove = summaryMove;
    move.powerMove = powerMove;
    move.targetMove = targetMove;
    move.accuracyMove = accuracyMove;
    move.priorityMove = priorityMove;

    return move;
}

function statusContent(hpStatus, attack, defense, sAttack, sDefense, speed){
    let status = {};
    status.hpStatus = hpStatus;
    status.attack - attack;
    status.defense = defense;
    status.sAttack = sAttack;
    status.sDefense = sDefense;
    status.speed = speed;

    return status;
}

function createPokemon(namePokemon, numberPokemon, nameType, damageDealt, damageTaken, nameAbilities, summaryAbilities, effectAbilities, hpStatus, attack, defense, sAttack, sDefense, speed, evolutionStage, level,	evolutionLevel, exp, nickname ){
    let pokemon = {};
    pokemon.namePokemon = namePokemon;
    pokemon.numberPokemon = numberPokemon;
    pokemon.typePokemon = createType(nameType, damageDealt, damageTaken);
    pokemon.ability = createAbilities(nameAbilities, summaryAbilities, effectAbilities);
    pokemon.status = statusContent(hpStatus, attack, defense, sAttack, sDefense, speed);  
    pokemon.evolutionStage = evolutionStage;
	pokemon.level = level;
	pokemon.evolutionLevel = evolutionLevel;
	pokemon.exp = exp
	pokemon.nickname = nickname;

    return pokemon;
}


const pokemon = new createPokemon("Bulbasaur", 1, "grass", 
                                    ['bug', 0.5, 'dark', 1.2], ['poisen',2, 'dark', 1], 
                                    "Overgrow", "Strengthens Grass moves to inflict 1.5× damage at 1/3 max HP or less", 
                                    "When this Pokémon has 1/3 or less of its HP remaining, its Grass-type moves inflict 1.5× as much regular damage",
                                    45, 49, 49, 65, 65, 45, "basic", 1, 16, 0, "Robertinho");
console.log(pokemon);