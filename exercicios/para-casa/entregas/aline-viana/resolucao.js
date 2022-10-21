function type(name) {
    const pokeType = {};

    pokeType.name = name;
    pokeType.damageDealt = [];
    pokeType.damageTaken = [];

    pokeType.damageDealt = (name, value) => {
        damageDealt.name = name;
        damageDealt.value = value;

        return damageDealt;
    }
    
    pokeType.damageTaken = (name, value) => {
        damage_taken.name = name;
        damage_taken.value = value;

        return damageTaken;
    }

    return pokeType;
}

function pokeSkills(name, sumary, effect) {
    const skills = {};
    skills.name = name;
    skills.sumary = sumary;
    skills.effect = effect;

    return skills;
}

function movement(name, summary, power, target, accuracy, priority) {
    const move = {};
    move.name = name;
    move.type = type();
    move.summary = summary;
    move.power = power;
    move.target = target;
    move.accuracy = accuracy;
    move.priority = priority;

    return move;
}

function pokeStatus(life, attack, defense, specialAttack, specialDefense, speed) {
    const status = {};
    status.life = life;
    status.attack - attack;
    status.defense = defense;
    status.specialAttack = specialAttack;
    status.specialDefense = specialDefense;
    status.speed = speed;

    return status;
}

function createPokemon(namePokemon, pokemonNumber, hiddenSkills, nameskills, summaryskills, effectskills, life, attack, defense, specialAttack, specialDefense, speed, evolutionStage, level, evolutionLevel, experiencePoints, nickname) {
    const pokemon = {};
    pokemon.namePokemon = namePokemon;
    pokemon.pokemonNumber = pokemonNumber;
    pokemon.type = type('butterfree', ['bug', 'flying']);
    pokemon.skills = pokeSkills(nameskills, summaryskills, effectskills);
    pokemon.hiddenSkills = hiddenSkills;
    pokemon.status = pokeStatus(life, attack, defense, specialAttack, specialDefense, speed);
    pokemon.evolutionStage = evolutionStage;
    pokemon.level = level;
    pokemon.evolutionLevel = evolutionLevel;
    pokemon.experiencePoints = experiencePoints
    pokemon.nickname = nickname;

    return pokemon;
}


const pokemon = new createPokemon("Butterfree", 13, "bug",
    ['bug', 2.0], ['test', 2])