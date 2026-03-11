const TOPICS = {
  "ripeam": "RIPEAM",
  "balizamento": "Balizamento",
  "primeiros_socorros": "Primeiros Socorros",
  "regulamentos": "Regulamentos",
  "sobrevivencia": "Sobrevivência"
};

const questions = [
  // ===== RIPEAM (20 questions) =====
  {
    id: "rip01",
    topic: "ripeam",
    question: "Segundo o RIPEAM, quando duas embarcações a motor se aproximam em rumos opostos (proa a proa), qual a manobra correta?",
    options: [
      "Ambas devem guinar para boreste (direita)",
      "Ambas devem guinar para bombordo (esquerda)",
      "A embarcação que estiver a sotavento deve guinar",
      "A embarcação mais rápida deve parar",
      "A embarcação menor deve dar passagem"
    ],
    correctIndex: 0,
    explanation: "Na situação proa a proa, ambas as embarcações devem guinar para boreste (direita), de modo que cada uma passe pela bombordo da outra."
  },
  {
    id: "rip02",
    topic: "ripeam",
    question: "Quando duas embarcações a motor se cruzam, qual delas deve manobrar para dar passagem?",
    options: [
      "A que estiver mais próxima da costa",
      "A que avistar a outra pelo seu boreste",
      "A que avistar a outra pelo seu bombordo",
      "A embarcação mais lenta",
      "A embarcação maior"
    ],
    correctIndex: 1,
    explanation: "A embarcação que avistar a outra pelo seu boreste (direita) é a que deve manobrar, pois é considerada a embarcação que \"dá passagem\"."
  },
  {
    id: "rip03",
    topic: "ripeam",
    question: "Qual a cor da luz de alcançado (popa) de uma embarcação?",
    options: [
      "Verde",
      "Vermelha",
      "Amarela",
      "Azul",
      "Branca"
    ],
    correctIndex: 4,
    explanation: "A luz de alcançado (popa) é branca e visível num arco de 135°, cobrindo 67,5° para cada bordo a partir da popa."
  },
  {
    id: "rip04",
    topic: "ripeam",
    question: "A luz de boreste (estibordo) de uma embarcação é de qual cor?",
    options: [
      "Azul",
      "Verde",
      "Vermelha",
      "Branca",
      "Amarela"
    ],
    correctIndex: 1,
    explanation: "A luz de boreste (lado direito) é verde, visível num arco de 112,5° desde a proa."
  },
  {
    id: "rip05",
    topic: "ripeam",
    question: "A luz de bombordo de uma embarcação é de qual cor?",
    options: [
      "Azul",
      "Verde",
      "Branca",
      "Amarela",
      "Vermelha"
    ],
    correctIndex: 4,
    explanation: "A luz de bombordo (lado esquerdo) é vermelha, visível num arco de 112,5° desde a proa."
  },
  {
    id: "rip06",
    topic: "ripeam",
    question: "Segundo o RIPEAM, uma embarcação a motor deve dar passagem a qual tipo de embarcação?",
    options: [
      "Embarcação rebocada",
      "Embarcação a vela",
      "Nenhuma, sempre tem preferência",
      "Outra embarcação a motor maior",
      "Embarcação fundeada"
    ],
    correctIndex: 1,
    explanation: "Embarcações a motor devem dar passagem a embarcações a vela, exceto quando a vela está ultrapassando a motor."
  },
  {
    id: "rip07",
    topic: "ripeam",
    question: "Qual o significado de um apito curto em manobra?",
    options: [
      "Estou guinando para bombordo",
      "Estou guinando para boreste",
      "Estou dando máquina atrás",
      "Solicitando passagem",
      "Perigo à frente"
    ],
    correctIndex: 1,
    explanation: "Um apito curto significa \"estou alterando meu rumo para boreste (direita)\"."
  },
  {
    id: "rip08",
    topic: "ripeam",
    question: "Qual o significado de dois apitos curtos em manobra?",
    options: [
      "Perigo imediato",
      "Estou dando ré",
      "Estou guinando para bombordo",
      "Estou parando",
      "Estou guinando para boreste"
    ],
    correctIndex: 2,
    explanation: "Dois apitos curtos significam \"estou alterando meu rumo para bombordo (esquerda)\"."
  },
  {
    id: "rip09",
    topic: "ripeam",
    question: "Três apitos curtos significam:",
    options: [
      "Solicito passagem pelo canal",
      "Estou guinando para boreste",
      "Estou operando com máquinas atrás (dando ré)",
      "Estou fundeando",
      "Estou em perigo"
    ],
    correctIndex: 2,
    explanation: "Três apitos curtos significam \"estou com propulsão a ré\" (dando ré)."
  },
  {
    id: "rip10",
    topic: "ripeam",
    question: "Cinco ou mais apitos curtos e rápidos significam:",
    options: [
      "Saudação náutica",
      "Pedido de prático",
      "Solicitação de reboque",
      "Embarcação fundeando",
      "Dúvida sobre a manobra da outra embarcação (sinal de perigo)"
    ],
    correctIndex: 4,
    explanation: "Cinco ou mais apitos curtos e rápidos indicam que há dúvida sobre as intenções ou ações da outra embarcação."
  },
  {
    id: "rip11",
    topic: "ripeam",
    question: "Uma embarcação que alcança outra por setor de popa deve:",
    options: [
      "Apitar e ultrapassar por boreste",
      "Manter-se fora do caminho da embarcação alcançada",
      "Solicitar passagem à embarcação alcançada",
      "Ultrapassar obrigatoriamente por bombordo",
      "Reduzir velocidade e aguardar"
    ],
    correctIndex: 1,
    explanation: "A embarcação que alcança deve se manter fora do caminho da embarcação alcançada até ultrapassá-la completamente."
  },
  {
    id: "rip12",
    topic: "ripeam",
    question: "A embarcação \"sem governo\" exibe quais luzes à noite?",
    options: [
      "Uma luz branca intermitente",
      "Duas luzes vermelhas em linha vertical",
      "Três luzes vermelhas em linha vertical",
      "Duas luzes verdes em linha vertical",
      "Uma luz vermelha e uma verde"
    ],
    correctIndex: 1,
    explanation: "Uma embarcação sem governo exibe duas luzes vermelhas circulares em linha vertical, visíveis de todos os lados."
  },
  {
    id: "rip13",
    topic: "ripeam",
    question: "Embarcação com capacidade de manobra restrita exibe durante o dia:",
    options: [
      "Um cone com vértice para baixo",
      "Duas bolas em linha vertical",
      "Bola, losango, bola em linha vertical",
      "Dois losangos em linha vertical",
      "Uma bandeira vermelha"
    ],
    correctIndex: 2,
    explanation: "A marca diurna para embarcação com capacidade de manobra restrita é bola-losango-bola em linha vertical."
  },
  {
    id: "rip14",
    topic: "ripeam",
    question: "Em visibilidade restrita (nevoeiro), uma embarcação a motor em movimento deve emitir:",
    options: [
      "Dois apitos longos a intervalos de 1 minuto",
      "Cinco apitos curtos a cada 2 minutos",
      "Um apito curto a cada 30 segundos",
      "Nenhum sinal sonoro",
      "Um apito longo a intervalos não superiores a 2 minutos"
    ],
    correctIndex: 4,
    explanation: "Em visibilidade restrita, uma embarcação a motor com seguimento deve soar um apito longo a intervalos de no máximo 2 minutos."
  },
  {
    id: "rip15",
    topic: "ripeam",
    question: "Em águas estreitas, as embarcações devem navegar:",
    options: [
      "Tão perto quanto possível do limite exterior do canal a seu boreste",
      "Em qualquer posição, desde que em velocidade reduzida",
      "Pela margem mais profunda",
      "Pela margem de bombordo",
      "Pelo centro do canal"
    ],
    correctIndex: 0,
    explanation: "Em águas estreitas, deve-se navegar tão perto quanto seguro do limite do canal pelo lado de boreste (direita)."
  },
  {
    id: "rip16",
    topic: "ripeam",
    question: "Uma embarcação fundeada deve exibir à noite:",
    options: [
      "Luzes de navegação normais",
      "Uma luz branca circular visível de todos os lados",
      "Duas luzes vermelhas em linha vertical",
      "Uma luz vermelha e uma branca",
      "Nenhuma luz é necessária"
    ],
    correctIndex: 1,
    explanation: "Uma embarcação fundeada deve exibir uma luz branca circular (para embarcações menores de 50m, apenas uma luz; maiores, uma na proa e outra na popa)."
  },
  {
    id: "rip17",
    topic: "ripeam",
    question: "Qual embarcação NÃO tem preferência de passagem sobre as demais?",
    options: [
      "Embarcação a vela",
      "Embarcação engajada na pesca",
      "Embarcação restrita pelo calado",
      "Embarcação a motor navegando livremente",
      "Embarcação sem governo"
    ],
    correctIndex: 3,
    explanation: "A embarcação a motor navegando livremente tem a menor preferência, devendo dar passagem a todas as demais categorias."
  },
  {
    id: "rip18",
    topic: "ripeam",
    question: "A velocidade de segurança deve levar em conta:",
    options: [
      "Somente a profundidade da água",
      "Somente a presença de outras embarcações",
      "Visibilidade, tráfego, manobrabilidade da embarcação e condições de vento e mar",
      "Apenas as condições de visibilidade",
      "Apenas a velocidade máxima da embarcação"
    ],
    correctIndex: 2,
    explanation: "A velocidade de segurança considera múltiplos fatores: visibilidade, densidade de tráfego, manobrabilidade, condições de vento/mar e calado."
  },
  {
    id: "rip19",
    topic: "ripeam",
    question: "Uma embarcação engajada na pesca exibe durante o dia:",
    options: [
      "Uma bola preta",
      "Um cone com vértice para cima",
      "Dois losangos em linha vertical",
      "Uma bandeira azul e branca",
      "Dois cones com vértices unidos (forma de ampulheta)"
    ],
    correctIndex: 4,
    explanation: "A marca diurna de embarcação engajada na pesca (exceto traineira) é dois cones com vértices unidos, formando uma ampulheta."
  },
  {
    id: "rip20",
    topic: "ripeam",
    question: "O que se entende por \"embarcação à vista uma da outra\"?",
    options: [
      "Quando estão no mesmo setor de navegação",
      "Quando uma pode ser observada visualmente pela outra",
      "Quando estão no mesmo canal de comunicação VHF",
      "Quando ambas aparecem no radar",
      "Quando estão a menos de 1 milha náutica"
    ],
    correctIndex: 1,
    explanation: "Embarcações estão \"à vista\" quando uma pode ser observada visualmente pela outra, sem auxílio de equipamentos eletrônicos."
  },
  // ===== BALIZAMENTO (15 questions) =====
  {
    id: "bal01",
    topic: "balizamento",
    question: "No sistema de balizamento IALA \"B\" (utilizado no Brasil), a boia lateral de bombordo (entrando no canal) é de qual cor?",
    options: [
      "Preta",
      "Vermelha",
      "Branca",
      "Amarela",
      "Verde"
    ],
    correctIndex: 1,
    explanation: "No sistema IALA \"B\", usado no Brasil, a boia lateral de bombordo (lado esquerdo entrando) é vermelha. Lembre: \"BMW\" - Bombordo, Mar, Vermelha."
  },
  {
    id: "bal02",
    topic: "balizamento",
    question: "No sistema IALA \"B\", a boia lateral de boreste (entrando no canal) é de qual cor?",
    options: [
      "Preta",
      "Verde",
      "Amarela",
      "Vermelha",
      "Branca"
    ],
    correctIndex: 1,
    explanation: "No sistema IALA \"B\", a boia de boreste (lado direito entrando) é verde."
  },
  {
    id: "bal03",
    topic: "balizamento",
    question: "Uma boia cardinal norte indica que:",
    options: [
      "A água segura está ao norte da boia",
      "A água segura está ao sul da boia",
      "Indica entrada de porto ao norte",
      "Há perigo ao norte",
      "O canal segue para o norte"
    ],
    correctIndex: 0,
    explanation: "A boia cardinal norte indica que a água navegável (segura) está ao norte dela. Deve-se passar ao norte da boia."
  },
  {
    id: "bal04",
    topic: "balizamento",
    question: "Qual o formato da boia lateral de bombordo no sistema IALA \"B\"?",
    options: [
      "Pilar",
      "Castelo",
      "Cilíndrica (lata)",
      "Cônica",
      "Esférica"
    ],
    correctIndex: 2,
    explanation: "A boia lateral de bombordo tem formato cilíndrico (lata). A de boreste tem formato cônico."
  },
  {
    id: "bal05",
    topic: "balizamento",
    question: "Uma boia de perigo isolado possui qual coloração?",
    options: [
      "Verde com faixa amarela",
      "Branca com faixa vermelha",
      "Preta com faixas horizontais vermelhas",
      "Amarela com faixa preta",
      "Vermelha com faixas horizontais pretas"
    ],
    correctIndex: 2,
    explanation: "A boia de perigo isolado é preta com uma ou mais faixas horizontais vermelhas, com marca de tope de duas esferas pretas."
  },
  {
    id: "bal06",
    topic: "balizamento",
    question: "A marca de tope de uma boia cardinal norte é:",
    options: [
      "Duas esferas pretas",
      "Dois cones pretos com vértices para baixo",
      "Dois cones pretos com vértices para cima",
      "Um cone para cima e um para baixo",
      "Um cone para baixo e um para cima"
    ],
    correctIndex: 2,
    explanation: "A marca de tope cardinal norte é dois cones pretos com vértices para cima (apontando para o norte/cima)."
  },
  {
    id: "bal07",
    topic: "balizamento",
    question: "A boia de águas seguras (água limpa) tem qual coloração?",
    options: [
      "Faixas horizontais vermelhas e brancas",
      "Toda verde",
      "Faixas verticais vermelhas e brancas",
      "Faixas verticais pretas e amarelas",
      "Toda amarela"
    ],
    correctIndex: 2,
    explanation: "A boia de águas seguras possui faixas verticais vermelhas e brancas, indicando que há água navegável ao redor."
  },
  {
    id: "bal08",
    topic: "balizamento",
    question: "Uma boia especial (que marca áreas de exercício, cabos submarinos, etc.) é de qual cor?",
    options: [
      "Amarela",
      "Laranja",
      "Vermelha",
      "Azul",
      "Verde"
    ],
    correctIndex: 0,
    explanation: "Boias especiais são amarelas e marcam áreas específicas como zonas de exercício, cabos submarinos, fundeadouros, etc."
  },
  {
    id: "bal09",
    topic: "balizamento",
    question: "A marca de tope de uma boia cardinal sul é:",
    options: [
      "Um cone para cima e um para baixo",
      "Dois cones pretos com vértices para baixo",
      "Dois cones pretos com vértices para cima",
      "Um cone para baixo e um para cima",
      "Duas esferas pretas"
    ],
    correctIndex: 1,
    explanation: "A marca de tope cardinal sul é dois cones pretos com vértices para baixo (apontando para o sul/baixo)."
  },
  {
    id: "bal10",
    topic: "balizamento",
    question: "A boia cardinal leste possui qual esquema de cores?",
    options: [
      "Amarela acima e preta abaixo",
      "Amarela com faixa preta no meio",
      "Toda preta com topo amarelo",
      "Preta acima e amarela abaixo",
      "Preta com faixa amarela no meio"
    ],
    correctIndex: 3,
    explanation: "A boia cardinal leste é preta acima e amarela abaixo (lembra a posição dos cones da marca de tope: base com base)."
  },
  {
    id: "bal11",
    topic: "balizamento",
    question: "A boia cardinal oeste possui qual esquema de cores?",
    options: [
      "Preta acima e amarela abaixo",
      "Toda amarela com topo preto",
      "Amarela acima e preta abaixo",
      "Preta com faixa amarela horizontal",
      "Amarela com faixa preta horizontal"
    ],
    correctIndex: 2,
    explanation: "A boia cardinal oeste é amarela acima e preta abaixo (lembra os cones da marca de tope: vértice com vértice)."
  },
  {
    id: "bal12",
    topic: "balizamento",
    question: "O que indica uma boia com faixas horizontais verdes e vermelhas no sistema IALA \"B\"?",
    options: [
      "Águas seguras",
      "Canal preferido a boreste (entrando)",
      "Área de fundeio",
      "Canal preferido a bombordo (entrando)",
      "Perigo isolado"
    ],
    correctIndex: 1,
    explanation: "Faixas verdes e vermelhas com cor verde predominante (no topo) indicam canal preferido a boreste."
  },
  {
    id: "bal13",
    topic: "balizamento",
    question: "Qual a luz noturna de uma boia lateral de bombordo no sistema IALA \"B\"?",
    options: [
      "Vermelha",
      "Branca",
      "Verde",
      "Amarela",
      "Não possui luz"
    ],
    correctIndex: 0,
    explanation: "A boia lateral de bombordo emite luz vermelha à noite, correspondendo à sua cor vermelha."
  },
  {
    id: "bal14",
    topic: "balizamento",
    question: "A marca de tope da boia de perigo isolado é:",
    options: [
      "Um cone preto invertido",
      "Duas esferas pretas sobrepostas",
      "Um \"X\" amarelo",
      "Dois cones com vértices para cima",
      "Uma esfera vermelha"
    ],
    correctIndex: 1,
    explanation: "A marca de tope de perigo isolado são duas esferas pretas sobrepostas."
  },
  {
    id: "bal15",
    topic: "balizamento",
    question: "O ritmo de luz de uma boia de perigo isolado é:",
    options: [
      "Lampejo contínuo vermelho",
      "Grupos de três lampejos vermelhos",
      "Isofásica branca",
      "Grupos de dois lampejos brancos",
      "Lampejo longo branco a cada 10 segundos"
    ],
    correctIndex: 3,
    explanation: "A boia de perigo isolado tem luz branca com grupos de dois lampejos (Fl(2))."
  },
  // ===== PRIMEIROS SOCORROS (20 questions) =====
  {
    id: "ps01",
    topic: "primeiros_socorros",
    question: "Qual a frequência correta de compressões torácicas na RCP (ressuscitação cardiopulmonar) em adultos?",
    options: [
      "60 a 80 compressões por minuto",
      "50 a 60 compressões por minuto",
      "80 a 100 compressões por minuto",
      "100 a 120 compressões por minuto",
      "120 a 140 compressões por minuto"
    ],
    correctIndex: 3,
    explanation: "A frequência recomendada de compressões torácicas em adultos é de 100 a 120 por minuto, com profundidade de 5 a 6 cm."
  },
  {
    id: "ps02",
    topic: "primeiros_socorros",
    question: "A relação compressões/ventilações na RCP para adultos (um socorrista) é:",
    options: [
      "15 compressões para 2 ventilações",
      "30 compressões para 1 ventilação",
      "30 compressões para 2 ventilações",
      "20 compressões para 2 ventilações",
      "15 compressões para 1 ventilação"
    ],
    correctIndex: 2,
    explanation: "A relação padrão é 30:2 — trinta compressões torácicas seguidas de duas ventilações de resgate."
  },
  {
    id: "ps03",
    topic: "primeiros_socorros",
    question: "Em caso de hemorragia externa grave, a primeira medida a ser tomada é:",
    options: [
      "Aplicar gelo no local",
      "Fazer compressão direta no local do sangramento",
      "Fazer um torniquete imediatamente",
      "Lavar o ferimento com água",
      "Elevar o membro e aguardar"
    ],
    correctIndex: 1,
    explanation: "A compressão direta sobre o ferimento é a primeira e mais eficaz medida para controlar hemorragias externas."
  },
  {
    id: "ps04",
    topic: "primeiros_socorros",
    question: "Qual a conduta correta ao encontrar uma vítima com suspeita de fratura na coluna cervical?",
    options: [
      "Virar a vítima de bruços imediatamente",
      "Sentar a vítima para facilitar a respiração",
      "Imobilizar a coluna cervical e não movimentar a vítima",
      "Dar líquidos para hidratar a vítima",
      "Fazer massagem no pescoço"
    ],
    correctIndex: 2,
    explanation: "Em suspeita de fratura cervical, a vítima não deve ser movimentada. Deve-se imobilizar a coluna e aguardar socorro especializado."
  },
  {
    id: "ps05",
    topic: "primeiros_socorros",
    question: "Para queimaduras de primeiro grau (vermelhidão), o tratamento inicial é:",
    options: [
      "Cobrir com algodão seco",
      "Estourar as bolhas que surgirem",
      "Aplicar gelo diretamente na queimadura",
      "Resfriar com água corrente em temperatura ambiente por pelo menos 10 minutos",
      "Aplicar manteiga ou pasta de dente"
    ],
    correctIndex: 3,
    explanation: "Queimaduras de primeiro grau devem ser resfriadas com água corrente por pelo menos 10 minutos. Nunca use gelo direto, manteiga ou pasta de dente."
  },
  {
    id: "ps06",
    topic: "primeiros_socorros",
    question: "Qual o principal sinal de hipotermia?",
    options: [
      "Batimentos cardíacos acelerados e pele quente",
      "Pele avermelhada e quente",
      "Tremores incontroláveis, confusão mental e pele fria",
      "Febre alta e sudorese",
      "Dor de cabeça intensa"
    ],
    correctIndex: 2,
    explanation: "A hipotermia causa tremores, confusão mental, fala arrastada e pele fria. Em casos graves, os tremores podem parar."
  },
  {
    id: "ps07",
    topic: "primeiros_socorros",
    question: "Ao retirar uma pessoa da água com suspeita de afogamento, a primeira providência é:",
    options: [
      "Oferecer água para beber",
      "Dar tapas nas costas vigorosamente",
      "Comprimir o abdômen para expulsar a água",
      "Verificar se a vítima respira e, se não, iniciar RCP",
      "Virar de cabeça para baixo para escorrer a água"
    ],
    correctIndex: 3,
    explanation: "Deve-se verificar a respiração e, se ausente, iniciar imediatamente a RCP. Não tente \"espremer\" a água dos pulmões."
  },
  {
    id: "ps08",
    topic: "primeiros_socorros",
    question: "Uma vítima consciente engasgada deve receber:",
    options: [
      "Tapas na nuca",
      "Tentativa de retirar o objeto com os dedos às cegas",
      "Água para empurrar o objeto",
      "Compressões abdominais (manobra de Heimlich)",
      "Massagem cardíaca imediata"
    ],
    correctIndex: 3,
    explanation: "A manobra de Heimlich (compressões abdominais) é indicada para vítimas conscientes engasgadas, para deslocar o corpo estranho."
  },
  {
    id: "ps09",
    topic: "primeiros_socorros",
    question: "Em caso de fratura fechada em um membro, deve-se:",
    options: [
      "Imobilizar o membro na posição encontrada usando talas",
      "Fazer massagem no local da fratura",
      "Aplicar compressas quentes",
      "Tentar colocar o osso no lugar",
      "Movimentar o membro para verificar a extensão"
    ],
    correctIndex: 0,
    explanation: "Fraturas fechadas devem ser imobilizadas na posição encontrada com talas improvisadas, sem tentar alinhar o osso."
  },
  {
    id: "ps10",
    topic: "primeiros_socorros",
    question: "Qual a posição de recuperação indicada para uma vítima inconsciente que respira normalmente?",
    options: [
      "Posição lateral de segurança (decúbito lateral)",
      "De barriga para cima (decúbito dorsal)",
      "De bruços (decúbito ventral)",
      "Com os pés elevados acima da cabeça",
      "Sentada"
    ],
    correctIndex: 0,
    explanation: "A posição lateral de segurança mantém as vias aéreas livres e evita aspiração de vômito em vítima inconsciente que respira."
  },
  {
    id: "ps11",
    topic: "primeiros_socorros",
    question: "A insolação (intermação) é tratada inicialmente com:",
    options: [
      "Levar a vítima para local fresco e sombreado, resfriar com panos úmidos",
      "Cobrir com cobertor térmico",
      "Fazer exercícios leves para estimular a circulação",
      "Dar bebidas alcoólicas para relaxar",
      "Expor ao sol para acostumar o corpo"
    ],
    correctIndex: 0,
    explanation: "Na insolação, deve-se remover a vítima do sol, colocar em local fresco e ventilar, resfriar com panos úmidos e oferecer água se consciente."
  },
  {
    id: "ps12",
    topic: "primeiros_socorros",
    question: "Qual é a principal causa de morte em afogamentos?",
    options: [
      "Trauma na cabeça",
      "Ataque cardíaco",
      "Asfixia por entrada de água nas vias aéreas",
      "Hipotermia",
      "Desidratação"
    ],
    correctIndex: 2,
    explanation: "A principal causa de morte em afogamentos é a asfixia causada pela entrada de água nas vias aéreas, impedindo a respiração."
  },
  {
    id: "ps13",
    topic: "primeiros_socorros",
    question: "Para controlar uma hemorragia no braço, o ponto de pressão arterial deve ser:",
    options: [
      "Na artéria braquial (face interna do braço)",
      "No cotovelo",
      "No pulso",
      "Na axila",
      "No ombro"
    ],
    correctIndex: 0,
    explanation: "O ponto de pressão para hemorragias no braço é a artéria braquial, localizada na face interna do braço."
  },
  {
    id: "ps14",
    topic: "primeiros_socorros",
    question: "O colete salva-vidas deve ser vestido:",
    options: [
      "Somente após cair na água",
      "Antes de entrar na água, ainda na embarcação",
      "Apenas quando a embarcação estiver afundando",
      "Somente por quem não sabe nadar",
      "Apenas em situações de mar agitado"
    ],
    correctIndex: 1,
    explanation: "O colete salva-vidas deve ser vestido ainda na embarcação, antes de entrar na água, garantindo a flutuação desde o primeiro momento."
  },
  {
    id: "ps15",
    topic: "primeiros_socorros",
    question: "Em caso de enjoo (mal do mar), a melhor posição para o tripulante é:",
    options: [
      "Ler um livro para se distrair",
      "Ficar de costas para o sentido de navegação",
      "Ficar no convés, olhando para o horizonte, com ar fresco",
      "Comer bastante para \"forrar\" o estômago",
      "Ir para o compartimento fechado e deitar"
    ],
    correctIndex: 2,
    explanation: "Para enjoo, o melhor é ficar ao ar livre no convés, fixar o olhar no horizonte e evitar ambientes fechados."
  },
  {
    id: "ps16",
    topic: "primeiros_socorros",
    question: "Ao prestar primeiros socorros, a sequência correta de avaliação é:",
    options: [
      "Segurança da cena → Responsividade → Vias aéreas → Respiração → Circulação",
      "Respiração → Circulação → Vias aéreas → Segurança",
      "Vias aéreas → Circulação → Respiração → Segurança da cena",
      "Circulação → Respiração → Vias aéreas → Segurança",
      "Responsividade → Segurança → Circulação → Respiração"
    ],
    correctIndex: 0,
    explanation: "A sequência padrão é: primeiro garantir a segurança, depois verificar responsividade, vias aéreas, respiração e circulação."
  },
  {
    id: "ps17",
    topic: "primeiros_socorros",
    question: "Uma vítima em choque hipovolêmico (perda de sangue) apresenta:",
    options: [
      "Pele azulada apenas nas mãos",
      "Pele avermelhada e quente, pulso forte",
      "Febre alta e sudorese intensa",
      "Pele pálida e fria, pulso rápido e fraco, confusão mental",
      "Pressão arterial elevada"
    ],
    correctIndex: 3,
    explanation: "O choque hipovolêmico causa palidez, pele fria e úmida, pulso rápido e fraco (taquicardia), e confusão mental."
  },
  {
    id: "ps18",
    topic: "primeiros_socorros",
    question: "Queimaduras de segundo grau são caracterizadas por:",
    options: [
      "Descamação sem dor",
      "Pele carbonizada e sem dor",
      "Inchaço sem alteração de cor",
      "Bolhas (flictenas) e dor intensa",
      "Apenas vermelhidão sem bolhas"
    ],
    correctIndex: 3,
    explanation: "Queimaduras de segundo grau atingem a epiderme e parte da derme, causando bolhas (flictenas) e dor intensa."
  },
  {
    id: "ps19",
    topic: "primeiros_socorros",
    question: "Para uma vítima de afogamento que não respira mas tem pulso, deve-se:",
    options: [
      "Iniciar compressões torácicas imediatamente",
      "Dar tapas nas costas",
      "Virar de cabeça para baixo",
      "Apenas observar e aguardar o socorro",
      "Realizar ventilações de resgate (respiração boca a boca)"
    ],
    correctIndex: 4,
    explanation: "Se a vítima tem pulso mas não respira, realiza-se apenas ventilações de resgate, uma a cada 5-6 segundos."
  },
  {
    id: "ps20",
    topic: "primeiros_socorros",
    question: "O número de emergência da Capitania dos Portos/Salvamar é:",
    options: [
      "190",
      "193",
      "191",
      "185",
      "192"
    ],
    correctIndex: 3,
    explanation: "O número 185 é o telefone de emergência marítima da Marinha do Brasil (Salvamar)."
  },
  // ===== REGULAMENTOS (20 questions) =====
  {
    id: "reg01",
    topic: "regulamentos",
    question: "A LESTA (Lei de Segurança do Tráfego Aquaviário) é a lei nº:",
    options: [
      "8.617/1993",
      "10.233/2001",
      "7.652/1988",
      "9.966/2000",
      "9.537/1997"
    ],
    correctIndex: 4,
    explanation: "A LESTA é a Lei nº 9.537 de 11 de dezembro de 1997, que dispõe sobre a segurança do tráfego aquaviário."
  },
  {
    id: "reg02",
    topic: "regulamentos",
    question: "Qual órgão é responsável pela habilitação de amadores no Brasil?",
    options: [
      "Capitania dos Portos (Marinha do Brasil)",
      "DETRAN",
      "Receita Federal",
      "Polícia Federal",
      "IBAMA"
    ],
    correctIndex: 0,
    explanation: "A Capitania dos Portos, órgão da Marinha do Brasil, é responsável pela habilitação de amadores para conduzir embarcações de esporte e recreio."
  },
  {
    id: "reg03",
    topic: "regulamentos",
    question: "A habilitação para conduzir moto aquática (jet ski) é chamada de:",
    options: [
      "Capitão-Amador",
      "Arrais-Amador",
      "Motonauta",
      "Mestre-Amador",
      "Velejador"
    ],
    correctIndex: 2,
    explanation: "A categoria Motonauta habilita a condução de moto aquática (jet ski) nos limites da navegação interior."
  },
  {
    id: "reg04",
    topic: "regulamentos",
    question: "A idade mínima para obter a habilitação de Motonauta é:",
    options: [
      "14 anos",
      "21 anos",
      "16 anos",
      "25 anos",
      "18 anos"
    ],
    correctIndex: 4,
    explanation: "A idade mínima para obter a habilitação de Motonauta é 18 anos completos."
  },
  {
    id: "reg05",
    topic: "regulamentos",
    question: "Qual documento deve ser portado obrigatoriamente ao conduzir uma moto aquática?",
    options: [
      "Apenas a CNH (Carteira Nacional de Habilitação)",
      "Passaporte",
      "Certificado de conclusão de curso náutico",
      "Apenas o RG",
      "Carteira de Habilitação de Amador (CHA) ou Carteira de Motonauta"
    ],
    correctIndex: 4,
    explanation: "É obrigatório portar a Carteira de Habilitação de Amador (CHA) ou Carteira de Motonauta ao conduzir moto aquática."
  },
  {
    id: "reg06",
    topic: "regulamentos",
    question: "É proibido conduzir embarcação sob efeito de álcool. Qual o limite de alcoolemia?",
    options: [
      "Não há limite definido por lei",
      "0,5 g/L de sangue",
      "0,1 mg/L de ar alveolar",
      "0,3 mg/L de ar alveolar",
      "Tolerância zero (qualquer quantidade é proibida)"
    ],
    correctIndex: 4,
    explanation: "A legislação náutica brasileira adota tolerância zero para álcool na condução de embarcações."
  },
  {
    id: "reg07",
    topic: "regulamentos",
    question: "NORMAM é a sigla para:",
    options: [
      "Normas de Navegação Marítima",
      "Normas de Registro de Amadores",
      "Regulamento Nacional de Marinha",
      "Normas de Armação Mercante",
      "Normas da Autoridade Marítima"
    ],
    correctIndex: 4,
    explanation: "NORMAM significa Normas da Autoridade Marítima, que são os regulamentos emitidos pela Diretoria de Portos e Costas."
  },
  {
    id: "reg08",
    topic: "regulamentos",
    question: "A embarcação de esporte e recreio deve possuir qual documento?",
    options: [
      "CRLV náutico",
      "Nota fiscal de compra apenas",
      "Certificado do IBAMA",
      "Título de Inscrição de Embarcação (TIE)",
      "Licença da Prefeitura"
    ],
    correctIndex: 3,
    explanation: "Toda embarcação de esporte e recreio deve possuir o Título de Inscrição de Embarcação (TIE), expedido pela Capitania dos Portos."
  },
  {
    id: "reg09",
    topic: "regulamentos",
    question: "Qual a velocidade máxima permitida para motos aquáticas próximo a praias com banhistas (dentro de 200m)?",
    options: [
      "5 nós",
      "A navegação é proibida nessa área",
      "3 nós",
      "10 nós",
      "15 nós"
    ],
    correctIndex: 1,
    explanation: "É proibida a navegação de motos aquáticas a menos de 200 metros de praias com banhistas e a menos de 100 metros de outras embarcações."
  },
  {
    id: "reg10",
    topic: "regulamentos",
    question: "O uso de colete salva-vidas em moto aquática é:",
    options: [
      "Obrigatório apenas para o condutor",
      "Obrigatório para todos os ocupantes em qualquer situação",
      "Opcional em águas calmas",
      "Obrigatório apenas quando há fiscalização",
      "Obrigatório apenas para menores de idade"
    ],
    correctIndex: 1,
    explanation: "O uso de colete salva-vidas é obrigatório para todos os ocupantes de motos aquáticas, sem exceção."
  },
  {
    id: "reg11",
    topic: "regulamentos",
    question: "A moto aquática deve possuir qual dispositivo de segurança ligado ao condutor?",
    options: [
      "GPS obrigatório",
      "Âncora",
      "Buzina elétrica",
      "Rádio VHF",
      "Cordão de segurança (kill switch) preso ao pulso ou colete"
    ],
    correctIndex: 4,
    explanation: "O cordão de segurança (kill switch / botão de homem morto) deve estar preso ao condutor, desligando o motor se o condutor cair."
  },
  {
    id: "reg12",
    topic: "regulamentos",
    question: "Quantos passageiros, no máximo, uma moto aquática pode transportar?",
    options: [
      "Até 3 pessoas sempre",
      "Até 4 pessoas",
      "Não há limite definido",
      "Apenas o condutor",
      "A lotação indicada pelo fabricante na plaqueta de identificação"
    ],
    correctIndex: 4,
    explanation: "A lotação máxima é a indicada pelo fabricante na plaqueta de identificação da moto aquática, geralmente 1 a 3 pessoas."
  },
  {
    id: "reg13",
    topic: "regulamentos",
    question: "A navegação de moto aquática é permitida em qual período?",
    options: [
      "Apenas entre 8h e 18h",
      "Apenas quando há luz suficiente, a critério do condutor",
      "Do nascer ao pôr do sol (diurno apenas)",
      "A qualquer hora do dia ou da noite",
      "Até as 22h"
    ],
    correctIndex: 2,
    explanation: "A navegação de moto aquática é permitida apenas durante o período diurno, do nascer ao pôr do sol."
  },
  {
    id: "reg14",
    topic: "regulamentos",
    question: "Qual a penalidade para quem conduz embarcação sem habilitação?",
    options: [
      "Prisão imediata",
      "Suspensão da CNH",
      "Apenas advertência verbal",
      "Multa e apreensão da embarcação",
      "Apenas multa leve"
    ],
    correctIndex: 3,
    explanation: "Conduzir embarcação sem habilitação resulta em multa e apreensão da embarcação até a regularização."
  },
  {
    id: "reg15",
    topic: "regulamentos",
    question: "A inscrição da embarcação de esporte e recreio deve ser renovada a cada:",
    options: [
      "5 anos",
      "1 ano",
      "2 anos",
      "A inscrição não tem validade, mas a vistoria deve ser feita periodicamente",
      "10 anos"
    ],
    correctIndex: 3,
    explanation: "O TIE não tem prazo de validade, porém as embarcações devem passar por vistorias periódicas conforme determinação da Capitania."
  },
  {
    id: "reg16",
    topic: "regulamentos",
    question: "É obrigatório que a moto aquática possua:",
    options: [
      "Rádio VHF",
      "Espelho retrovisor",
      "Farol de navegação",
      "Âncora",
      "Bússola"
    ],
    correctIndex: 1,
    explanation: "Motos aquáticas devem possuir espelho retrovisor para visualização da área posterior durante a navegação."
  },
  {
    id: "reg17",
    topic: "regulamentos",
    question: "O Arrais-Amador pode conduzir embarcações:",
    options: [
      "Em qualquer área marítima",
      "Nos limites da navegação interior (rios, lagos, baías e canais)",
      "Em alto-mar sem restrições",
      "Apenas em piscinas e lagos",
      "Apenas em embarcações a vela"
    ],
    correctIndex: 1,
    explanation: "O Arrais-Amador está habilitado para navegação interior, que inclui rios, lagos, lagoas, baías, canais e águas abrigadas."
  },
  {
    id: "reg18",
    topic: "regulamentos",
    question: "A NORMAM que trata de embarcações de esporte e recreio é a:",
    options: [
      "NORMAM-03",
      "NORMAM-08",
      "NORMAM-05",
      "NORMAM-01",
      "NORMAM-12"
    ],
    correctIndex: 0,
    explanation: "A NORMAM-03 é a norma da Autoridade Marítima que trata de amadores, embarcações de esporte e recreio e cadastro de embarcações."
  },
  {
    id: "reg19",
    topic: "regulamentos",
    question: "É proibido rebocar pessoas com moto aquática (esqui aquático, banana boat, etc.):",
    options: [
      "Apenas em áreas demarcadas",
      "Apenas se o condutor tiver habilitação de Mestre-Amador",
      "Não, é permitido desde que com colete",
      "Sim, motos aquáticas não podem rebocar pessoas",
      "Apenas em águas calmas"
    ],
    correctIndex: 3,
    explanation: "Motos aquáticas não podem rebocar pessoas em esqui aquático, banana boat ou atividades similares."
  },
  {
    id: "reg20",
    topic: "regulamentos",
    question: "O exame para Motonauta consiste em:",
    options: [
      "Apenas prova prática",
      "Prova teórica de 40 questões",
      "Prova teórica e prova prática obrigatória",
      "Entrevista com oficial da Marinha",
      "Prova teórica de 20 questões com mínimo de 50% de acertos"
    ],
    correctIndex: 4,
    explanation: "O exame de Motonauta é apenas teórico, com 20 questões de múltipla escolha e aprovação com mínimo de 50% (10 acertos)."
  },
  // ===== SOBREVIVÊNCIA (15 questions) =====
  {
    id: "sob01",
    topic: "sobrevivencia",
    question: "Qual é o equipamento individual de flutuação obrigatório em qualquer embarcação de esporte e recreio?",
    options: [
      "Colete salva-vidas",
      "Roupa de neoprene",
      "Prancha de flutuação",
      "Boia circular",
      "Cinto de flutuação"
    ],
    correctIndex: 0,
    explanation: "O colete salva-vidas é o equipamento individual de flutuação obrigatório, devendo haver um para cada pessoa a bordo."
  },
  {
    id: "sob02",
    topic: "sobrevivencia",
    question: "O colete salva-vidas classe III é indicado para:",
    options: [
      "Navegação oceânica",
      "Uso em aviação sobre o mar",
      "Navegação interior e águas abrigadas",
      "Navegação costeira de longo curso",
      "Uso exclusivo em plataformas de petróleo"
    ],
    correctIndex: 2,
    explanation: "O colete classe III é para navegação interior e águas abrigadas. Classe I para oceânica, Classe II para costeira."
  },
  {
    id: "sob03",
    topic: "sobrevivencia",
    question: "Antes de sair para navegar, deve-se verificar:",
    options: [
      "Condições meteorológicas, nível de combustível e equipamentos de segurança",
      "Apenas a maré",
      "Apenas o nível de combustível",
      "Apenas as condições meteorológicas",
      "Apenas se há coletes a bordo"
    ],
    correctIndex: 0,
    explanation: "Antes de navegar, deve-se verificar meteorologia, combustível, equipamentos de segurança, comunicar a alguém o destino e horário previsto de retorno."
  },
  {
    id: "sob04",
    topic: "sobrevivencia",
    question: "Qual a posição recomendada para conservar calor na água (HELP)?",
    options: [
      "Nadar vigorosamente",
      "Braços cruzados no peito, pernas flexionadas junto ao corpo",
      "Braços e pernas estendidos (estrela)",
      "Mergulhar frequentemente",
      "Ficar de costas na superfície"
    ],
    correctIndex: 1,
    explanation: "A posição HELP (Heat Escape Lessening Posture) consiste em cruzar os braços no peito e flexionar as pernas, reduzindo a perda de calor."
  },
  {
    id: "sob05",
    topic: "sobrevivencia",
    question: "Quando em grupo na água aguardando resgate, a formação recomendada é:",
    options: [
      "Cada um nadar em direção diferente para cobrir mais área",
      "Nadar em fila indiana",
      "Ficar espalhados para serem mais visíveis",
      "Formar um círculo apertado (posição Huddle)",
      "Ficar submerso para proteção"
    ],
    correctIndex: 3,
    explanation: "A posição Huddle (agrupamento em círculo apertado) conserva calor do grupo e facilita o resgate por manter todos juntos."
  },
  {
    id: "sob06",
    topic: "sobrevivencia",
    question: "Para sinalizar pedido de socorro de uma embarcação, pode-se:",
    options: [
      "Ligar os faróis",
      "Ficar parado em pé no convés",
      "Levantar e abaixar lentamente os braços estendidos lateralmente",
      "Acenar com um braço",
      "Buzinar uma vez"
    ],
    correctIndex: 2,
    explanation: "Levantar e abaixar lentamente os braços estendidos lateralmente é um sinal internacional de socorro reconhecido."
  },
  {
    id: "sob07",
    topic: "sobrevivencia",
    question: "O extintor de incêndio deve ser inspecionado:",
    options: [
      "Nunca, se estiver lacrado",
      "Antes de cada saída e verificar se está dentro da validade",
      "Apenas na vistoria da Capitania",
      "Uma vez por ano",
      "Apenas quando parece vazio"
    ],
    correctIndex: 1,
    explanation: "O extintor deve ser verificado antes de cada saída (ponteiro no verde, lacre intacto, validade) e recarregado quando necessário."
  },
  {
    id: "sob08",
    topic: "sobrevivencia",
    question: "Em caso de abandono da embarcação, a ordem correta é:",
    options: [
      "Pedir socorro → pular na água → procurar colete",
      "Vestir colete → enviar pedido de socorro → pegar equipamentos de sobrevivência → abandonar a embarcação",
      "Abandonar a embarcação imediatamente → depois vestir colete",
      "Nadar para a costa → depois pedir socorro",
      "Pular na água → vestir colete → pedir socorro"
    ],
    correctIndex: 1,
    explanation: "A sequência correta é: vestir o colete, emitir pedido de socorro (MAYDAY), reunir equipamentos de sobrevivência e só então abandonar."
  },
  {
    id: "sob09",
    topic: "sobrevivencia",
    question: "O que é MAYDAY?",
    options: [
      "Código para tempestade se aproximando",
      "Sinal de que a embarcação está fundeando",
      "Chamada de rotina entre embarcações",
      "Saudação náutica internacional",
      "Chamada internacional de socorro via rádio em situação de perigo grave e iminente"
    ],
    correctIndex: 4,
    explanation: "MAYDAY é a chamada de socorro mais urgente via rádio, indicando perigo grave e iminente à embarcação ou à vida."
  },
  {
    id: "sob10",
    topic: "sobrevivencia",
    question: "Ao cair de uma moto aquática, o motor desliga automaticamente porque:",
    options: [
      "O sensor de peso detecta a ausência do condutor",
      "O GPS identifica que o condutor caiu",
      "O cordão de segurança (kill switch) é puxado do interruptor",
      "A água entra no motor e ele para",
      "O motor tem um timer automático"
    ],
    correctIndex: 2,
    explanation: "O cordão de segurança (kill switch) está preso ao condutor; ao cair, o cordão é puxado e desliga o motor imediatamente."
  },
  {
    id: "sob11",
    topic: "sobrevivencia",
    question: "A boia salva-vidas circular deve possuir:",
    options: [
      "Apito acoplado obrigatoriamente",
      "Apenas o nome da embarcação",
      "Sinalizador luminoso obrigatório",
      "Retinida (cabo) de pelo menos 18 metros e faixa refletiva",
      "Apenas a cor laranja"
    ],
    correctIndex: 3,
    explanation: "A boia salva-vidas circular deve ter retinida (cabo) de pelo menos 18 metros, faixa refletiva e o nome da embarcação."
  },
  {
    id: "sob12",
    topic: "sobrevivencia",
    question: "Em caso de incêndio a bordo, deve-se:",
    options: [
      "Ignorar se o fogo for pequeno",
      "Abrir todas as escotilhas para o ar circular",
      "Usar o extintor na base das chamas e cortar a ventilação",
      "Acelerar a embarcação para o vento apagar o fogo",
      "Jogar água em qualquer tipo de fogo"
    ],
    correctIndex: 2,
    explanation: "Deve-se usar o extintor direcionando o jato na base das chamas e, se possível, cortar fontes de ventilação e combustível."
  },
  {
    id: "sob13",
    topic: "sobrevivencia",
    question: "A desidratação em situação de sobrevivência no mar pode ser retardada:",
    options: [
      "Protegendo-se do sol, molhando roupas com água do mar e evitando esforço físico",
      "Tirando toda a roupa",
      "Bebendo pequenas quantidades de água do mar",
      "Nadando para se refrescar",
      "Ficando submerso o máximo possível"
    ],
    correctIndex: 0,
    explanation: "Para retardar a desidratação: proteja-se do sol, molhe roupas com água do mar para resfriar, evite esforço e NUNCA beba água salgada."
  },
  {
    id: "sob14",
    topic: "sobrevivencia",
    question: "O sinalizador pirotécnico (fumígeno) de cor laranja serve para:",
    options: [
      "Sinalização noturna",
      "Espantar tubarões",
      "Iluminar a área para resgate noturno",
      "Sinalização diurna de socorro (produz fumaça laranja)",
      "Aquecer os náufragos"
    ],
    correctIndex: 3,
    explanation: "O fumígeno laranja produz fumaça densa de cor laranja e é indicado para sinalização diurna de socorro."
  },
  {
    id: "sob15",
    topic: "sobrevivencia",
    question: "Qual é o canal de emergência no rádio VHF marítimo?",
    options: [
      "Canal 22",
      "Canal 1",
      "Canal 16",
      "Canal 9",
      "Canal 70"
    ],
    correctIndex: 2,
    explanation: "O Canal 16 (frequência 156,8 MHz) é o canal internacional de chamada e socorro no VHF marítimo."
  }
];
