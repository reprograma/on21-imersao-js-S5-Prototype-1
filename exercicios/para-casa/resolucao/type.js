function Type (name, damage_dealt, damage_taken) {
    this.name = name
    this.damage_dealt = [
        {name: damage_dealt[0].name , value: damage_dealt[0].value},
        {name: damage_dealt[1].name , value: damage_dealt[1].value}
    ]
    this.damage_taken = [
        {name: damage_taken[0].name , value: damage_taken[0].value},
        {name: damage_taken[1].name , value: damage_taken[1].value}
    ]
    }

const bug = new Type('bug', 
    [{name: 'bug', value: 0.5}, { name: 'dark', value: 1 }], 
    [{ name: 'bug', value: 2 }, { name: 'dark', value: 1 }]
    )

// console.log(bug)


module.exports = Type