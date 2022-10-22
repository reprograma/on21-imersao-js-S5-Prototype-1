const damageDealt = {
	'Grass':[
		{ name: 'bug', value: 0.5 },
		{ name: 'dark', value: 1 },
	],

    'Poison': [
        { name: 'bug', value: 0.5 },
		{ name: 'dark', value: 1 },
    ]
	
};

const damageTaken = {
	'Grass':[
		{ name: 'bug', value: 2 },
		{ name: 'dark', value: 1 },
	],

    'Poison': [
        { name: 'bug', value: 0.5 },
		{ name: 'dark', value: 1 },
    ]
	
};

function createType(name, damageDealt, damageTaken){

    const type = {};

    type.name = name;
    type.damage_dealt = damageDealt;
    type.damage_taken = damageTaken;

    return type;
}


module.exports = createType;