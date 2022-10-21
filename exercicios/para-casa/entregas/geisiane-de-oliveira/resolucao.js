//Atividade não concluída.

function Type (name, taxaDeDano, danosAplicados) {

    this.name = name,
    taxaDeDano = []
    danosAplicados = []

};

function Abilidades (name, descricaoDaHabilidade, efeitoDaHabilitade) {

    this.name = name,
    this.descricaoDaHabilidadeo = descricaoDaHabilidade,
    this.efeitoDaHabilitade = efeitoDaHabilitade
    
};

function Move (name, tipo, descricao, poder, alvo, precisao, prioridade) {

    this.name = name,
    tipo = [],
    danosAplicados = [],
    this.descricao = descricao,
    this.poder = poder,
    alvo = ['self', 'allies', 'selected'],
    this.precisao = precisao,
    this.prioridade = prioridade

};

function Pokemon (
    nome,
    numero,
    tipo,
    habilidade,
    habilidadeOculta,
    status,
    moves,
    estagioDeEvolucao,
    nivel,
    nivelDeEvolucao,
    pontosDeExperiencia,
    apelido
    ){
        this.nome = nome;
        this.numero = numero,
        this.tipo = tipo,
        this.habilidade = habilidade,
        this.habilidadeOculta = habilidadeOculta,
        this.status = {
            saude: 1000,
            ataque: 550,
            defesa: 500,
            ataqueEspecial: 750,
            defesaEspecial: 700,
            velocidade: 900
        },
        this.moves = moves,
        this.estagioDeEvolucao = estagioDeEvolucao,
        this.nivel = nivel,
        this.nivelDeEvolucao = nivelDeEvolucao,
        this.pontosDeExperiencia = pontosDeExperiencia,
        this.apelido = apelido
}

const Pokemon1 = new Pokemon("Pikachu", 001, "Elétrico", "Manupulação de eletricidade", "Velocidade", [], "Raio do Trovão", "Não-evoluída",
2, "Level 80", 50, "Pika");

Pokemon.prototype.movimento = function movimento (movimentoEscolhido){
    if (Pokemon1.moves === movimentoEscolhido){
        return `O Pokemon ${Pokemon1.nome} usou o movimento ${Pokemon1.moves}`
    } else {
        return `O Pokemon ${Pokemon1.nome} não pode usar o movimento ${Pokemon1.moves}`
    }
}

Pokemon.prototype.treino = function treino (pontosDeTreino){
    const contadorDePontos = Pokemon1.pontosDeExperiencia += pontosDeTreino;
    console.log(contadorDePontos)
    let novoNivel = Pokemon1.nivel;
    if (contadorDePontos >= 100){
        Pokemon1.nivel = novoNivel++,
        Pokemon1.pontosDeExperiencia = 0
        return `O pokemon ${Pokemon1.nome} após o treino tem ${Pokemon1.pontosDeExperiencia} pontos de experiência e subiu para o nível ${Pokemon1.nivel} para o nível ${novoNivel}`
    } else (contadorDePontos < 100)
    return `O pokemon ${Pokemon1.nome} após o treino tem ${Pokemon1.pontosDeExperiencia} pontos de experiência e continua no nível ${novoNivel}`

}

Pokemon.prototype.evolucao = evolucao(){

}

//console.log(Pokemon.prototype.movimento("Raio do Trovão"))
//console.log(Pokemon.prototype.treino(10))