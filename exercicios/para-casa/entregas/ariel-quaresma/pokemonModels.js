function Type(name, damage_dealt, damage_taken) {
    this.name = name;
    this.damage_dealt = damage_dealt;
    this.damage_taken = damage_taken;
}

function Abilities(name, summary, effect) {
    this.name = name;
    this.summary = summary;
    this.effect = effect;
}

function Move(name, type, summary, power, target, accuracy, priority) {
    this.name = name;
    this.type = type;
    this.summary = summary;
    this.power = power;
    this.target = target;
    this.accuracy = accuracy;
    this.priority = priority;
}

function Pokemon(name, number, types, abilities, hidden_abilities, stats, moves, evolution_stage, level, evolution_level, exp, nickname) {
    this.name = name;
    this.number = number;
    this.types = types;
    this.abilities = abilities;
    this.hidden_abilities = hidden_abilities;
    this.stats = stats;
    this.moves = moves;
    this.evolution_stage = evolution_stage;
    this.level = level;
    this.evolution_level = evolution_level;
    this.exp = exp;
    this.nickname = nickname;
}

Pokemon.prototype.useMovement = function useMovement(movement) {
    let checkMoveBoolean = checkMove(movement, this.moves)[0];
    let checkMovePosition = checkMove(movement, this.moves)[1];

    if (checkMoveBoolean == true) {
        return `${this.name} usou ${this.moves[checkMovePosition].name}`
    } else {
        return `${this.name} não pode usar ${movement}`
    }
}

Pokemon.prototype.training = function training(points) {
    this.exp += points;
    if (this.exp >= 100) {
        this.level += 1;
        this.exp = 0;
    }
},

    Pokemon.prototype.evolve = function evolve(name, number, type, abilities, hidden_abilities, stats, moves, evolution_level) {
        if (this.evolution_stage != 'stage-2') {
            if (this.level >= this.evolution_level) {
                this.name = name;
                this.number += number;
                this.type = type;
                this.abilities = abilities;
                this.hidden_abilities = hidden_abilities;
                this.stats = stats;
                this.moves = moves;
                this.evolution_stage = checkStage(this.evolution_stage)
                this.evolution_level = evolution_level;
            }
        } else {
            return `Seu pokemon não pode evoluir`
        }
    };

function checkMove(move, arrayMoves) {
    for (let i = 0; i < arrayMoves.length; i++) {
        if (arrayMoves[i].name == move) {
            return [true, i];
        }

    }
    return false;
};

function checkStage(stage) {
    stages = ['baby', 'basic', 'stage-1', 'stage-2']
    if (stage == stages[3]) {
        return `${this.name} não pode evoluir além disso`
    }

    for (let i = 0; i < stages.length; i++) {
        if (stages[i] == stage) {
            return stages[i + 1]
        }
    }
};

module.exports = { Type, Pokemon, Abilities, Move }