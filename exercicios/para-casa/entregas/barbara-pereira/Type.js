
function Type(name){
    let type = {}

    type.name = name;
    type.damage_dealt = [];
    type.damage_taken = [];

    return type;    
}

function Ability(name, summary, effect){
    let abilities = {}

    abilities.name = name;
    abilities.summary = summary;
    abilities.effect = effect;

    return abilities;
}

function Move(){
    let move = {}

    move.type = Type();
    move.abilities = Ability();
    return move;
}

function Create(name, number){
    let create = {};
    
    return create

}
