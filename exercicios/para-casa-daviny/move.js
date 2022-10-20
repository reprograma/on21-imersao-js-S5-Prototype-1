function Move (name, summary, effect) {
    this.name = name
    this.summary = summary
    this.damage_taken = effect
    }

const bug = new Move('Overgrow', 'Strengthens Grass moves to inflict 1.5× damage at 1/3 max HP or less.', 'When this Pokémon has 1/3 or less of its HP remaining, its Grass-type moves inflict 1.5× as much regular damage.')

console.log(bug)


modules.exports = Ability

