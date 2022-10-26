export function Pokemon() {
  this.name = "Bulbasaur";
  this.number = 1;
  this.types = [
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
  ];
  this.abilities = [
    {
      name: "Overgrow",
      summary:
        "Strengthens Grass moves to inflict 1.5× damage at 1/3 max HP or less.",
      effect:
        "When this Pokémon has 1/3 or less of its HP remaining, its Grass-type moves inflict 1.5× as much regular damage.",
    },
  ];
  this.hidden_ability = {
    name: "Chlorophyll",
    summary: "Doubles Speed during strong sunlight.",
    effect: "This Pokémons Speed is doubled during strong sunlight.",
  };
  this.stats = {
    hp: 45,
    attack: 49,
    defense: 49,
    "s-attack": 65,
    "s-defense": 65,
    speed: 45,
  };
  this.moves = [
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
      name: "Vine_Whip",
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
  ];
  this.evolution_stage = "basic";
  this.level = 1;
  this.evolution_level = 16;
  this.exp = 0;
  this.nickname = "Robertinho";
}

export const pokemon = new Pokemon();

let number = 0;

const evolution__stage_plus = {
  medium: "medium",
  major: "major",
};

Pokemon.prototype.evoluirPokemon = function evoluirPokemon(
  name,
  type,
  abilities,
  hidden_ability,
  stats,
  moves
) {
  if (this.level >= this.evolution_level) {
    const conditinional =
      this.level >= 36 ? (this.level = evolution__stage_plus.major) : false;

    this.name = name;
    this.number += number + 1;
    this.type = type;
    this.abilities = abilities;
    this.hidden_ability = hidden_ability;
    this.stats = stats;
    this.moves = moves;
    this.evolution_level += 1;
    this.evolution_stage =
      this.level >= 16
        ? (this.evolution_stage = evolution__stage_plus.medium)
        : conditinional;
  }

  console.log(
    this.name,
    this.number,
    this.type,
    this.abilities,
    this.hidden_ability,
    this.stats,
    this.moves,
    this.evolution_level,
    this.evolution_stage
  );
};

console.log(pokemon.evoluirPokemon("Ivysaur")); // para evoluir é preciso alterar manualmente o level do pokemon para > 16 [nivel: medium] ou > 36 [nivel: major]
