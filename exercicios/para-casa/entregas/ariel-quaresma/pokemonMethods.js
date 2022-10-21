const pokemonMethods = {
    useMovement: function useMovement(movement){
        if (checkMove(movement, this.moves) == true){
            return `${this.name} usou ${this.moves.name}`
        }else{
            return `${this.name} não pode usar ${movement}`
        }
    },

    training: function training(points){
        this.exp += points;
        if (this.exp >= 100){
            this.level += 1;
            this.exp = 0;
        }
    },

    evolve: function evolve(name, number, type, abilities, hidden_abilities, stats, moves, evolution_level){
        if (this.evolution_stage != 'stage-2'){
            if (this.level >= this.evolution_level){
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
        }else{
            return `Seu pokemon não pode evoluir`
        }
    }
}

function checkMove(move, arrayMoves){
    for (let i = 0; i < arrayMoves.length; i++){
        if (moves[i].name == move){
            return true;
        }
    } return false;
}

function checkStage(stage){
    stages = ['baby', 'basic', 'stage-1', 'stage-2']
    if (stage == stages[3]){
        return `${this.name} não pode evoluir além disso`
    }

    for (let i = 0; i < stages.length; i++){
        if (stages[i] == stage){
            return stages[i+1]
        }
    }
}

module.exports = { pokemonMethods }