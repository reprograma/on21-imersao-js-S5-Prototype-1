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

function Move(name, type, summary, power, target, accuracy, priority){

    this.name = name;
    this.type = type;
    this.summary= summary;
    this.power = power;
    this.target = target;
    this.accuracy = accuracy;
    this.priority = priority;
}

const move1 = new Move('Exemplo', 'type', 'summary', 'power', 'target', 'accuracy', 'priority')
console.log(move1);

module.exports = Move;
