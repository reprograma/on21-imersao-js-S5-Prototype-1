function Type (name , damage_dealt , damage_taken)
{
 
    this.name = name ;
    this.damage_dealt = damage_dealt;
    this.damage_taken =  damage_taken;

}

const TypeGrass = new Type( "Grass",
    [ { name: "bug", value: 0.5 }, { name: "dark", value: 1 }, ],
    [ { name: "bug", value: 2 }, { name: "dark", value: 1 }, ]);
  
const TypePoison = new Type("Poison",
    [ { name: "bug", value: 1 },{ name: "dark", value: 1 },],
    [ { name: "bug", value: 0.5 },{ name: "dark", value: 1 },] );

module.exports = {TypeGrass ,TypePoison};