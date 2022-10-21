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

function Move(name, type, summary, power, target, accuracy, priority) {
  const move = {};

  move.name = name;
  move.type = type;
  move.summary = summary;
  move.power = power;
  move.target = target;
  move.accuracy = accuracy;
  move.priority = priority;

  return move;
}

const pokemonMove = new Move('Aromatherapy', move.type, move.summary, 2, move.target[1], null, 3)
console.log(pokemonMove)


module.exports = {Move, move}