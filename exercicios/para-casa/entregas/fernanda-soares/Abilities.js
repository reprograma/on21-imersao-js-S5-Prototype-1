function Abilities(name, summary, effect) {
  const abilities = {
    name: name,
    summary: summary,
    effect: effect,
  };

  return abilities;
}

const ability1 = Abilities(
  "Mordida de Sangue",
  "A criatura utiliza as presas para paralisar o inimigo.",
  "A criatura ganha +5 de saúde e o inimigo perde -5."
);

const ability2 = Abilities(
  "Ataque canino",
  "A criatura utiliza as garras afiadas contra o inimigo.",
  "A criatura ganha +5 de saúde e o inimigo perde -5."
);

const ability3 = Abilities(
  "Avada Kedavra",
  "A criatura lança um feitiço no inimigo.",
  "A criatura ganha +5 de saúde e o inimigo perde -5."
);

module.exports = { ability1, ability2, ability3 };
