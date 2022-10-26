import { pokemon, Pokemon } from "./index.js";

Pokemon.prototype.movement = function movement(move) {
  const obj = {
    Synthesis: this.moves[0],
    Vine_Whip: this.moves[1],
  };
  if (!obj.hasOwnProperty(move)) {
    throw new Error(`${pokemon.name} não pode usar ${move}`);
  }
  return `${pokemon.name} usou ${obj[move].name}`;
};

console.log(pokemon.movement("Vine_Whip")); // Bulbasaur usou Vine_Whip
console.log(pokemon.movement("Synthesis")); // Bulbasaur usou Synthesis
console.log(pokemon.movement("Thunder Shock")); // throw new Error(`${pokemon.name} não pode usar ${move}`);
// Error: Bulbasaur não pode usar Thunder Shock
