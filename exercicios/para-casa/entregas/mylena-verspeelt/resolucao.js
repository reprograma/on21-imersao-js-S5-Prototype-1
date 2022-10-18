function type(name) {
    let type = {}
    type.name = name
    type.damage_dealt = []
    type.damage_dealt = function damage_dealt(name, value) {
        damage_dealt.name = name;
        damage_dealt.value = value;

        return damage_dealt;
    };
    type.damage_taken = []
    type.damage_taken = function damage_taken(name, value) {
        damage_taken.name = name;
        damage_taken.value = value;

        return damage_taken;
    };
    return type

}


// ********************************************

function ability(name, summary, effect) {
    let ability = {}

    ability.name = name
    ability.summary = summary
    ability.effect = effect

    return ability
}


// ********************************************

function move(name, description, power, target, accuracy, priority) {
    let move = {}

    move.name = name
    move.type = type()
    move.description = description
    move.power = power
    move.target = target
    move.accuracy = accuracy
    move.priority = priority

    return move
}

// ********************************************

function stats(hp, attack, defense, s_attack, s_defense, speed) {
    let stats = {}
    stats.hp = hp
    stats.attack = attack
    stats.defense = defense
    stats.s_attack = s_attack
    stats.s_defense = s_defense
    stats.speed = speed
    return stats
}

// ******************************************** 

const pokemonMethods = {
    move: function move() {
        // aqui vai o código
    },
    training: function training() {
        // aqui vai o código
    },
    evolution: function evolution() {
        // aqui vai o código
    }
}

// ********************************************

function pokemon(name, number, evolution_stage, level, evolution_level, exp, nickname) {

    let newPokemon = {}

    newPokemon.name = name
    newPokemon.number = number
    newPokemon.type = type()
    newPokemon.ability = ability()
    newPokemon.hidden_ability = ability()
    newPokemon.stats = stats()
    newPokemon.evolution_stage = evolution_stage
    newPokemon.level = level
    newPokemon.evolution_level = evolution_level
    newPokemon.exp = exp
    newPokemon.nickname = nickname

    newPokemon.move = pokemonMethods.move
    newPokemon.training = pokemonMethods.training
    newPokemon.evolution = pokemonMethods.evolution


    return newPokemon
}

const Charmander = pokemon('Charmander', 99, 'basic', 88, 77, 66, 'charmandinho')
Charmander.type = type('Fire', type.damage_dealt = ['bug', 0.5, 'dark', 1], type.damage_taken = ['bug', 2, 'dark', 1]);
Charmander.ability = ability('Guts', 'While a Pokémon with this Ability has a status condition (non-volatile status), its Attack is increased by 50%.', 'Additionally, a Pokémon with this Ability does not lose Attack due to burn.')
Charmander.hidden_ability = ability('Hustle', "Hustle increases the user's Attack stat by 50%, but lowers the accuracy of the user's physical moves by 20%", 'Special moves and status moves are unaffected by Hustle.')
Charmander.stats = stats(99, 88, 77, 66, 55, 44)

const Pikachu = pokemon('Pikachu', 44, 'baby', 55, 66, 77, 'pika pika')
Pikachu.type = type('Eletric', type.damage_dealt = ['bug', 0.5, 'dark', 1], type.damage_taken = ['bug', 2, 'dark', 1]);
Pikachu.ability = ability('Stamina', 'When a Pokémon with Stamina is hit by an attack, its Defense rises by one stage.', 'If a Pokémon with this Ability is hit by a multi-strike move (such as Fury Swipes), each hit activates this Ability.')
Pikachu.hidden_ability = ability('Static', 'When a Pokémon with this Ability is hit by a move that makes contact, there is a 30% chance that the attacking Pokémon will become paralyzed. This can affect Ground-type Pokémon.', 'If a Pokémon with this Ability is hit by a multi-strike move that makes contact, each hit has an independent chance to activate this Ability.')
Pikachu.stats = stats(11, 22, 33, 44, 55, 66)


// console.log(Pikachu)
// console.log(Charmander)