const createType = require('./createType.js')

function movePokemon(name, summary,power, target, accuracy,propriety){

    const move = {};

    move.name = name; 
	move.type = createType();
	move.summary = summary; 
    move.power = power;
    move.target = target;
    move.accuracy = accuracy;
    move.propriety = propriety;

    return move;
}	

module.exports = movePokemon;