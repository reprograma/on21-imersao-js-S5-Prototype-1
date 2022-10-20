const Type = require('./type')

function Move (name, type_name, type_damage_dealt, type_damage_taken, power, accuracy, target, priority) {
    const obj = Object.create(Move.prototype)
    this.name = name
    this.type = {name: type_name, damage_dealt: type_damage_dealt, damage_taken: damage_taken}

    // this.summary = summary
    // this.power = power
    }

const bug = new Move('Overgrow', 'bug',  [{name: 'bug', value: 0.5}, { name: 'dark', value: 1 }], [{ name: 'bug', value: 2 }, { name: 'dark', value: 1 }], )

console.log(bug)


module.exports = Move

