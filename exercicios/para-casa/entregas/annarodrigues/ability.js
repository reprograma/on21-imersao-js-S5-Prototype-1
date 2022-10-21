function ability(name, summary , effect)
{
    let ability= {};
    
    ability.name = name;
    ability.summary = summary;
    ability.effect = effect;

    return ability;
}
module.exports = ability;