const Type = require('./createType.js') 
const move = require('./move.js') 
const ability = require('./ability.js') 

function Pokemon(name,number,types,abilities,hidden_ability,stats,moves,
    evolution_stage,level,evolution_level,exp,nickname) {
    this.name = name;
    this.number = number;
    this.types = types;
    this.abilities = abilities;
    this.hidden_ability = hidden_ability;
    this.stats = stats;
    this.moves = moves;
    this.evolution_stage = evolution_stage;
    this.level = level;
    this.evolution_level = evolution_level;
    this.exp = exp;
    this.nickname = nickname;
  }
  
  // criando pokemon
  const PokemonBulbasaur = new Pokemon( "Bulbasaur",
    1,[Type.TypeGrass, Type.TypePoison],[ability.AbilitiesOvergrow],
    { name: "Chlorophyll",
      summary: "Doubles Speed during strong sunlight.",
      effect: "This Pokémon's Speed is doubled during strong sunlight.",},
    {hp: 45, attack: 49, defense: 49, "s-attack": 65, "s-defense": 65,speed: 45,},
    [move.MoveSynthesis, move.MoveVineWhip],"basic",1,16,0,"Robertinho");


// console.log(PokemonBulbasaur);
  
// Criando Methodos

Pokemon.prototype.attack = function attack(move) {
    if (this.moves.indexOf(move) === -1)
     {return `${this.name} não pode usar ${move.name}`;}
     else 
     {return `${this.name} usou ${move.name}`;} 
};

//console.log(PokemonBulbasaur.attack(MoveAromatherapy));
//console.log(PokemonBulbasaur.attack(MoveSynthesis));

Pokemon.prototype.training = function training(exp) {
    const auxExp = this.exp + exp;
    if (auxExp < 100) {
      this.exp = auxExp;
      return `Experiência de ${this.name}: ${this.exp}  Level: ${this.level}`;
    } 
    else {
      this.level = this.level + Math.floor(auxExp / 100); //quociente
      this.exp = 0;
      return `Experiência de ${this.name}: ${this.exp}  Level: ${this.level}`;
    }
  };

//console.log(PokemonBulbasaur.training(70));
//console.log(PokemonBulbasaur.training(600));

Pokemon.prototype.evolute = function evolute( name, type, abilities, hidden_ability,
    stats, moves,evolution_level ) {
    this.name = name;
    this.number = this.number + 1;


    this.type = type;
    this.abilities = abilities;
    this.hidden_ability = hidden_ability;
    this.stats = stats;
    this.moves = moves;
  
    const stagesEvolution = ["baby", "basic", "stage-1", "stage-2"];
    const qtdstages = (stagesEvolution.length -1)
    const auxStagesEvolution = stagesEvolution.indexOf(this.evolution_stage) + 1;
   
    if (auxStagesEvolution <= qtdstages) 
        {this.evolution_stage = stagesEvolution[auxStagesEvolution];}
    else
        {this.evolution_stage = stagesEvolution[qtdstages]}
   
    this.evolution_level = evolution_level;
    this.exp = this.exp;
    this.nickname = this.nickname;
  
  };
  //console.log(PokemonBulbasaur.evolute());

  console.log(
    PokemonBulbasaur.evolute(
      "Ivysaur",
      [Type.TypeGrass, Type.TypePoison],
      [move.AbilitiesOvergrow],
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
      [move.MoveAromatherapy, move.MoveSynthesis, move.MoveVineWhip],
      45
    )
  );

  console.log(PokemonBulbasaur);