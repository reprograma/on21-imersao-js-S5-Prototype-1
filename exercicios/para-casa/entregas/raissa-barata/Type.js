function Type(name, damage_dealt, damage_taken) {

    this.name = name
    this.damage_dealt = damage_dealt 
    this.damage_taken = damage_taken
}


const type1 = new Type('fogo', [{name: 'bug', value: 1}], [{name: 'dark', value: 2}])

module.exports = Type

console.log(type1);