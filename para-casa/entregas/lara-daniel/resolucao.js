function Type(nome, dano_causado, dano_recebido){
    this.nome = nome,
    this.dano_causado = dano_causado,
    this.dano_recebido = dano_recebido
}

function Habilidade(nome, descricao, efeito){
    this.nome = nome,
    this.descricao = descricao,
    this.efeito = efeito
}

function Movimento(nome, type, descricao, poder, alvo, precisao, prioridade){
    this.nome = nome,
    this.type = type,
    this.descricao = descricao,
    this.poder = poder,
    this.alvo = alvo,
    this.precisao = precisao,
    this.prioridade = prioridade
}

function Pokemon(nome, numero, type, habilidades, habilidade_oculta, movimentos, estagio_evolucao, level, nivel_evolucao, exp, nickname){
    this.nome = nome,
    this.numero = numero,
    this.type = type,
    this.habilidades = habilidades,
    this.habilidade_oculta = habilidade_oculta,
    this.movimentos = movimentos,
    this.estagio_evolucao = estagio_evolucao,
    this.level = level,
    this.nivel_evolucao = nivel_evolucao,
    this.exp = exp,
    this.nickname = nickname
}

Pokemon.prototype.selecionarMovimento = function selecionarMovimento(movimentoSelecionado){
    if(this.movimentos.includes(movimentoSelecionado)){
        console.log(this.nome + " usou " + movimentoSelecionado.nome)
    } else {
        console.log(this.nome + " não pode usar " + movimentoSelecionado.nome)
    }
 
}

Pokemon.prototype.treinar = function treinar(numExp){
    this.exp += numExp

    while (this.exp >= 100){
        this.level++
        this.exp-=100
    }

    console.log("EXP: " + this.exp + "\nLEVEL: " + this.level)
}

const fogo = new Type('Fogo', ['planta', 1], ['pedra', -2])
const gelo = new Type('Gelo', ['terra', 2], ['metal', -1])
const eletrico = new Type('Elétrico', ['agua', 5], ['terra', -2])

const adaptacao = new Habilidade('adaptacao', 'aumenta poder do movimento', 'essa habilidade dobra o poder de um movimento se ele for do mesmo tipo que o Pokémon usuário')
const incendio = new Habilidade('incendio', 'aumento do poder de ataque para pokemons de fogo', 'quando o HP do Pokémon que possui Blaze chegar a um terço, o poder dos seus ataques do tipo Fogo aumentarão 1.5 vezes')
const armadura = new Habilidade('armadura', 'bloqueia ataques', 'essa habilidade bloqueia ataques com dano crítico em 70%')

const incendiar = new Movimento('incendiar', fogo, 'ataque de bola de fogo no oponente', 30, ['selecionado'], 100, 1)
const congelar = new Movimento('congelar', gelo, 'congelar oponente', 15, ['selecionado', 'aliados'], 70, 2)
const raio = new Movimento('raio', eletrico, 'eletrocutar oponente', 200, ['selecionado', 'aliados', 'auto'], 50, 5)

const pikachu = new Pokemon('Pikachu', 25, eletrico, [adaptacao, armadura], ['multiplicar','criar copias de si mesmo', 'confundir oponente'], raio, 'basico', 1, 16, 0, 'pikapikachu')
const charmander = new Pokemon('Charmander', 1, fogo, [incendio], ['desaparecer', 'voar', 'desviar do ataque do oponente'], [incendiar], 'basico', 2, 5, 1, 'jorge')
const gotinha = new Pokemon('Zé Gotinha', 13, gelo, armadura, ['imunidade', 'vacinas em formato de fotinha', 'aumento da imunidade'], congelar, 'avancado', 10, 1000, 70, 'zé gotinha')

//  console.log(fogo)
// console.log(incendio)
// console.log(incendiar)
// console.log(charmander)
// charmander.selecionarMovimento(incendiar)
// charmander.treinar(150)