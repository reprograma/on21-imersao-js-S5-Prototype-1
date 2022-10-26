function Creature(
  name,
  number,
  types,
  abilities,
  hidden_ability,
  stats,
  moves,
  evolution_stage,
  level,
  evolution_level,
  exp,
  nickname
) {
  this.name = name;
  this.number = number;
  this.types = types;
  this.abilities = abilities;
  this.hidden_ability = hidden_ability;
  this.stats = stats;
  this.moves = moves;
  this.evolution_stage = evolution_stage;
  this.level = level;
  this.evolution_level = evolution_level;
  this.exp = exp;
  this.nickname = nickname;
}

Creature.prototype.UseMovement = function UseMovement(move) {
  if (this.moves.includes(move)) {
    return `${this.name} is using movement "${move.name}".`;
  } else return `${this.name} can't use movement "${move.name}".`;
};

Creature.prototype.TrainCreature = function TrainCreature(number) {
  console.log(
    `Training ${this.name}... Current: Exp ${this.exp} | Level ${this.level}`
  );
  for (let i = number; i > 0; i--) {
    if (this.exp < 100) {
      this.exp++;
    } else {
      this.level++;
      this.exp = 0;
    }
  }
  return `Training complete! Final: Exp ${this.exp} | Level ${this.level}`;
};

Creature.prototype.EvolveCreature = function EvolveCreature(
  name,
  type,
  abilities,
  hidden_ability,
  stats,
  moves,
  evolution_level
) {
  if (this.level >= this.evolution_level) {
    this.name = name;
    this.number++;
    this.type = type;
    this.abilities = abilities;
    this.hidden_ability = hidden_ability;
    this.stats = stats;
    this.moves = moves;
    this.evolution_level = evolution_level;

    const evolutionStages = ["baby", "basic", "stage-1", "stage-2"];
    let indexOfCurrentStage = evolutionStages.indexOf(this.evolution_stage);
    this.evolution_stage = evolutionStages[++indexOfCurrentStage];

    return `Creature successfully evolved to '${this.name}'.`;
  } else
    return `${this.name} can't evolve yet. Current Level: ${this.level} | Evolution Level: ${this.evolution_level}`;
};

module.exports = Creature;
