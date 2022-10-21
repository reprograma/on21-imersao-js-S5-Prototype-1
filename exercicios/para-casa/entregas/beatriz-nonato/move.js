function Move(name, type, summary, power, target, accuracy, priority){

    this.name = name;
    this.type = type;
    this.summary= summary;
    this.power = power;
    this.target = target;
    this.accuracy = accuracy;
    this.priority = priority;
}

module.exports = Move;