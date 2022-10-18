/*- Type: deve possuir:
  - [ ] um nome
  - [ ] um array para taxa de dano recebido por tipos
  - [ ] um array para danos aplicados por tipos.
*/

// exemplo


const Pokedex = {
	name: 'Grass',
	damage_dealt: [
		{ name: 'bug', value: 0.5 },
		{ name: 'dark', value: 1 },
	],
	damage_taken: [
		{ name: 'bug', value: 2 },
		{ name: 'dark', value: 1 },
	],
};