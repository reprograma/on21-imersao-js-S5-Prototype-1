const Type = require('./Type')

function Move(name, type, summary, power, target, accuracy, priority ) {

    this.name = name;
    this.type = type;
    this.summary= summary;
    this.power = power;
    this.target = target;
    this.accuracy = accuracy;
    this.priority = priority;
}

const Move1 = new Move('Aromatherapy', new Type('fogo', [{name: 'bug', value: 1}], [{name: 'dark', value: 2}]), 
'Strengthens Grass moves to inflict 1.5× damage at 1/3 max HP or less.', null, ['self', 'allies'], null, 0)

const Move2 = new Move('Vine Whip', new Type('Grass', [{name: 'bug', value: 0.5}], [{name: 'dark', value: 1}]), 
'Cures the entire party of major status effects.', null, ['self', 'allies'], null, 0)


module.exports = Move

console.log('-----------',Move1);
console.log(Move2);