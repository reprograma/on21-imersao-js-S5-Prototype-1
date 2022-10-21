const pokemonMethods ={
    moove : function moove(){},
    training : function training(){},
    evolution : function evolution(){}
}

function Pokemon ( name, number , type , ability, hidden_ability, stats, evolution_stage, level, evolution_level,
    exp,nickname ){
        
        this.name = name;
        this.number = number;
        this.type = type;
        this.ability = ability;
        this.hidden_ability = hidden_ability;
        this.stats = stats;
        this.evolution_stage = evolution_stage;
        this.level = level;
        this.evolution_level = evolution_level;
        this.exp = exp;
        this.nickname = nickname;

   
   }

const movimento = new Pokemon ('Balbasaur', 1,'Grass', 'Overgrow', 'Chlorophyll', 45, 'basic', 1, 16, 0, 'Robertinho' )




