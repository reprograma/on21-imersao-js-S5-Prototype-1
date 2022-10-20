const Type = require('./type')
const Abilities = require('./abilities')
const Move = require('./moves')
const Pokemon = require('./pokemon')

const types = []
const type1 = new Type('Fire',
    [
        { name: 'bug', value: 0.5 },
        { name: 'dark', value: 1 },
    ], 
    [
        { name: 'bug', value: 2 },
        { name: 'dark', value: 1 },
    ]
)

types.push(type1)


const move1 = new Move('Synthesis', type1, 'Heals the user by half its max HP. Affected by weather.', null, null, ['self'], 0)
const move2 = new Move('Vine Whip', type1, 'Inflicts regular damage with no additional effect.', 45, 100, ['selected'],0)
const moves = []
moves.push(move1, move2)


const ability1 = new Abilities('Overgrow', 
'Strengthens Grass moves to inflict 1.5× damage at 1/3 max HP or less.', 'When this Pokémon has 1/3 or less of its HP remaining, its Grass-type moves inflict 1.5× as much regular damage.'
)
const abilities = []
abilities.push(ability1)


const hiddenAbility1 = new Abilities('Chlorophyll', 'Doubles Speed during strong sunlight.', `This Pokémon's Speed is doubled during strong sunlight.`)
const hidden_abilities = []
hidden_abilities.push(hiddenAbility1)


const stats =  {
  hp: 45,
  attack: 49,
  defense: 49,
  's-attack': 65,
  's-defense': 65,
  speed: 45
}


const pokemon1 = new Pokemon('Charmander', 1, types, abilities, hidden_abilities, stats, moves, 'basic', 1, 16, 0, 'Robertinho')

//  console.log(pokemon1);

// pokemon1.pokemonMove('ble')
// pokemon1.pokemonMove('Vine Whip')


// pokemon1.trainning(2000)
 
// pokemon1.evolve('Charmeleon', 16, 
// new Type('Flying', [{ name: 'bug', value: 1 },{ name: 'dark', value: 1 }],[{ name: 'bug', value: 0.5 },{ name: 'dark', value: 1 }]), 
// new Abilities('Dragon Claw', 'Dragon Claw deals damage with no additional effect.', 'When a Pokémon is holding Dragonium Z and uses its Z-Power, Dragon Claw turns into Devastating Drake and has base power 160.'), 
// new Abilities('Overgrow', 'Strengthens Grass moves to inflict 1.5× damage at 1/3 max HP or less.', 'When this Pokémon has 1/3 or less of its HP remaining, its Grass-type moves inflict 1.5× as much regular damage.'),  { hp: 200, attack: 160, defense: 120, 's-attack': 135, 's-defense': 175, speed: 95 }, 
// new Move('Scratch', type1, 'Heals the user by half its max HP. Affected by weather.', null, null, ['self']),0)

console.log(pokemon1);

// pokemon1.trainning(15)
// pokemon1.trainning(190)