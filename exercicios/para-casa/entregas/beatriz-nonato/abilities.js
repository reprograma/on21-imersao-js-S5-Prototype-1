function Abilities(name, summary , effect){

    this.name = name;
    this.summary = summary;
    this.effect = effect;
}

const waterAbility = new Abilities('Rain Dish', 'Torrent', 'Electric');

module.exports = Abilities;