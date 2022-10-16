const SharedMethods = {
  UseMovement: function (move) {
    return `${this.name} is using movement "${move.name}".`;
  },
  TrainCreature: function () {
    return `Training ${this.name}.`;
  },
  EvolveCreature: function () {
    return `${this.name} has evolved.`;
  },
};

module.exports = { SharedMethods };
