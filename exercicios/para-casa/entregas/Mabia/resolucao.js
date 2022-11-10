//pokedex, criar um objeto de pokemons

function type(nome) {
  const type = {};

  type.nome = nome;
  type.taxaDano = [];
  type.danoAplicado = [];
  type.taxaDano = function taxaDano(nome, valor) {
    taxaDano.nome = nome;
    taxaDano.valor = valor;

    return taxaDano;
  };
  type.taxaDano = function danoAplicado(nome, valor) {
    danoAplicado.nome = nome;
    danoAplicado.valor = valor;

    return danoAplicado;
  };

  return type;
}

function habilidade(nome, efeito, descricao) {
  const habilidade = {};
  habilidade.nome = nome;
  habilidade.efeito = efeito;
  habilidade.descricao = descricao;

  return habilidade;
}

function mover(nome, tipo, descricao, poder, alvo, precisao, prioridade) {
  const mover = {};

  mover.nome = nome;
  mover.tipo = tipo;
  mover.descricao = descricao;
  mover.poder = poder;
  mover.alvo = alvo;
  mover.precisao = precisao;
  mover.prioridade = prioridade;

  return mover;
}

const metodosPokemon = {
  movimentar: function movimentar() {},
  treinar: function treinar() {},
  evoluir: function evoluir() {},
};

function estados(
  saude,
  ataque,
  defesa,
  ataqueEspecial,
  defesaEspecial,
  velocidade
) {
  const estados = {};

  estados.saude = saude;
  estados.ataque = ataque;
  estados.defesa = defesa;
  estados.ataqueEspecial = ataqueEspecial;
  estados.defesaEspecial = defesaEspecial;
  estados.velocidade = velocidade;

  return estados;
}

function pokemon(
  nome,
  numero,
  estagioEvolucao,
  fase,
  faseEvolucao,
  experiencia,
  apelido
) {
  const novoPokemon = {};

  novoPokemon.nome = nome;
  novoPokemon.numero = numero;
  novoPokemon.type = type();
  novoPokemon.habilidade = habilidade();
  novoPokemon.habilidadeOculta = habilidade();
  novoPokemon.estados = estados();
  novoPokemon.estagioEvolucao = estagioEvolucao;
  novoPokemon.fase = fase;
  novoPokemon.faseEvolucao = faseEvolucao;
  novoPokemon.experiencia = experiencia;
  novoPokemon.apelido = apelido;

  novoPokemon.mover = metodosPokemon.movimentar;
  novoPokemon.treinar = metodosPokemon.treinar;
  novoPokemon.evoluir = metodosPokemon.evoluir;

  return novoPokemon;
}

const Zubat = pokemon("Zubat", 54, "basico", 12, 31, 66, "Fogo no rabo");
Zubat.type = type(
  "fogo",
  (type.taxaDano = ["choque", 0.8, "vermelho", 1]),
  (type.danoAplicado = ["choque", 8, "laranja", 2])
);

Zubat.habilidade = habilidade(
  "Adaptação",
  "essa habilidade dobra o poder de um movimento se ele for do mesmo tipo que o Pokémon usuário",
  "quando o Pokémon que possui essa habilidade for atingido por um ataque de dano crítico, seu Ataque será quadruplicado"
);

Zubat.habilidadeOculta = habilidade(
  "Revolta",
  "essa habilidade dobra o poder de um movimento se ele for do mesmo tipo que o Pokémon usuário",
  "quando o Pokémon que possui essa habilidade for atingido por um ataque de dano crítico, seu Ataque será quadruplicado"
);

Zubat.estados = estados(12, 45, 23, 56, 32, 67);

//Pidgey

const Pidgey = pokemon("Pidgey", 40, "Avançado", 34, 12, 23, "porco");
Pidgey.type = type(
  "fogo",
  (type.taxaDano = ["choque", 0.8, "vermelho", 1]),
  (type.danoAplicado = ["choque", 8, "laranja", 2])
);

Pidgey.habilidade = habilidade(
  "Adaptação",
  "essa habilidade dobra o poder de um movimento se ele for do mesmo tipo que o Pokémon usuário",
  "quando o Pokémon que possui essa habilidade for atingido por um ataque de dano crítico, seu Ataque será quadruplicado"
);

Pidgey.habilidadeOculta = habilidade(
  "Revolta",
  "essa habilidade dobra o poder de um movimento se ele for do mesmo tipo que o Pokémon usuário",
  "quando o Pokémon que possui essa habilidade for atingido por um ataque de dano crítico, seu Ataque será quadruplicado"
);

Pidgey.estados = estados(12, 45, 23, 56, 32, 67);

console.log(Zubat.estagioEvolucao);
