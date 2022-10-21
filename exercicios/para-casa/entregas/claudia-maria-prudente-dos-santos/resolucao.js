const Abilities = require("./Abilities.js");
const Move = require("./Move.js");
const Pokemon = require("./Pokemon.js");
const Type = require("./Type.js");

const TypeGrass = new Type(
  "Grass",
  [
    { name: "bug", value: 0.5 },
    { name: "dark", value: 1 },
  ],
  [
    { name: "bug", value: 2 },
    { name: "dark", value: 1 },
  ]
);

const TypePoison = new Type(
  "Poison",
  [
    { name: "bug", value: 1 },
    { name: "dark", value: 1 },
  ],
  [
    { name: "bug", value: 0.5 },
    { name: "dark", value: 1 },
  ]
);
const AbilitiesOvergrow = new Abilities(
  "Overgrow",
  "Strengthens Grass moves to inflict 1.5× damage at 1/3 max HP or less.",
  "When this Pokémon has 1/3 or less of its HP remaining, its Grass-type moves inflict 1.5× as much regular damage."
);

const MoveSynthesis = new Move(
  "Synthesis",
  TypeGrass,
  "Cures the entire party of major status effects.",
  null,
  ["self", "allies"],
  null,
  0
);

const MoveVineWhip = new Move(
  "Vine Whip",
  TypeGrass,
  "Inflicts regular damage with no additional effect.",
  45,
  ["selected"],
  100,
  0
);

const MoveAromatherapy = new Move(
  "Aromatherapy",
  TypeGrass,
  "Cures the entire party of major status effects.",
  null,
  ["self", "allies"],
  null,
  0
);

const PokemonBulbasaur = new Pokemon(
  "Bulbasaur",
  1,
  [TypeGrass, TypePoison],
  [AbilitiesOvergrow],
  {
    name: "Chlorophyll",
    summary: "Doubles Speed during strong sunlight.",
    effect: "This Pokémon's Speed is doubled during strong sunlight.",
  },
  {
    hp: 45,
    attack: 49,
    defense: 49,
    "s-attack": 65,
    "s-defense": 65,
    speed: 45,
  },
  [MoveSynthesis, MoveVineWhip],
  "basic",
  1,
  16,
  0,
  "Robertinho"
);

console.log(PokemonBulbasaur.useMove(MoveSynthesis)); // retorna que Bulbasaur usou Synthesis
console.log(PokemonBulbasaur.useMove(MoveAromatherapy)); //retorna que Bulbasaur não pode usar Aromatherapy

console.log(PokemonBulbasaur.trainPokemon(30)); //retorna experiência 30
console.log(PokemonBulbasaur.trainPokemon(120)); //retorna experiência 50 e level 2
console.log(PokemonBulbasaur.trainPokemon(80)); //retorna experiência 30 e level 3
console.log(PokemonBulbasaur.trainPokemon(200)); //retorna experiência 30 e level 5
console.log(PokemonBulbasaur.trainPokemon(600)); //retorna experiência 30 e level 11

console.log(
  PokemonBulbasaur.evolvePokemon(
    "Ivysaur",
    null,
    [AbilitiesOvergrow],
    null,
    null,
    MoveAromatherapy
  )
); //retorna que não foi possível evoluir o Pokemon

console.log(PokemonBulbasaur.trainPokemon(600)); //retorna experiência 30 e level 11

console.log(
  PokemonBulbasaur.evolvePokemon(
    "Ivysaur",
    null,
    [AbilitiesOvergrow],
    null,
    null,
    [MoveAromatherapy, MoveSynthesis],
    2
  )
); //retorna que foi possível evoluir o Pokemon
console.log(PokemonBulbasaur); //retorna Ivysaur
