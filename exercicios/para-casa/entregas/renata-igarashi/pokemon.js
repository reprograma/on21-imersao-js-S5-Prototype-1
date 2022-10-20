function Pokemon(name, number, types, abilities, hidden_abilities, stats, moves, evolution_stage, level, evolution_level, exp, nickname) {
    this.name = name
    this.number = number
    this.types = types
    this.abilities = abilities
    this.hidden_abilities = hidden_abilities
    this.stats = stats
    this.moves = moves
    this.evolution_stage = evolution_stage
    this.level = level
    this.evolution_level = evolution_level
    this.exp = exp
    this.nickname = nickname
  }

  Pokemon.prototype.pokemonMove = function(move) {
    let result = this.moves.find(moveName => moveName.name === move)

    if(!result) {
      console.log(`${this.name} não pode usar ${move}`)
    } else {
      console.log(`${this.name} usou ${move}`)
    }
  }

Pokemon.prototype.trainning = function trainning(xp) {
  this.exp += xp
  while (this.exp >= 100) {
    this.level++
    this.exp -= 100
  }
  if (this.exp < 0) {
    this.exp = 0
  }
  console.log(`${this.name} trained and earned ${xp} xp\nCurrent XP: ${this.exp} \nLevel: ${this.level}`)
}

Pokemon.prototype.evolve = function evolve(name, evolution_level, type, abilities, hidden_abilities, stats, move) {
  const evolutionStage = ['baby', 'basic', 'stage-1', 'stage-2']
  this.evolution_level = evolution_level
  if (this.level >= this.evolution_level) {
    this.name = name
    this.number++
    
    const index = evolutionStage.indexOf(this.evolution_stage)
    this.evolution_stage = evolutionStage[index + 1]
    console.log(`Pokemon evolved into ${this.name}! \nEvolution Stage: ${this.evolution_stage}, \nEvolution Level: ${this.evolution_level} \nNumber: ${this.number}`)
  } else {
    console.log('Insufficient level to evolve!');
  }
  this.types.push(type)
  this.abilities.push(abilities)
  this.hidden_abilities.push(hidden_abilities)
  this.stats = stats
  this.moves.push(move)
 }

module.exports = Pokemon