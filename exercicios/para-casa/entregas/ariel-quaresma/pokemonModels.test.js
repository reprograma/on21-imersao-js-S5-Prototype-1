const { Type } = require ('./pokemonModels')
const { Abilities } = require ('./pokemonModels')
const { Pokemon } = require ('./pokemonModels')
const { Move } = require ('./pokemonModels')
const { bulbasaur_pokemon } = require ('./pokemons-list')

describe('Testes da função useMovement do pokemon', () => {
    test('Deve retornar o caminho feliz para um movimento que o pokemon possui', () => {
        
        expect(bulbasaur_pokemon.useMovement('Synthesis')).toBe('Bulbasaur usou Synthesis');
    })

    test('Deve retornar o caminho infeliz para um movimento que o pokemon não possui', () => {

        expect(bulbasaur_pokemon.useMovement('VaiArrebenta')).toBe('Bulbasaur não pode usar VaiArrebenta')
    })
})

describe('Testes da função training', () => {
    bulbasaur_pokemon.exp = 90;
    bulbasaur_pokemon.level = 1;
    

    test('Deve retornar o caminho feliz quando treinar em 10, aumentando o level em uma unidade', () => {
        
        bulbasaur_pokemon.training(10)
        expect(bulbasaur_pokemon.level).toBe(2)

    })

    test('Deve retornar o caminho feliz quando treinar em 10 e zerar os pontos de xp do pokemon', () => {
        bulbasaur_pokemon.training(10)
        expect(bulbasaur_pokemon.exp).toBe(0)
    })

    test('Deve retornar o caminho infeliz quando tentar treinar um pokemon com menos de 100 pontos', () => {
        
        bulbasaur_pokemon.training(5)

        expect(bulbasaur_pokemon.exp).toBe(95)
    })
})
