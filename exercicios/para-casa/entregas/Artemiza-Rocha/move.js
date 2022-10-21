const Type = require ('./type.js')



function Move(name, type, summary, power, target, accuracy, priority){
 //const newType = Object.create(Type.prototype);

    
    this.name = name;
    this.type = type;
    this.summary = summary;
    this.power = power;
    this.target = target;
    this.accuracy = accuracy;
    this.priority= priority;
  
     }
  
  const waterMove = new Move('Wartertlo', 'turtle', 'Weaknesses', 'water', 'grass', 'temp', 'Attack');
  
  console.log(waterMove);
  
  
    module.exports = Move;



