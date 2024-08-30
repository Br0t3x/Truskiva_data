const substantivos = {
  "pássaro": "ˈfiguh", "sol": "larˈjs", "palavra": "ˈlarjs", "frase": "proˈtre",
  "cachorro": "xirke", "gato": "llomã", "abelha": "mawe", "teclado": "lopˈtos",
  "vaca": "djeˈkà", "lua": "ˈroik", "creme": "roˈik", "cabelo": "ˈrotik",
  "faca": "jukri", "caderno": "ˈréfa", "lápis": "", "caneta": "mãˈe",
  "borracha": "", "apontador": "", "placa": "", "porta": "ˈkonu",
  "mesa": "", "tabela": "", "monitor": "", "trabalhador": "",
  "carro": "", "ônibus": "", "": "", "cheiro": "",
  "sacola": "", "espelho": "", "microfone": "", "café (semente)": "",
  "café (bebida)": "", "abacate": "", "abacaxi": "", "laranja (cor)": "",
  "laranja (fruta)": "", "roxo": "", "verde": "", "amarelo": "",
  "pé": "", "perna": "", "braço": "jikmaˈlo", "antebraço": "pajikmaˈloax",
  "criança": "", "menino": "", "menina": "", "bebê": "",
  "vento": "", "tornado": "", "terremoto": "", "chuva": "",
  "carinho": "", "afeto": "", "escola": "", "pessoa": "",
  "telefone": "", "dispositivo": "", "cozinheiro": "", "flor": "",
  "fruto": "", "copo": "", "prato": "", "óculos": "",
  "vidro": "", "xícara": "", "caneca": "", "vaso": "",
  "bolo": "", "alimento": "", "animal": "", "filhote": "",
  "onça": "", "jaguar": "", "pele": "", "dedo": "",
  "mão": "", "mãe": "", "mamão": "", "pai": "",
  "avô": "", "tio": "", "sobrinho": "", "filho": "",
  "casa": "", "apartamento": "", "prédio": "", "construção": "",
  "planta": "", "pão": "", "trigo": "", "milho": "",
  "parede": "", "caixa": "", "bloco": "", "cimento": "",
  "ameixa": "", "terra": "", "barro": "", "tijolo": "",
  "tomate": "", "maçã": "", "banana": "", "limão": "",
  "alface": "", "rúcula": "", "tampa": "", "morfema": "",
  "Brasil": "Braˈziw", "Espanha": "", "França": "", "sentido": "",
  "Itália": "", "Chile": "", "Venezuela": "", "Uruguai": "",
  "Nicarágua": "", "Nigéria": "", "Afeganistão": "", "Argentina": "",
  "Colômbia": "", "Bolívia": "", "Guiana": "", "Suriname": "",
  "Peru": "", "Paraguai": "", "Equador": "", "tolerância": "",
  "plataforma": "", "jogo": "", "cabeça": "", "harpa": "",
  "arpão": "", "violão": "", "guitarra": "", "": "",
  "lança": "", "relógio": "", "tinta": "", "pincel": "",
  "pacote": "", "pote": "", "chuveiro": "", "banheira": "",
  "pedra": "", "garfo": "", "presente": "", "sanita": "",
  "colher": "", "som": "", "divisão": "", "soma": "",
  "multiplicação": "", "substração": "", "exponenciação": "", "vírgula": "",
  "prata": "", "ouro": "", "barra": "", "ponto": "",
  "platina": "", "alumínio": "", "ferro": "", "água": "klět",
  "sal": "", "ar": "", "atmosfera": "", "pelo": "",
  "coisa": "", "canetão": "", "celular": "", "corte": "",
  "livro": "", "conto": "", "fábula": "", "figura": "",
  "imagem": "", "foto": "", "texto": "", "letra": "",
  "unidade": "", "dezena": "", "centena": "", "milhar": "",
  "lixo": "", "lixeira": "", "crime": "", "cabo": "",
  "mangueira": "", "corda": "", "cordão": "", "comida": "",
  "colar": "", "pulseira": "", "fone": "", "carregador": "",
  "tecla": "", "anel": "", "xampu": "", "condicionador": "",
  "caixão": "", "forma (de bolo)": "", "forma": "", "trato": "",
  "acordo": "", "contrato": "", "compasso": "", "coração": "",
  "fígado": "", "bile": "", "baço": "", "pênis": "",
  "pergunta": "", "resposta": "", "questionamento": "", "confronto": "",
  "bastão": "", "polegar": "", "lápide": "", "cova": "",
  "caverna": "", "lago": "", "riacho": "", "rio": "",
  "guarda-chuva": "", "fogo": "", "vapor": "", "": "",
  "arroz": "lonˈza", "": "", "": "", "": "",
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
  "zero": "", "nazismo": "", "sionismo": "", "capacitismo": "",
  "sociedade": "", "indivíduo": "", "gente": "", "um": "",
  "dois": "", "três": "", "quatro": "", "cinco": "",
  "seis": "", "sete": "", "oito": "", "nove": "",
  "corrupção": "", "dinheiro": "", "pessoal": "", "galera": "",
  "capitalismo": "", "comunismo": "", "socialismo": "", "anarquismo": "",
  "depoimento": "", "causo": "", "história": "", "estória": "",
  "igreja": "", "templo": "", "mesquita": "", "santuário": "",
  "luto": "", "morte": "", "sino": "", "catedral": "",
  "brinde": "", "vinho": "", "uva": "", "controle": "",
  "bunda": "", "óleo": "", "petróleo": "", "exploração": "",
  "rabo": "", "gelo": "", "metal": "", "madeira": "",
  "unha": "", "língua": "", "orelha": "", "tábua": "",
  "noite": "liˈmu", "dia": "ˈpětxǒ", "tarde": "", "travesseiro": "",
}

console.log(Object.keys(substantivos).length);