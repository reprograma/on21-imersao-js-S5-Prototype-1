const createType = require('./createType.js') 

function move (name, type, summary, power, target,accuracy, priority)
{

    this.name = name;
    this.type = type;
    this.summary= summary;
    this.power = power;
    this.target = target;
    this.accuracy = accuracy;
    this.priority = priority;
   
}

const MoveAromatherapy = new move("Aromatherapy",
createType.TypeGrass,"Cures the entire party of major status effects.",
    null, ["self", "allies"],null, 0);
  
  
const MoveVineWhip = new move("Vine Whip",
createType.TypeGrass,"Inflicts regular damage with no additional effect.",
    45,100,["selected"],0);
  
const MoveSynthesis = new move("Synthesis",
createType.TypeGrass,
    "Heals the user by half its max HP. Affected by weather.",
    null, null,["self"],0 );


module.exports = {MoveVineWhip ,MoveSynthesis ,MoveAromatherapy } ; 