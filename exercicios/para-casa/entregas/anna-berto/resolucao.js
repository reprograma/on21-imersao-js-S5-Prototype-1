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

const ability = {
  name: "Overgrow",
  summary:
    "Strengthens Grass moves to inflict 1.5× damage at 1/3 max HP or less.",
  effect:
    "When this Pokémon has 1/3 or less of its HP remaining, its Grass-type moves inflict 1.5× as much regular damage.",
};

const move = {
  name: "Aromatherapy",
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
  summary: "Cures the entire party of major status effects.",
  power: null,
  target: ["self", "allies"],
  accuracy: null,
  priority: 0,
};

const pokemon = {
  name: "Bulbasaur",
  number: 1,
  types: [
    {
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
    {
      name: "Poison",
      damage_dealt: [
        { name: "bug", value: 1 },
        { name: "dark", value: 1 },
      ],
      damage_taken: [
        { name: "bug", value: 0.5 },
        { name: "dark", value: 1 },
      ],
    },
  ],
  abilities: [
    {
      name: "Overgrow",
      summary:
        "Strengthens Grass moves to inflict 1.5× damage at 1/3 max HP or less.",
      effect:
        "When this Pokémon has 1/3 or less of its HP remaining, its Grass-type moves inflict 1.5× as much regular damage.",
    },
  ],
  hidden_ability: {
    name: "Chlorophyll",
    summary: "Doubles Speed during strong sunlight.",
    effect: "This Pokémon's Speed is doubled during strong sunlight.",
  },
  stats: {
    hp: 45,
    attack: 49,
    defense: 49,
    "s-attack": 65,
    "s-defense": 65,
    speed: 45,
  },
  evolution_stage: "basic",
  level: 1,
  evolution_level: 16,
  exp: 0,
  nickname: "Robertinho",

  hasMove: function () {
    hasMovePermissions = pokemon.types.filter((e) => e.name === move.type.name);
    return hasMovePermissions ? "allowed movement" : "movement denied";
  },

  pokemonTraining: function (expPoints) {
    this.exp = this.exp + expPoints;
    const calculatePoint = this.exp / 100;
    this.level = Math.floor(this.level + calculatePoint);
    return `You have ${this.exp} points and your level is ${this.level}`;
  },

  pokemonEvolution: function () {
    this.evolution_level;
  },
};

const pokemon2 = {
  name: "rrr",
  number: 1,
  types: [
    {
      name: "hjhg",
      damage_dealt: [
        { name: "bug", value: 0.5 },
        { name: "dark", value: 1 },
      ],
      damage_taken: [
        { name: "bug", value: 2 },
        { name: "dark", value: 1 },
      ],
    },
    {
      name: "Poison",
      damage_dealt: [
        { name: "bug", value: 1 },
        { name: "dark", value: 1 },
      ],
      damage_taken: [
        { name: "bug", value: 0.5 },
        { name: "dark", value: 1 },
      ],
    },
  ],
  abilities: [
    {
      name: "Overgrow",
      summary:
        "Strengthens Grass moves to inflict 1.5× damage at 1/3 max HP or less.",
      effect:
        "When this Pokémon has 1/3 or less of its HP remaining, its Grass-type moves inflict 1.5× as much regular damage.",
    },
  ],
  hidden_ability: {
    name: "Chlorophyll",
    summary: "Doubles Speed during strong sunlight.",
    effect: "This Pokémon's Speed is doubled during strong sunlight.",
  },
  stats: {
    hp: 45,
    attack: 49,
    defense: 49,
    "s-attack": 65,
    "s-defense": 65,
    speed: 45,
  },
  evolution_stage: "basic",
  level: 1,
  evolution_level: 16,
  exp: 0,
  nickname: "Robertinho",

  hasMove: function () {
    hasMovePermissions = pokemon.types.filter((e) => e.name === move.type.name);
    return hasMovePermissions ? "allowed movement" : "movement denied";
  },

  pokemonTraining: function (expPoints) {
    this.exp = this.exp + expPoints;
    const calculatePoint = this.exp / 100;
    this.level = Math.floor(this.level + calculatePoint);
    return `You have ${this.exp} points and your level is ${this.level}`;
  },

  pokemonEvolution: function () {
    this.evolution_level;
  },
};

console.log(pokemon.hasMove());
console.log(pokemon2.hasMove());
console.log(pokemon.pokemonTraining(250));
// console.log(move.name);
// console.log(pokemon.move)

// const typeObj = Type(
//   "Grass",
//   [
//     { nome: "bug", value: 0.5 },
//     { nome: "dark", value: 1 },
//   ],
//   [
//     { name: "bug", value: 2 },
//     { name: "dark", value: 1 },
//   ]
// );
