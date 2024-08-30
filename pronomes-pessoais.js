const pronomes = {};
pronomes.pessoais = {};
pronomes.pessoais["caso reto"] = {};
pronomes.pessoais["caso oblíquo"] = {};
/*
Eu como arroz
> Mã̠ k'o lonza
Nós (2) bebemos água
> Mã̠s "hit" klět
Eles (4) pintam o quadro
Vã̠f rinas 
*/
// Partícula inclusiva: -ã- entre as sílabas
pronomes.pessoais["caso reto"].singular = {
  "1ª": {
    humano: "Mã̠",
    animado: "Ki",
    inanimado: "Ka",
    vegetal: "Ko",
  },
  "2ª": {
    humano: "Nã̠",
    animado: "Gi",
    inanimado: "Ga",
    vegetal: "Go",
  },
  "3ª": {
    humano: "Apmã̠",
    animado: "Ipgi",
    inanimado: "Ipga",
    vegetal: "Ipgo",
  },
};
pronomes.pessoais["caso reto"].dual = {
  "1ª": {
    humano: "Mã̠s",
    animado: "Kiˈsi",
    inanimado: "Kaˈsi", 
    vegetal: "Koˈsi",
  },
  "2ª": {
    humano: "Nã̠s",
    animado: "Gisi",
    inanimado: "Gasi",
    vegetal: "Gosi",
  },
  "3ª": {
    humano: "Apã̠s",
    animado: "Ipisi",
    inanimado: "Ipasi",
    vegetal: "Iposi",
  },
};
pronomes.pessoais["caso reto"].trial = {
  "1ª": {
    humano: "Mã̠w",
    animado: "Kiw",
    inanimado: "Kaw",
    vegetal: "Kow",
  },
  "2ª": {
    humano: "Nã̠w",
    animado: "Giw",
    inanimado: "Gaw",
    vegetal: "Gow",
  },
  "3ª": {
    humano: "Apã̠w",
    animado: "Ipiw",
    inanimado: "Ipaw",
    vegetal: "Ipow",
  },
};
pronomes.pessoais["caso reto"].quadral = {
  "1ª": {
    humano: "Fã̠mã̠",
    animado: "Fiki",
    inanimado: "Faka",
    vegetal: "Foko",
  },
  "2ª": {
    humano: "Vã̠mã̠",
    animado: "Vigi",
    inanimado: "Vaga",
    vegetal: "Vogo",
  },
  "3ª": {
    humano: "Vã̠f",
    animado: "Viv",
    inanimado: "Vav",
    vegetal: "Vov",
  },
};
pronomes.pessoais["caso reto"].plural = {
  "1ª": {
    humano: "Mã̠hta",
    animado: "Kils",
    inanimado: "Kals",
    vegetal: "Kols",
  },
  "2ª": {
    humano: "Nã̠ps",
    animado: "Gibs",
    inanimado: "Gabs",
    vegetal: "Gobs",
  },
  "3ª": {
    humano: "Anã̠s",
    animado: "Igis",
    inanimado: "Igas",
    vegetal: "Igos",
  },
};
pronomes.pessoais["caso oblíquo"].singular = {
  "1ª": {
    humano: "",
    vegetal: "",
    animado: "",
    inanimado: "",
},
  "2ª": {
    humano: "",
    vegetal: "",
    animado: "",
    inanimado: "",
  },
  "3ª": {
    humano: "",
    vegetal: "",
    animado: "",
    inanimado: "",
  },
};
pronomes.pessoais["caso oblíquo"].dual = {
  "1ª": {
    humano: "",
    vegetal: "",
    animado: "",
    inanimado: "",
  },
  "2ª": {
    humano: "",
    vegetal: "",
    animado: "",
    inanimado: "",
  },
  "3ª": {
    humano: "",
    vegetal: "",
    animado: "",
    inanimado: "",
  },
};
pronomes.pessoais["caso oblíquo"].trial = {
  "1ª": {
    humano: "",
    vegetal: "",
    animado: "",
    inanimado: "",
  },
  "2ª": {
    humano: "",
    vegetal: "",
    animado: "",
    inanimado: "",
  },
  "3ª": {
    humano: "",
    vegetal: "",
    animado: "",
    inanimado: "",
  },
};
pronomes.pessoais["caso oblíquo"].quadral = {
  "1ª": {
    humano: "",
    vegetal: "",
    animado: "",
    inanimado: "",
  },
  "2ª": {
    humano: "",
    vegetal: "",
    animado: "",
    inanimado: "",
  },
  "3ª": {
    humano: "",
    vegetal: "",
    animado: "",
    inanimado: "",
  },
};
pronomes.pessoais["caso oblíquo"].plural = {
  "1ª": {
    humano: "",
    vegetal: "",
    animado: "",
    inanimado: "",
  },
  "2ª": {
    humano: "",
    vegetal: "",
    animado: "",
    inanimado: "",
  },
  "3ª": {
    humano: "",
    vegetal: "",
    animado: "",
    inanimado: "",
  },
};
