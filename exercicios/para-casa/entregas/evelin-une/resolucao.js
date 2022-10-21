const damageDealtByType = {
    grass: [
        {name: "grass", value: 0.5 },
        {name: "water", value: 0.5 },
        {name: "fire", value: 1}
    ],
    fire: [
        {name: "grass", value: 0.5},
        {name: "water", value: 1},
        {name: "fire", value: 0.5},
    ],
    water: [
        {name: "grass", value: 0.5},
        {name: "water", value: 1},
        {name: "fire", value: 0.5},
    ]      
}

const damageTakenByType = {
    grass: [
        {name: "grass", value: 0 },
        {name: "water", value: 1 },
        {name: "fire", value: 0.5}
    ],
    fire: [
        {name: "grass", value: 1},
        {name: "water", value: 0.5},
        {name: "fire", value: 0},
    ],
    water: [
        {name: "grass", value: 1},
        {name: "water", value: 0},
        {name: "fire", value: 0.5},
    ]      
}

function createType(name, damage_delt, damage_taken){
    this.name = name;
    this.damage_delt = damage_delt;
    this.damage_taken = damage_taken;
}


function createAbilitie(name, summary, effect){
    this.name = name;
    this.summary = summary;
    this.effect = effect;
}

function createMove(name, type, summary, power, target, accuracy, priority){
    this.name = name;
    this.type = createType[type];
    this.summary = summary;
    this.power = power;
    this.target = target;
    this.accuracy = accuracy;
    this.priority = priority;
}

function createPokemon(name, number, types, abilities, hidden_ability, stats, moves, evolution_stage, level, evolution_level, exp, nickname){
    this.name = name;
    this.number = number;
    this.types = createType(types);
    this.abilities = createAbilitie(abilities);
    this.hidden_ability = hidden_ability;
    this.stats = stats;
    this.moves = createMove(moves);
    this.evolution_stage = evolution_stage;
    this.level = level;
    this.evolution_level = evolution_level;
    this.exp = exp;
    this.nickname = nickname;
}

Pokemon.prototype.attack = function attack(){
    // logica aqui
}

Pokemon.prototype.train = function train(exp){
    this.exp += exp;
    if(this.exp >= 100){
        this.level ++;
        this.exp = 0;
    }
}

Pokemon.prototype.envolve = function envolve(new_name, new_evolution_level ){
    if(this.level = this.evolution_level){
        this.name = new_name;
        this.number ++;
        this.evolution_level = new_evolution_level;
    }
}

