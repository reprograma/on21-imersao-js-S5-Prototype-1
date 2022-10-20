function pokemon(pokemonName, number, evolution_stage, level, evolution_level, exp, nickname) {

    this.pokemonName = pokemonName
    this.number = number
    this.evolution_stage = evolution_stage
    this.level = level
    this.evolution_level = evolution_level
    this.exp = exp
    this.nickname = nickname
}


const damageDealtByType = {
    grass: [
      { name: 'bug', value: 0.5 },
      { name: 'dark', value: 1 }
    ],
    poison: [
      { name: 'bug', value: 1 },
      { name: 'dark', value: 1 }
    ]
  }

  const damageTakenByType = {
    grass: [
      { name: 'bug', value: 0.5 },
      { name: 'dark', value: 1 }
    ],
    poison: [
      { name: 'bug', value: 1 },
      { name: 'dark', value: 1 }
    ]
  }
  
pokemon.prototype.type = function type(typeName, damage_dealt, damage_taken) {
    
        this.typeName = typeName,
        this.damage_dealt = damage_dealt
        this.damage_taken = damage_taken
}

pokemon.prototype.ability = function ability(abilityName, summary, effect) {

    this.abilityName = abilityName
    this.summary = summary
    this.effect = effect

}

pokemon.prototype.hidden_ability = function hidden_ability(hidden_abilityName, hidden_abilitySummary, hidden_abilityEffect) {
   
    this.hidden_abilityName = hidden_abilityName
    this.hidden_abilitySummary = hidden_abilitySummary
    this.hidden_abilityEffect = hidden_abilityEffect
}

pokemon.prototype.move = function move(moveName, type, moveSummary, power, target, accuracy, priority) {

    this.moveName = moveName
    this.type = type
    this.moveSummary = moveSummary
    this.power = power
    this.target = target
    this.accuracy = accuracy
    this.priority = priority
}

pokemon.prototype.stats = function stats(hp, attack, defense, s_attack, s_defense, speed) {
   
    this.hp = hp
    this.attack = attack
    this.defense = defense
    this.s_attack = s_attack
    this.s_defense = s_defense
    this.speed = speed
}


pokemon.prototype.training = function training() {

}


pokemon.prototype.evolution = function evolution() {

}


const Charmander = new pokemon('Charmander', 99, 'basic', 88, 77, 66, 'charmandinho')
Charmander.ability('Guts', 'While a Pokémon with this Ability has a status condition (non-volatile status), its Attack is increased by 50%.', 'Additionally, a Pokémon with this Ability does not lose Attack due to burn.')
Charmander.type('Poison', damageDealtByType.poison, damageTakenByType.poison);
Charmander.stats(99, 88, 77, 66, 55, 44)    
Charmander.hidden_ability('Hustle', "Hustle increases the user's Attack stat by 50%, but lowers the accuracy of the user's physical moves by 20%", 'Special moves and status moves are unaffected by Hustle.')
Charmander.move('Synthesis', Charmander.type('Poison', damageDealtByType.poison, damageTakenByType.poison), 'Heals the user by half its max HP. Affected by weather.', 66, 5, ['self'], 0)


const Pikachu = new pokemon('Pikachu', 44, 'baby', 55, 66, 77, 'pika pika')
Pikachu.type('Eletric', damageDealtByType.grass, damageTakenByType.grass);
Pikachu.ability('Stamina', 'When a Pokémon with Stamina is hit by an attack, its Defense rises by one stage.', 'If a Pokémon with this Ability is hit by a multi-strike move (such as Fury Swipes), each hit activates this Ability.')
Pikachu.hidden_ability('Static', 'When a Pokémon with this Ability is hit by a move that makes contact, there is a 30% chance that the attacking Pokémon will become paralyzed. This can affect Ground-type Pokémon.', 'If a Pokémon with this Ability is hit by a multi-strike move that makes contact, each hit has an independent chance to activate this Ability.')
Pikachu.stats(11, 22, 33, 44, 55, 66)
Pikachu.move('Vine Whip', Pikachu.type( 'Grass', damageDealtByType.grass, damageTakenByType.grass), 'Inflicts regular damage with no additional effect.', 33, 8, ['selected'], 0)


// console.log(Pikachu)
// console.log(Charmander)