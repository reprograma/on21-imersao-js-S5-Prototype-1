const pokemonMethods = {
  useMove: function useMove(movementName) {
    if (this.moves.find(({ name }) => name === movementName)) {
      console.log(`O ${this.name} usou o ${movementName}`);
    } else {
      console.log(`O ${this.name} não pode usar o ${movementName}`);
    }
  },

  train: function train(number) {
    const xp = this.exp + number;
    if (xp >= 100) {
      this.level = this.level + 1;
      this.exp = 0;
    }

    console.log(`O treino acabou, o novo nível do pikachu é ${this.level}`);
  },

  evolution: function evolution(
    name,
    number,
    type = [],
    abilities = [],
    hidden_ability = [],
    stats = [],
    moves,
    evolution_stage,
    evolution_level,
    exp,
    nickname
  ) {
    if (this.level >= this.evolution_level) {
      this.name = name;
      this.number = number;
      this.types = type;
      this.abilities = abilities;
      this.hidden_ability = hidden_ability;
      this.stats = stats;
      this.moves = moves;
      this.evolution_stage = evolution_stage;
      this.evolution_level = evolution_level;
      this.exp = exp;
      this.nickname = nickname;

      console.log(`Parabéns seu pokemon evoluiu`);
    } else {
      console.log(`Seu pokemon ainda não está pronto para evoluir`);
    }
  },
};

function Type(name, damage_dealt = [], damage_taken = []) {
  const type = {};
  type.name = name;
  type.damage_dealt = damage_dealt;
  type.damage_taken = damage_taken;

  return type;
}

function Ability(name, summary, effect) {
  const ability = {};
  ability.name = name;
  ability.summary = summary;
  ability.effect = effect;

  return ability;
}

function Move(
  name,
  summary,
  power,
  target = [],
  accuracy,
  priority,
  nameType,
  damage_dealt,
  damage_taken
) {
  const move = {};
  move.name = name;
  move.type = [Type(nameType, damage_dealt, damage_taken)];
  move.summary = summary;
  move.power = power;
  move.target = target;
  move.accuracy = accuracy;
  move.priority = priority;

  return move;
}

function Stats(hp, attack, defense, sattack, sdefense, speed) {
  const stats = {};

  stats.hp = hp;
  stats.attack = attack;
  stats.defense = defense;
  stats.sattack = sattack;
  stats.sdefense = sdefense;
  stats.speed = speed;

  return stats;
}

function Pokemon(
  name,
  number,
  evolution_stage,
  level,
  evolution_level,
  exp,
  nickname,
  nameType,
  damage_dealt,
  damage_taken,
  nameAbility,
  summary,
  effect,
  hp,
  attack,
  defense,
  sattack,
  sdefense,
  speed,
  nameMove,
  summaryMove,
  power,
  target,
  accuracy,
  priority
) {
  const pokemon = {};

  pokemon.name = name;
  pokemon.number = number;
  pokemon.types = [Type(nameType, damage_dealt, damage_taken)];
  pokemon.abilities = [Ability(nameAbility, summary, effect)];
  pokemon.hidden_ability = [Ability(nameAbility, summary, effect)];
  pokemon.stats = [Stats(hp, attack, defense, sattack, sdefense, speed)];
  pokemon.moves = [
    Move(
      nameMove,
      summaryMove,
      power,
      target,
      accuracy,
      priority,
      nameType,
      damage_dealt,
      damage_taken
    ),
  ];

  pokemon.evolution_stage = evolution_stage;
  pokemon.level = level;
  pokemon.evolution_level = evolution_level;
  pokemon.exp = exp;
  pokemon.nickname = nickname;
  pokemon.useMove = pokemonMethods.useMove;
  pokemon.train = pokemonMethods.train;
  pokemon.evolution = pokemonMethods.evolution;

  return pokemon;
}

const pikachu = Pokemon(
  "Pikachu",
  1,
  "baby",
  1,
  10,
  0,
  "pikachuzinho",
  "Electric",
  [{ name: "bug", value: 0.5 }],
  [{ name: "bug", value: 2 }],
  "static",
  "The Pokémon is charged with static electricity, so contact with it may cause paralysis.",
  "When this Pokémon has 1/3 or less of its HP remaining, its moves inflict 1.5× as much regular damage.",
  100,
  90,
  50,
  40,
  40,
  70,
  "fast jump",
  "Jump like a kangaroo",
  null,
  ["self"],
  null,
  0
);

pikachu.useMove("fast jump");
pikachu.train(120);
pikachu.evolution(
  "Pikachu2",
  2,
  ["Raichu", [{ name: "big", value: 0.9 }], [{ name: "boll", value: 1 }]],
  [
    {
      name: "Overgrow",
      summary:
        "Strengthens Grass moves to inflict 1.5× damage at 1/3 max HP or less.",
      effect:
        "When this Pokémon has 1/3 or less of its HP remaining, its Grass-type moves inflict 1.5× as much regular damage.",
    },
  ],
  [
    {
      name: "Chlorophyll",
      summary: "Doubles Speed during strong sunlight.",
      effect: "This Pokémons Speed is doubled during strong sunlight.",
    },
  ],
  [
    {
      hp: 45,
      attack: 49,
      defense: 49,
      "s-attack": 65,
      "s-defense": 65,
      speed: 45,
    },
  ],
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
  ],
  41,
  20,
  0,
  "pikachuzinho"
);
