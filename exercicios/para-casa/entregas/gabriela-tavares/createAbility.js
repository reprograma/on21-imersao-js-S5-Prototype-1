const abilities  = {
    overgrow:
    {
      name: 'Overgrow',
      summary: 'Strengthens Grass moves to inflict 1.5× damage at 1/3 max HP or less.',
      effect: 'When this Pokémon has 1/3 or less of its HP remaining, its Grass-type moves inflict 1.5× as much regular damage.'
    }
    ,
    fly:
    {
      name: 'Fly',
      summary: 'Fly 100 meters high.',
      effect: "This Pokémon's can fly up to 12 hours."
    }
  }



function ability(name, summary, effect) {
  this.name = name;
  this.summary = summary;
  this.effect = effect;
}

const abilityOvergrow = new ability('Overgrow', abilities.overgrow.summary, abilities.overgrow.effect )
const abilityFly = new ability('Fly', abilities.fly.summary, abilities.fly.effect )

module.exports = {
    abilities,
    ability,
}