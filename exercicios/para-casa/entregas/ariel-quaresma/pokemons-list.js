const { Type } = require ('./resolucao')
const { Abilities } = require ('./resolucao')
const { Pokemon } = require ('./resolucao')
const { Move } = require ('./resolucao')

const grass_type = Type('Grass',
    [{ name: 'bug', value: 0.5 },
    { name: 'dark', value: 1 }],

    [{ name: 'bug', value: 2 },
    { name: 'dark', value: 1 }]
)

const poison_type = Type('Poison', 
    [{name: 'bug', value: 1}, 
    {name: 'dark', value: 1}], 
    
    [{name: 'bug', value: 0.5}, 
    {name: 'dark', value: 1}]);

    console.log(grass_type)

//const newPokemon = Pokemon('Bulbasaur', 1, [grass_type, poison_type], )