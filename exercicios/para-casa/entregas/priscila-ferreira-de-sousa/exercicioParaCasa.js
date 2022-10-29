//exercício incompleto

function DamageType(name, value) {
    this.name = name;
    this.value = value;
}

function Type(name, damage_dealts, damage_taken) { //move type
    this.name = name;
    this.damage_dealts = damage_dealts; //array de DamageTypes
    this.damage_taken = damage_taken; //array de DamageTypes
}

function Ability(name, summary, effect) {
    this.name = name;
    this.summary = summary;
    this.effect = effect;
}

function Move(name, type, summary, power, target, accuracy, priority) {
    this.name = name;
    this.type = type; //Type
    this.summary = summary;
    this.power = power;
    this.target = 'self'; //  ('self', 'allies', 'selected')
    this.accuracy = accuracy;
    this.priority = priority;
}

function Stats(hp, attack, defense, specialAtack, specialDefense, speed) {
    this.hp = hp;
    this.attack = attack;
    this.defense = defense;
    this.specialAtack = specialAtack;
    this.specialDefense = specialDefense;
    this.speed = speed;
}

function Pokemon(name, number, types, abilities, hidden_ability, stats,
    evolution_stage, level, evolution_level, exp, nickname) {
    this.name = name;
    this.number = number;
    this.types = types;  //array de Type
    this.abilities = abilities;   //array de Abilities
    this.hidden_ability = hidden_ability; //Ability
    this.stats = stats; //Stats
    this.evolution_stage = 'baby';  // ('baby', 'basic', 'stage-1', 'stage-2')
    this.level = level;
    this.evolution_level = evolution_level;
    this.exp = exp;
    this.nickname = nickname;
}

Pokemon.prototype.atack = function atack(move, attackedPokemon, attackingPokemon) {
    let damageSum = 0;
    move.type.damage_dealts.array.forEach(d => {
        damageSum += d.value;
    });
    if (!attackingPokemon.types.includes(move.type)) {
        throw `O pokemón ${attackingPokemon.name} não pode realizar movimentos do tipo ${move.type}`;
    }
    console.log(`O pokemón ${attackingPokemon.name} usou o movimento ${move.name}`);

    if (attackedPokemon.stats.hp <= damageSum) {
        console.log(`O pokémon ${attackedPokemon.name} foi derrotado.`);
    } else {
        attackedPokemon.stats.hp -= damageSum;
        console.log(`O pokemón ${attackedPokemon.name} sofreu ${damageSum} de dano.`);
    }
}