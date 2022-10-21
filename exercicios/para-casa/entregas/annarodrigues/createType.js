const damageDealtByType = {
    grass: [
        { name: "bug", value: 0.5 },
        { name: "dark", value: 1 }
    ],
    poison: [
        { name: "bug", value: 1 },
        { name: "dark", value: 1 }
    ],
}

const damagetakenByType = {
    grass: [
        { name: "bug", value: 2 },
        { name: "dark", value: 1 }
    ],
    poison: [
        { name: "bug", value: 0.5 },
        { name: "dark", value: 1 }
    ],
}


function createType (name , damageDealtByType , damagetakenByType)
{
    let type= {};

    type.name = name ;
    type.damage_dealt = damageDealtByType;
    type.damage_taken =  damagetakenByType;
   
    return type;
}

module.exports = createType;