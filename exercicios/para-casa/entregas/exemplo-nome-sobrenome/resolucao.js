// FUNCTION TYPE 1

const type = {
  name: "Grass",
  damage_dealt: [
    { name: "bug", value: 0.5 },
    { name: "dark", value: 1 },
  ],
  damage_taken: [
    { name: "bug", value: 2 },
    { name: "dark", value: 1 },
  ],
};

function Type(name, dmg_dealt, dmg_taken) {
  this.name = name;
  this.dmg_dealt = dmg_dealt;
  this.dmg_taken = dmg_taken;
}

const typeObj = new Type(
  "Grass",
  [
    { nome: "bug", value: 0.5 },
    { nome: "dark", value: 1 },
  ],
  [
    { name: "bug", value: 2 },
    { name: "dark", value: 1 },
  ]
);

// console.log(typeObj);

//-------------------------------------------------------------
///2 Função

function Abilities(name, summary, effect) {
  this.name = name;
  this.summary = summary;
  this.effect = effect;
}

const abilities = new Abilities(
  "Overgrow",
  "Strengthens Grass moves to inflict 1.5× damage at 1/3 max HP or less.",
  "When this Pokémon has 1/3 or less of its HP remaining, its Grass-type moves inflict 1.5× as much regular damage."
);

// console.log(abilities);

//-------------------------------------------------------------------------------------

function Move(name, type, summary, power, target, accuracy, priority) {
  this.name = name;
  this.type = type;
  this.summary = summary;
  this.power = power;
  this.target = target;
  this.accuracy = accuracy;
  this.priority = priority;
}

const moveObject = new Move(
  "Aromatherapy",
  typeObj,
  "Cures the entire party of major status effects.",
  null,
  ["self", "allies"],
  null,
  0
);

// console.log(moveObject.target[0]);

//-------------------------------------------------------------------------------------

function Pokemon(
  name,
  number,
  types,
  abilities,
  hidden_abilities,
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
  this.hidden_abilities = hidden_abilities;
  this.stats = stats;
  this.moves = moves;
  this.evolution_stage = evolution_stage;
  this.level = level;
  this.evolution_level = evolution_level;
  this.exp = exp;
  this.nickname = nickname;
}

Pokemon.prototype.moved = function moved(move) {
  const movimentos = this.moves.find((movim) => movim.name === move);
  if (movimentos === undefined) {
    return pokemon.name + " não pode usar " + move;
  } else {
    return pokemon.name + " usou " + move;
  }
};

Pokemon.prototype.trainning = function trainning(pts) {
  this.exp = this.exp + pts;

  if (this.exp === 100) {
    this.level = this.level + 1;
    this.exp = 0;
  }
};

Pokemon.prototype.evolution = function evolution(
  name,
  number,
  type,
  abilities,
  hidden_abilities,
  stats,
  moves,
  evoluntion_level
) {
  if (this.level === this.evolution_level) {
    this.name = name;
    this.number = this.number + number;
    this.types = type;
    this.abilities = abilities;
    this.hidden_abilities = hidden_abilities;
    this.stats = stats;
    this.moves = moves;

    if (this.evolution_stage === "baby") {
      this.evolution_stage = "basic";
    } else if (this.evolution_stage === "basic") {
      this.evolution_stage = "stage-1";
    } else {
      this.evolution_stage = "stage-2";
    }
    this.evolution_level = evoluntion_level;
  }
};

const pokemon = new Pokemon(
  "Bulbasaur",
  1,
  typeObj,
  abilities,
  {
    name: "Chlorophyll",
    summary: "Doubles Speed during strong sunlight.",
    effect: "This Pokémons Speed is doubled during strong sunlight.",
  },

  {
    hp: 45,
    attack: 49,
    defense: 49,
    "s-attack": 65,
    "s-defense": 65,
    speed: 45,
  },

  [
    {
      name: "Synthesis",
      type: {
        name: "Grass",
        damage_dealt: [
          { name: "bug", value: 0.5 },
          { name: "dark", value: 1 },
        ],
        damage_taken: [
          { name: "bug", value: 2 },
          { name: "dark", value: 1 },
        ],
      },
      summary: "Heals the user by half its max HP. Affected by weather.",
      power: null,
      accuracy: null,
      target: ["self"],
      priority: 0,
    },
    {
      name: "Vine Whip",
      type: {
        name: "Grass",
        damage_dealt: [
          { name: "bug", value: 0.5 },
          { name: "dark", value: 1 },
        ],
        damage_taken: [
          { name: "bug", value: 2 },
          { name: "dark", value: 1 },
        ],
      },
      summary: "Inflicts regular damage with no additional effect.",
      power: 45,
      accuracy: 100,
      target: ["selected"],
      priority: 0,
    },
  ],

  "basic",
  1,
  2,
  0,
  "Robertinho"
);

//----------------------------------------------------------------------------------
console.log(pokemon);
console.log(pokemon.moved("Synthesis"));
pokemon.trainning(100);
pokemon.evolution(
  "Pikachu",
  2,
  typeObj,
  abilities,
  {
    name: "Chlorophyll",
    summary: "Doubles Speed during strong sunlight.",
    effect: "This Pokémons Speed is doubled during strong sunlight.",
  },
  {
    hp: 100,
    attack: 90,
    defense: 60,
    "s-attack": 100,
    "s-defense": 100,
    speed: 80,
  },
  moveObject,
  26
);

console.log(pokemon);
