// Dados do site: nutricionista, ingredientes e receitas.
// Para adicionar uma receita, copie um bloco de RECEITAS e altere os campos.

// Personalize aqui: nome da nutricionista que orienta o conteúdo (deixe vazio para texto genérico).
const NUTRICIONISTA = "";

// Ingredientes que o usuário pode marcar
const INGREDIENTES = [
  { id: "casca-banana", nome: "Casca de banana" },
  { id: "banana-madura", nome: "Banana madura" },
  { id: "talos", nome: "Talos de brócolis ou couve-flor" },
  { id: "arroz", nome: "Arroz sobrado" },
  { id: "pao", nome: "Pão amanhecido" },
  { id: "casca-batata", nome: "Casca de batata" },
  { id: "folhas", nome: "Folhas de cenoura ou beterraba" },
  { id: "casca-abacaxi", nome: "Casca de abacaxi" },
  { id: "frango", nome: "Sobra de frango" },
  { id: "aparas", nome: "Aparas de legumes" },
  { id: "ovos", nome: "Ovos" }
];

// Receitas: "usa" liga cada receita aos ingredientes acima
const RECEITAS = [
  { nome: "Bolo de casca de banana", refeicao: "cafe", tempo: 50, porcoes: 8,
    usa: ["casca-banana", "banana-madura", "ovos"],
    ingredientes: ["Cascas de 3 bananas bem lavadas", "2 ovos", "1 xícara de açúcar", "1 xícara de óleo", "2 xícaras de farinha de trigo", "1 colher (sopa) de fermento"],
    passos: ["Bata no liquidificador as cascas com os ovos, o açúcar e o óleo.", "Misture com a farinha e, por último, o fermento.", "Asse em forma untada a 180 °C por cerca de 40 minutos."],
    dica: "A casca da banana é rica em fibras. Prefira bananas sem agrotóxicos e lave bem." },
  { nome: "Farofa de talos", refeicao: "principal", tempo: 20, porcoes: 4,
    usa: ["talos"],
    ingredientes: ["Talos de 1 brócolis picados bem miúdos", "1 xícara de farinha de mandioca", "2 dentes de alho", "½ cebola", "1 colher (sopa) de azeite", "Sal a gosto"],
    passos: ["Refogue o alho e a cebola no azeite.", "Junte os talos e cozinhe por 5 minutos, mexendo.", "Acrescente a farinha, o sal e mexa até dourar levemente."],
    dica: "Os talos têm fibras e vitaminas que costumam ir para o lixo. Ótimo acompanhamento para o almoço." },
  { nome: "Bolinho assado de arroz", refeicao: "cafe", tempo: 35, porcoes: 6,
    usa: ["arroz", "ovos"],
    ingredientes: ["2 xícaras de arroz cozido", "1 ovo", "2 colheres (sopa) de farinha de trigo ou aveia", "Cheiro-verde picado", "Sal a gosto"],
    passos: ["Misture todos os ingredientes até formar uma massa moldável.", "Faça bolinhos e coloque em assadeira untada.", "Asse a 200 °C por 20 a 25 minutos, virando na metade."],
    dica: "Assado em vez de frito, fica mais leve e aproveita o arroz do dia anterior." },
  { nome: "Pudim de pão", refeicao: "cafe", tempo: 60, porcoes: 8,
    usa: ["pao", "ovos"],
    ingredientes: ["4 pães amanhecidos", "2 xícaras de leite", "3 ovos", "½ xícara de açúcar", "1 colher (chá) de canela"],
    passos: ["Deixe o pão de molho no leite por 10 minutos.", "Bata tudo no liquidificador.", "Despeje em forma untada e asse em banho-maria a 180 °C por 40 minutos."],
    dica: "Uma forma simples de aproveitar o pão que endureceu. Reduza o açúcar se preferir." },
  { nome: "Torradinhas de ervas", refeicao: "cafe", tempo: 20, porcoes: 4,
    usa: ["pao"],
    ingredientes: ["Fatias de pão amanhecido", "1 colher (sopa) de azeite", "1 dente de alho amassado", "Orégano a gosto"],
    passos: ["Misture o azeite, o alho e o orégano.", "Pincele sobre as fatias cortadas em tiras.", "Asse a 180 °C por 10 a 15 minutos até ficarem crocantes."],
    dica: "Ótimas com pastinhas e saladas, no lugar de biscoitos industrializados." },
  { nome: "Chips assados de casca de batata", refeicao: "cafe", tempo: 25, porcoes: 3,
    usa: ["casca-batata"],
    ingredientes: ["Cascas de 4 batatas bem lavadas", "1 colher (sopa) de azeite", "Sal e páprica a gosto"],
    passos: ["Seque bem as cascas.", "Misture com o azeite e os temperos.", "Asse a 200 °C por 15 minutos, mexendo na metade."],
    dica: "Um lanche crocante com muito menos gordura que o de pacote." },
  { nome: "Omelete de folhas de cenoura", refeicao: "principal", tempo: 15, porcoes: 2,
    usa: ["folhas", "ovos"],
    ingredientes: ["1 xícara de folhas de cenoura ou beterraba picadas", "3 ovos", "½ cebola", "Sal a gosto", "Fio de azeite"],
    passos: ["Refogue a cebola e as folhas por 2 minutos.", "Bata os ovos com sal e despeje na frigideira.", "Cozinhe em fogo baixo, tampado, até firmar."],
    dica: "As folhas são ricas em fibras e minerais. Escolha folhas viçosas e bem lavadas." },
  { nome: "Suco de casca de abacaxi", refeicao: "bebida", tempo: 15, porcoes: 4,
    usa: ["casca-abacaxi"],
    ingredientes: ["Cascas de 1 abacaxi bem lavadas", "1 litro de água", "Gengibre a gosto", "Adoçante natural ou açúcar a gosto"],
    passos: ["Ferva as cascas na água com o gengibre por 10 minutos.", "Coe e deixe esfriar.", "Sirva gelado, adoçando a gosto."],
    dica: "Bebida refrescante que transforma um resíduo em hidratação." },
  { nome: "Panqueca de banana madura", refeicao: "cafe", tempo: 15, porcoes: 2,
    usa: ["banana-madura", "ovos"],
    ingredientes: ["2 bananas bem maduras", "2 ovos", "4 colheres (sopa) de aveia", "Canela a gosto"],
    passos: ["Amasse as bananas e misture com os ovos, a aveia e a canela.", "Cozinhe colheradas em frigideira antiaderente.", "Vire quando dourar e sirva."],
    dica: "A banana bem madura já é naturalmente doce, dispensando açúcar na receita." },
  { nome: "Caldo de legumes caseiro", refeicao: "principal", tempo: 40, porcoes: 6,
    usa: ["aparas"],
    ingredientes: ["Aparas e cascas limpas de cenoura, cebola, alho-poró e salsão", "2 litros de água", "1 folha de louro", "Sal a gosto"],
    passos: ["Junte as aparas em uma panela com a água e o louro.", "Cozinhe em fogo baixo por 30 minutos.", "Coe e use em sopas, arroz e molhos."],
    dica: "Guarde as aparas limpas no congelador durante a semana e faça o caldo de uma vez." },
  { nome: "Arroz de forno com sobras", refeicao: "principal", tempo: 40, porcoes: 4,
    usa: ["arroz", "frango", "aparas", "ovos"],
    ingredientes: ["3 xícaras de arroz cozido", "1 xícara de frango desfiado", "1 xícara de legumes picados", "2 ovos", "Temperos a gosto"],
    passos: ["Misture o arroz, o frango, os legumes e os ovos batidos.", "Tempere e coloque em refratário untado.", "Asse a 180 °C por 25 minutos, até dourar."],
    dica: "Prato completo com carboidrato, proteína e legumes, feito só com sobras da geladeira." }
];
