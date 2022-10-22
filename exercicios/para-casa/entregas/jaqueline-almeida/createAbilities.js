function createAbilities(name,summary, effect){

    const abilities = {};

    abilities.name = name; 
	abilities.summary = summary;
	abilities.effect = effect; 

    return abilities;
}	

module.exports = createAbilities;