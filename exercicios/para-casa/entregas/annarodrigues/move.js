const createType = require('./createType.js') 

function move (name, summary, power, target,accuracy, priority)
{
    let move ={};

    move.name = name;
    move.type = createType();
    move.summary= summary;
    move.power = power;
    move.target = target;
    move.accuracy = accuracy;
    move.priority = priority;
    
    return move;
}

module.exports = move ; 