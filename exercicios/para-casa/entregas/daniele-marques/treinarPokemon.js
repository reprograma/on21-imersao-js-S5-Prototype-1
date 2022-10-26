import { pokemon, Pokemon } from "./index.js";

let pontos = 0;

Pokemon.prototype.treinarPokemon = function treinarPokemon(exp) {
  this.exp += exp;
  if (this.exp >= 100) {
    this.exp = 0;
    pontos += 1;
    this.level = pontos;
    return `${pokemon.name} treinou e atingiu 100 de experiência, por isso voltou a ter de ${this.exp} experiência e foi para o level ${this.level}`;
  }
  this.level = pontos;
  return `${pokemon.name} treinou e atingiu ${pokemon.exp} de experiência e seu level é: ${this.level}`;
};

console.log(pokemon.treinarPokemon(20)); // Bulbasaur treinou e atingiu 20 de experiência e seu level é: 0
console.log(pokemon.treinarPokemon(80)); // Bulbasaur treinou e atingiu 100 de experiência, por isso voltou a ter de 0 experiência e foi para o level 1
console.log(pokemon.treinarPokemon(100)); // Bulbasaur treinou e atingiu 100 de experiência, por isso voltou a ter de 0 experiência e foi para o level 2
console.log(pokemon.treinarPokemon(100)); // Bulbasaur treinou e atingiu 100 de experiência, por isso voltou a ter de 0 experiência e foi para o level 3
console.log(pokemon.treinarPokemon(50)); // Bulbasaur treinou e atingiu 50 de experiência, por isso voltou a ter de 0 experiência e foi para o level 3
