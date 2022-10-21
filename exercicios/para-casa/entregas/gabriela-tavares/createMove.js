const {
    damageDealt,
    damageTaken,
    createType,
  } = require("../gabriela-tavares/createType");
  
  const move = {
    aromatherapy: {
      name: "Aromatherapy",
      type: damageDealt.grass,
      summary: "Cures the entire party of major status effects.",
      power: null,
      target: ["self", "allies"],
      accuracy: null,
      priority: 0,
    },
    vineWhip: {
      name: "Vine Whip",
      type: damageDealt.grass,
      summary: "Inflicts regular damage with no additional effect.",
      power: 45,
      target: ["selected"],
      accuracy: 100,
      priority: 0,
    },
  };
  
  function createMove(name, type, summary, power, target, accuracy, priority) {
    this.name = name;
    this.type = type;
    this.summary = summary;
    this.power = power;
    this.target = target;
    this.accuracy = accuracy;
    this.priority = priority;
  }
  
  const moveAromatherapy = new createMove(
    "Aromatherapy",
    new createType("Grass", damageDealt.grass, damageTaken.grass),
    move.aromatherapy.summary,
    move.aromatherapy.power,
    move.aromatherapy.target,
    move.aromatherapy.accuracy,
    move.aromatherapy.priority
  );
  
  const moveVineWhip = new createMove(
    "Aromatherapy",
    new createType("Poison", damageDealt.poison, damageTaken.poison),
    move.vineWhip.summary,
    move.vineWhip.power,
    move.vineWhip.target,
    move.vineWhip.accuracy,
    move.vineWhip.priority
  );
  
  modeule.exports = { move, createMove };
  