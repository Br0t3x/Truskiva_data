const verbos = {
  "ser": "mak", "estar": "ẽh", "fazer": "okˈi", "dar": "lla", "ajudar": "tà",
  "tocar (instrumento)": "nor", "comer": "k'o", "beber": "hit", "agradecer": "bup",
  "sentar": "ˈpito", "ir": "xǒf", "voltar": "nně", "ficar": "gé", "pensar": "ˈmǒme",
  "viver": "tsõ", "morar": "wik", "urinar": "pos", "jogar": "rreˈva",
  "escrever": "nnaˈle", "falar": "ˈiga", "ler": "hraw", "prever": "jũˈka",
  "acender": "prěp", "ascender": "säge", "procurar": "beˈgě",
  "achar (após procurar)": "lokˈhé", "digitar": "ˈahtu", "escutar": "riahi", "abrir": "ˈkulo",
  "fechar": "séks", "trazer": "ˈki-lo", "levar": "llaˈva", "divertir": "potiˈna",
  "mamar": "fuˈnima", "transar": "mafeˈdé", "aprender": "ˈehva", "ensinar": "ˈpobubu",
  "resolver": "viˈruwa", "lamber": "elkˈto", "mastigar": "momã", "engolir": "ˈfonna",
  "cozinhar": "", "atrasar": "", "bater": "", "apanhar": "",
  "rotacionar": "", "cantar": "ˈjikre", "levantar (a si mesmo)": "",
  "erguer": "", "beijar": "", "morder": "", "desligar": "",
  "tremer": "", "aconselhar": "", "amarrar": "", "uivar": "",
  "gritar": "", "cochichar": "", "compor": "", "salvar (alguém)": "",
  "dirigir": "", "contar": "", "comprar": "", "vender": "",
  "pedir": "", "convencer": "", "conter": "", "amar": "",
  "deitar": "", "ver": "", "ter": "", "pôr": "",
  "rir": "", "gargalhar": "", "sorrir": "", "abocanhar": "",
  "crer": "", "soar": "", "suar": "", "sair": "", "agir": "",
  "querer": "", "poder": "", "opor": "", "usar": "", "orar": "",
  "cair": "", "doar": "", "entregar (à justiça)": "", "voar": "",
  "cear": "", "arar": "", "plantar": "", "colher": "", "criar": "",
  "responder": "", "xingar": "", "ofender": "", "desejar": "",
  "servir": "", "apor": "", "ater": "", "fiar (pagar fiado)": "",
  "unir": "", "piorar": "", "melhorar": "", "adicionar": "",
  "subtrair": "", "multiplicar": "", "dividir": "", "zoar": "",
  "ameaçar": "", "pagar": "", "parcelar": "", "piar": "",
  "roer": "", "moer": "", "doer": "", "prender (alguém)": "", "atar": "",
  "ruir": "", "coar": "", "irar": "", "ruar": "", "ligar": "",
  "miar": "", "latir": "", "reclamar": "", "mear": "", "nevar": "",
  "chover": "", "banhar": "", "cozer": "", "cortar": "",
  "acessar": "", "importar (trazer)": "", "importar (-se)": "",
  "trancar": "", "exportar": "", "consumir": "", "entreter": "",
  "aparecer": "", "inventar": "", "estremecer": "", "enfrentar": "",
  "gemer": "", "queixar": "", "igualar": "", "zumbir": "",
  "polir": "", "brilhar": "", "ferir": "", "matar": "",
  "abater": "", "sarar": "", "curar": "", "expor": "",
  "pesar": "", "saber": "", "descobrir": "", "dever": "",
  "perfurar": "", "mexer": "", "posicionar": "", "sanar": "",
  "haver": "", "temer": "", "ceder": "", "impor": "",
  "impedir": "", "fluir": "", "visar": "", "obter": "",
  "gerar": "", "tomar": "", "observar": "", "reter": "",
  "guardar": "", "ouvir": "", "selar": "", "citar": "",
  "adiar": "", "atuar": "", "esconder": "", "liderar": "",
  "ficar": "", "coçar": "", "libertar": "", "velar": "",
  "torcer (por)": "", "torcer (algo)": "", "anular": "",
  "autorizar": "", "botar": "", "calçar": "", "vestir": "",
  "despir": "", "pegar": "", "arremessar": "", "pular": "",
  "magoar": "", "enaltecer": "", "mudar": "", "reger": "",
  "andar": "", "correr": "", "fugir": "", "parar": "",
  "desfrutar": "", "fitar": "", "puxar": "", "gerir": "",
  "tirar": "", "arcar": "", "fixar": "", "sumir": "",
  "tocar (algo)": "", "lidar": "", "alcançar": "", "caber": "",
  "supor": "", "zelar": "", "nascer": "", "morrer": "",
  "arrematar": "", "atirar": "", "intervir": "", "entrar": "",
  "cansar": "", "casar": "", "namorar": "", "pisar": "",
  "limpar": "", "sujar": "", "arrumar": "", "optar": "",
  "escolher": "", "medir": "", "mentir": "", "confessar": "",
  "revelar": "", "ecoar": "", "vetar": "", "votar": "",
  "adornar": "", "virar (-se)": "", "virar (em direção a)": "",
  "assar": "", "gabar": "", "arfar": "", "obstruir": "",
  "tapar": "", "socar": "", "penetrar": "", "chocar (colidir)": "",
  "odiar": "", "gostar": "", "depor": "", "empilhar": "",
  "imaginar": "", "estranhar": "", "esfriar": "", "empinar": "",
  "rebolar": "", "descer": "", "subir": "", "derrubar": "",
  "escalar": "", "vazar": "", "encher": "", "esvaziar": "",
  "preencher": "", "expulsar": "", "despedaçar": "", "esculpir": "",
  "pintar": "", "desmamar": "", "parir": "", "engravidar": "", 
  "oferecer": "", "seduzir": "", "conectar": "", "ultrapassar": "",
  "acelerar": "", "desacelerar": "", "descontar": "", "lucrar": "",
  "valorizar": "", "alugar": "", "funcionar": "", "assistir": "",
  "acompanhar": "", "abandonar": "", "adquirir": "", "cobrar": "",
  "assustar": "", "apavorar": "", "vampirizar": "", "chupinhar": "",
  "engasgar": "", "feder": "", "cheirar": "", "sentir": "",
  "gozar": "", "aperfeiçoar": "", "encantar": "", "desmaiar": "",
  "sobreviver": "", "mergulhar": "", "nadar": "", "apaixonar": "",
  "declarar": "", "assumir": "", "alterar": "", "atribuir": "",
  "estreitar": "", "alargar": "", "condenar": "", "julgar": "",
  "enfaixar": "", "balançar": "", "balancear": "", "louvar": "",
  "cercar": "", "emparedar": "", "clonar": "", "copiar": "",
  "remover": "", "curtir": "", "desprezar": "", "tratar": "",
  "adotar": "", "assediar": "", "estuprar": "", "lavar": "",
  "publicar": "", "desmanchar": "", "extirpar": "", "impichar": "",
  "escovar": "", "ovacionar": "", "ovular": "", "eleger": "",
  "recolher": "", "expandir": "", "retrair": "", "ejacular": "",
  "expelir": "", "ingerir": "", "estarrecer": "ˈjolu", "espantar": "",
  "desviar": "", "praticar": "", "renegar": "", "regar": "",
  "criminalizar": "", "cobrir": "", "apresentar": "", "presentear": "",
  "assassinar": "", "perder": "", "ganhar": "", "conseguir": "",
  "acontecer": "", "parecer": "", "desaparecer": "", "tropeçar": "",
  "abortar (gravidez)": "", "abortar": "", "impor": "", "fofocar": "",
  "espalhar": "", "amassar": "", "desmatar": "", "cuspir": "",
  "lacrimar": "", "chorar": "", "pular (ignorar algo em uma sequência)": "",
  "vir": "", "partir": "", "estudar": "", "dizer": "",
  "dormir": "", "chegar": "", "brincar": "", "manter": "",
  "corrigir": "", "desenhar": "", "passar": "", "receber": "",
  "brigar": "", "viajar": "", "trabalhar": "", "organizar": "",
  "conhecer": "", "dançar": "", "começar": "", "pisar": "",
  "seguir": "", "encontrar": "", "precisar": "", "deixar": "",
  "colorir": "", "passear": "", "entender": "", "chamar": "",
  "olhar": "", "esquecer": "", "acordar": "", "propor": "",
  "tomar (conseguir algo)": "", "esperar": "", "aguardar": "",
  "requerer": "", "proteger": "", "segurar": "", "colocar": "",
  "conjugar": "", "desapegar": "", "fingir": "", "possuir": "",
  "tossir": "", "espirrar": "", "sangrar": "", "remoer": "",
  "moer": "", "contar (quantidade)": "", "conversar": "", "cumprir": "",
  "prometer": "", "mandar": "", "enviar": "", "continuar": "",
  "preferir": "", "masturbar": "", "acabar": "", "imprimir": "",
  "pesquisar": "", "investigar": "", "existir": "", "decidir": "",
  "sonhar": "", "caminhar": "", "falir": "", "dispor": "",
  "construir": "", "avaliar": "", "atender": "", "prover": "",
  "decapitar": "", "decepar": "", "costurar": "", "filtrar": "",
  "avançar": "", "hostilizar": "", "desfazer": "", "estragar": "",
  "defecar": "", "cagar": "", "mijar": "", "verbalizar": "",
  "alertar": "", "sinalizar": "", "gesticular": "", "gestionar": "",
  "": "", "": "", "": "", "": "",
  "": "", "": "", "": "", "": "",
  "": "", "": "", "": "", "": "",
  "": "", "": "", "": "", "": "",
  "": "", "": "", "": "", "": "",
  "": "", "": "", "": "", "": "",
  "": "", "": "", "": "", "": "",
  "": "", "": "", "": "", "": "",
  "": "", "": "", "": "", "": "",
  "": "", "": "", "": "", "": "",
  "": "", "": "", "": "", "": "",
  "": "", "": "", "": "", "": "",
  "": "", "": "", "": "", "": "",
  "": "", "": "", "": "", "": "",
  "": "", "": "", "": "", "": "",
  "": "", "": "", "": "", "": "",
  "": "", "": "", "": "", "": "",
  "": "", "": "", "": "", "": "",
  "": "", "": "", "": "", "": "",
  "": "", "": "", "": "", "": "",
  "": "", "": "", "": "", "": "",
  "": "", "": "", "": "", "": "",
  "": "", "": "", "": "", "": "",
  "": "", "": "", "": "", "": "",
  "": "", "": "", "": "", "": "",
  "": "", "": "", "": "", "": "",
  "": "", "": "", "": "", "": "",
  "": "", "": "", "": "", "": "",
  "": "", "": "", "": "", "": "",
  "": "", "": "", "": "", "": "",
  "": "", "": "", "": "", "": "",
  "": "", "": "", "": "", "": "",
  "": "", "": "", "": "", "": "",
  "": "", "": "", "": "", "": "",
  "": "", "": "", "": "", "": "",
  "": "", "": "", "": "", "": "",
  "": "", "": "", "": "", "": "",
  "": "", "": "", "": "", "": "",
  "": "", "": "", "": "", "": "",
  "": "", "": "", "": "", "": "",
  "": "", "": "", "": "", "": "",
  "": "", "": "", "": "", "": "",
  "": "", "": "", "": "", "": "",
  "": "", "": "", "": "", "": "",
  "": "", "": "", "": "", "": "",
  "": "", "": "", "": "", "": "",
  "": "", "": "", "": "", "": "",
  "": "", "": "", "": "", "": "",
  "": "", "": "", "": "", "": "",
  "": "", "": "", "": "", "": "",
  "": "", "": "", "": "", "": "",
  "": "", "": "", "": "", "": "",
  "": "", "": "", "": "", "": "",
  "": "", "": "", "": "", "": "",
  "": "", "": "", "": "", "": "",
  "": "", "": "", "": "", "": "",
  "": "", "": "", "": "", "": "",
  "": "", "": "", "": "", "": "",
  "": "", "": "", "": "", "": "",
  "": "", "": "", "": "", "": "",
  "": "", "": "", "": "", "": "",
  "": "", "": "", "": "", "": "",
  "aproveitar": "", "consertar": "", "desarrumar": "", "pentear": "",
  "mostrar": "", "acreditar": "", "visitar": "", "informar": "",
  "alçar": "", "lançar": "", "atingir": "", "acertar": "",
  "precaver": "", "deter": "", "tentar": "", "falhar": "",
  "adequar": "", "convidar": "", "aceitar": "", "recusar": "",
  "questionar": "", "duvidar": "", "aquecer": "", "repor": "",
  "perceber": "", "aferir": "", "rever": "", "perguntar": "",
  "lustrar": "", "refinar": "", "ilustrar": "", "produzir": "",
  "demolir": "", "buscar": "", "tampar": "", "sofrer": "",
  "avisar": "", "atentar": "", "atacar": "", "defender": "",
  "mandar (ordenar)": "", "ordenar": "", "ordenhar": "", "terminar": "",
  "aparentar": "", "realizar": "", "vencer": "", "permitir": "",
  "trair": "", "participar": "", "colaborar": "", "candidatar": "",
  "desistir": "", "tornar": "", "jantar": "", "almoçar": "",
  "aderir": "", "crescer": "", "encolher": "", "perdoar": "",
  "enfiar": "", "arrombar": "", "lembrar": "", "valer": "",
}

console.log(Object.keys(verbos).length);