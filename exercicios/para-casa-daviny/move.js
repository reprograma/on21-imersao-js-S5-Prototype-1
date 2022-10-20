const Type = require('./type')

function Move (name, type) {
    this.name = name
    this.type = Type(type.name, type.damage_dealt, type.damage_taken)
    // this.summary = summary
    // this.power = power
    }

const bug = new Move('Overgrow', ['bug', 
[{name: 'bug', value: 0.5}, { name: 'dark', value: 1 }], 
[{ name: 'bug', value: 2 }, { name: 'dark', value: 1 }]
])

console.log(bug)


module.exports = Move

