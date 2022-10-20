const Type = require('./type')

function Move (name, type, power) {
    this.name = name
    this.type = type
    // this.summary = summary
    // this.power = power
    }

const bug = new Move('Overgrow', Type('bug', 
[{name: 'bug', value: 0.5}, { name: 'dark', value: 1 }], 
[{ name: 'bug', value: 2 }, { name: 'dark', value: 1 }]
))

console.log(bug)


module.exports = Move

