// Move: deve possui:
//  nome
//  tipo
//  descrição
//  poder
//  alvo ('self', 'allies', 'selected')
//  precisão
//  prioridade.
// Ex.:

const move = {
    name: 'Aromatherapy',
    type: {
        name: 'Grass',
        damage_dealt: [{name: 'bug', value: 0.5}, {name: 'dark', value: 1}],
        damage_taken: [{name: 'bug', value: 2}, {name: 'dark', value: 1}]
    },
    summary: 'Cures the entire party of major status effects.',
    power: null,
    target: ['self', 'allies'],
    accuracy: null,
    priority: 0
}
const another_move = {
    name: 'Vine Whip',
    type: {
        name: 'Grass',
        damage_dealt: [{name: 'bug', value: 0.5}, {name: 'dark', value: 1}],
        damage_taken: [{name: 'bug', value: 2}, {name: 'dark', value: 1}]
    },
    summary: 'Inflicts regular damage with no additional effect.',
    power: 45,
    accuracy: 100,
    target: ['selected'],
    priority: 0
}