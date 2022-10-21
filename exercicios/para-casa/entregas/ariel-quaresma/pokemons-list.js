const { Type } = require ('./pokemonModels')
const { Abilities } = require ('./pokemonModels')
const { Pokemon } = require ('./pokemonModels')
const { Move } = require ('./pokemonModels')


//Criando um types de acordo com a função construtora Type (pseudoclasse)
const grass_type = new Type('Grass',
    [{ name: 'bug', value: 0.5 },
    { name: 'dark', value: 1 }],

    [{ name: 'bug', value: 2 },
    { name: 'dark', value: 1 }]
)

const poison_type = new Type('Poison', 
    [{name: 'bug', value: 1}, 
    {name: 'dark', value: 1}], 
    
    [{name: 'bug', value: 0.5}, 
    {name: 'dark', value: 1}]);

//Criando uma habilidade de acordo com a função construtora Abilities (pseudoclasse)

const overgrow_ability = new Abilities('Overgrow', 'Strengthens Grass moves to inflict 1.5× damage at 1/3 max HP or less.', 'When this Pokémon has 1/3 or less of its HP remaining, its Grass-type moves inflict 1.5× as much regular damage.')

const chlorophyll_ability = new Abilities('Chlorophyll',
'Doubles Speed during strong sunlight.',
"This Pokémon's Speed is doubled during strong sunlight.")

//Criando um movimento de acordo com a função construtora Move (pseudoclasse)

const aromatherapy_move = new Move('Aromatherapy', grass_type, 'Cures the entire party of major status effects', null, ['self', 'allies'], null, 0)

const vine_whip_move = new Move('Vine Whip', grass_type, 'Inflicts regular damage with no additional effect.', 45, ['selected'], 0)

const synthesis_move = new Move('Synthesis', grass_type, 'Heals the user by half its max HP. Affected by weather', null, null, ['self'], 0)

//Criando um novo pokemon de acordo com a função construtora Pokemon (pseudoclasse com métodos prototype)

const bulbasaur_pokemon = new Pokemon('Bulbasaur', 1, [grass_type, poison_type], overgrow_ability, chlorophyll_ability, 
    {hp: 45, attack: 49, defense: 49, 's-attack': 65, 's-defense': 65, speed: 45}, [synthesis_move, vine_whip_move], 'basic', 1, 16, 0, 'Bolonaro');

console.log(bulbasaur_pokemon.useMovement('lala'))

module.exports = { bulbasaur_pokemon }
