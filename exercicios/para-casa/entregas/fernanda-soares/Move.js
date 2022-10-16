const { type1, type2, type3 } = require("./Type.js");

function Move(name, type, summary, power, target, accuracy, priority) {
  const move = {
    name: name,
    type: type,
    summary: summary,
    power: power,
    target: target,
    accuracy: accuracy,
    priority: priority,
  };

  return move;
}

const move1 = Move(
  "Virar morcego",
  type1,
  "A criatura neutraliza o ataque do inimigo",
  null,
  "inimigos",
  null,
  0
);

const move2 = Move(
  "Rosnado sônico",
  type2,
  "A criatura neutraliza o ataque do inimigo",
  null,
  "inimigos",
  null,
  0
);

const move3 = Move(
  "Expectro Patrono",
  type3,
  "A criatura neutraliza o ataque do inimigo",
  null,
  "inimigos",
  null,
  0
);

module.exports = { move1, move2, move3 };
