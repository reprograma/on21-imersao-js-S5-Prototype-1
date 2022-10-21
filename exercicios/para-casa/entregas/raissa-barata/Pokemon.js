function Pokemon ( name, number , type, evolution_stage, level, evolution_level,
    exp, nickname ){

    this.name = name;
    this.number = number;
    this.type = type;
    this.ability = ability;
    this.hidden_ability = hidden_ability;
    this.status = function status(hp, attack, sattack, defense, sdefense, speed){
        status.hp = hp;
        status.attack = attack;
        status.sattack = sattack;
        status.defense = defense;
        status.sdefense = sdefense;
        status.speed = speed;
    };
    this.level = level;
    this.evolution_level = evolution_level;
    this.exp = exp;
    this.nickname = nickname;

}