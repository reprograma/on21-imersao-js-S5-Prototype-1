function Type(name, damage_dealt, damage_taken){

    this.name = name;
    this.damage_dealt = damage_dealt;
    this.damage_taken =  damage_taken;
}

const waterType = new Type('Squirtle', 'Torrent', 'Electric');

module.exports = Type;