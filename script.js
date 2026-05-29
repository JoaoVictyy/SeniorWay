const modal = document.getElementById("modal");
const titulo = document.getElementById("modal-titulo");
const texto = document.getElementById("modal-texto");
const fechar = document.querySelector(".fechar");

// conteúdo de cada card
const conteudos = {
    div1: {
        titulo: "Proposta de Valor",
        texto: `
        • Mobilidade gratuita para idosos<br>
        • Transporte seguro e confortável<br>
        • Mais autonomia no dia a dia<br>
        • Inclusão social e qualidade de vida
        `
    },

    div2: {
        titulo: "Segmentos de Clientes",
        texto: `
        • Idosos acima de 65 anos<br>
        • Idosos com mobilidade reduzida<br>
        • Famílias preocupadas com o bem-estar
        `
    },

    div3: {
        titulo: "Canais",
        texto: `
        • Pontos de ônibus exclusivos<br>
        • Aplicativo ou cartão digital<br>
        • Postos de atendimento<br>
        • Campanhas de sustentabilidade
        `
    },

    div4: {
        titulo: "Relacionamento com o Cliente",
        texto: `
        • Comunicação simples<br>
        • Valorização do idoso<br>
        • Informações sobre saúde e benefícios
        `
    },

    div5: {
        titulo: "Atividades-chave",
        texto: `
        • Operação da frota<br>
        • Monitoramento de rotas<br>
        • Inovação nos serviços
        `
    },

    div6: {
        titulo: "Principais Parceiros",
        texto: `
        • Prefeitura de Londrina<br>
        • Órgãos de trânsito<br>
        • Empresas de tecnologia<br>
        • Empresas de energia (ex: Copel)
        `
    },

    div7: {
        titulo: "Recursos Principais",
        texto: `
        • Ônibus adaptados<br>
        • Equipe treinada<br>
        • Sistema tecnológico<br>
        • Infraestrutura de pontos
        `
    },

    div8: {
        titulo: "Estrutura de Custos",
        texto: `
        • Energia/combustível<br>
        • Salários<br>
        • Manutenção<br>
        • Tecnologia do sistema
        `
    },

    div9: {
        titulo: "Fontes de Receita",
        texto: `
        • Verba pública<br>
        • Multas de trânsito<br>
        • Transporte público<br>
        • Parcerias sociais<br>
        • Incentivos ambientais
        `
    }
};

// clique nos cards
document.querySelectorAll(".parent > div").forEach(card => {
    card.addEventListener("click", () => {

        // pega a classe certa (evita bug)
        const id = [...card.classList].find(c => c.startsWith('div'));

        titulo.innerText = conteudos[id]?.titulo || "Info";
        texto.innerHTML = conteudos[id]?.texto || "Mais detalhes aqui.";

        modal.style.display = "flex";

        // 🔒 trava o fundo
        document.body.style.overflow = "hidden";
    });
});

// fechar modal
fechar.onclick = () => {
    modal.style.display = "none";

    // 🔓 libera o fundo
    document.body.style.overflow = "auto";
};

// clicar fora
window.onclick = (e) => {
    if (e.target === modal) {
        modal.style.display = "none";

        // 🔓 libera o fundo
        document.body.style.overflow = "auto";
    }
};


 // ===============================
// DADOS DAS LINHAS
// ===============================
const linhas = [
    {
        numero: "001",
        nome: "Centro → Hospital",
        descricao: "Ligação entre o Centro da cidade e o Hospital Municipal.",
        itinerario: [
            "Terminal Central",
            "Praça da Matriz",
            "Av. Brasil",
            "Hospital Municipal"
        ],
        horarios: [
            "05:30", "05:50", "06:10", "06:30", "06:50",
            "07:10", "07:30", "07:50", "08:10", "08:30",
            "08:50", "09:10", "09:30", "09:50", "10:10",
            "10:30", "10:50", "11:10", "11:30", "11:50",
            "12:10", "12:30", "12:50", "13:10", "13:30",
            "13:50", "14:10", "14:30", "14:50", "15:10",
            "15:30", "15:50", "16:10", "16:30", "16:50",
            "17:10", "17:30", "17:50", "18:10", "18:30",
            "18:50", "19:10", "19:30", "19:50", "20:10",
            "20:30", "20:50", "21:10", "21:30", "22:00"
        ]
    },

    {
        numero: "002",
        nome: "Centro → Parque",
        descricao: "Atende áreas de lazer e convivência para idosos.",
        itinerario: [
            "Terminal Central",
            "Rua das Flores",
            "Parque Municipal",
            "Centro de Convivência"
        ],
        horarios: [
            "06:00", "06:30", "07:00", "07:30", "08:00",
            "08:30", "09:00", "09:30", "10:00", "10:30",
            "11:00", "11:30", "12:00", "12:30", "13:00",
            "13:30", "14:00", "14:30", "15:00", "15:30",
            "16:00", "16:30", "17:00", "17:30", "18:00",
            "18:30", "19:00", "19:30", "20:00", "20:30"
        ]
    },

    {
        numero: "003",
        nome: "Bairro → Clínica",
        descricao: "Transporte para consultas, exames e tratamentos.",
        itinerario: [
            "Bairro Esperança",
            "Av. Principal",
            "Laboratório Central",
            "Clínica SeniorWay"
        ],
        horarios: [
            "05:45", "06:15", "06:45", "07:15", "07:45",
            "08:15", "08:45", "09:15", "09:45", "10:15",
            "10:45", "11:15", "11:45", "12:15", "12:45",
            "13:15", "13:45", "14:15", "14:45", "15:15",
            "15:45", "16:15", "16:45", "17:15", "17:45",
            "18:15", "18:45", "19:15", "19:45", "20:15"
        ]
    },

    {
        numero: "004",
        nome: "Centro → Farmácia Popular",
        descricao: "Facilita o acesso a medicamentos e serviços farmacêuticos.",
        itinerario: [
            "Terminal Central",
            "Av. Paraná",
            "Farmácia Popular"
        ],
        horarios: [
            "06:20", "06:50", "07:20", "07:50", "08:20",
            "08:50", "09:20", "09:50", "10:20", "10:50",
            "11:20", "11:50", "12:20", "12:50", "13:20",
            "13:50", "14:20", "14:50", "15:20", "15:50",
            "16:20", "16:50", "17:20", "17:50", "18:20"
        ]
    },

    {
        numero: "005",
        nome: "Centro → Shopping",
        descricao: "Linha para compras, lazer e convivência.",
        itinerario: [
            "Terminal Central",
            "Av. Higienópolis",
            "Shopping Boulevard"
        ],
        horarios: [
            "07:00", "07:40", "08:20", "09:00", "09:40",
            "10:20", "11:00", "11:40", "12:20", "13:00",
            "13:40", "14:20", "15:00", "15:40", "16:20",
            "17:00", "17:40", "18:20", "19:00"
        ]
    },

    {
        numero: "006",
        nome: "Centro → INSS",
        descricao: "Atendimento para aposentadorias e benefícios.",
        itinerario: [
            "Terminal Central",
            "Rua Sergipe",
            "Agência do INSS"
        ],
        horarios: [
            "06:30", "07:00", "07:30", "08:00", "08:30",
            "09:00", "09:30", "10:00", "10:30", "11:00",
            "11:30", "12:00", "12:30", "13:00", "13:30",
            "14:00", "14:30", "15:00", "15:30", "16:00"
        ]
    },

    {
        numero: "007",
        nome: "Centro → UBS",
        descricao: "Linha para Unidades Básicas de Saúde.",
        itinerario: [
            "Terminal Central",
            "Av. São João",
            "UBS Central"
        ],
        horarios: [
            "05:40", "06:10", "06:40", "07:10", "07:40",
            "08:10", "08:40", "09:10", "09:40", "10:10",
            "10:40", "11:10", "11:40", "12:10", "12:40",
            "13:10", "13:40", "14:10", "14:40", "15:10",
            "15:40", "16:10", "16:40", "17:10", "17:40"
        ]
    },

    {
        numero: "008",
        nome: "Centro → Centro de Convivência",
        descricao: "Atende atividades sociais e recreativas.",
        itinerario: [
            "Terminal Central",
            "Praça Rocha Pombo",
            "Centro de Convivência do Idoso"
        ],
        horarios: [
            "08:00", "08:45", "09:30", "10:15", "11:00",
            "11:45", "12:30", "13:15", "14:00", "14:45",
            "15:30", "16:15", "17:00", "17:45"
        ]
    },

    {
        numero: "009",
        nome: "Centro → Laboratório",
        descricao: "Transporte para exames laboratoriais.",
        itinerario: [
            "Terminal Central",
            "Av. JK",
            "Laboratório Municipal"
        ],
        horarios: [
            "05:50", "06:20", "06:50", "07:20", "07:50",
            "08:20", "08:50", "09:20", "09:50", "10:20",
            "10:50", "11:20", "11:50", "12:20", "12:50"
        ]
    },

    {
        numero: "010",
        nome: "Centro → Rodoviária",
        descricao: "Conexão com viagens intermunicipais.",
        itinerario: [
            "Terminal Central",
            "Av. Leste-Oeste",
            "Rodoviária"
        ],
        horarios: [
            "06:00", "06:40", "07:20", "08:00", "08:40",
            "09:20", "10:00", "10:40", "11:20", "12:00",
            "12:40", "13:20", "14:00", "14:40", "15:20",
            "16:00", "16:40", "17:20", "18:00", "18:40"
        ]
    }

    ,
{
    numero: "011",
    nome: "Centro → Catedral",
    descricao: "Transporte para atividades religiosas.",
    itinerario: ["Terminal Central", "Praça da Matriz", "Catedral"],
    horarios: ["06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00"]
},
{
    numero: "012",
    nome: "Centro → Mercado Municipal",
    descricao: "Linha para compras e alimentação.",
    itinerario: ["Terminal Central", "Rua Bahia", "Mercado Municipal"],
    horarios: ["06:30", "07:15", "08:00", "08:45", "09:30", "10:15", "11:00", "11:45", "12:30"]
},
{
    numero: "013",
    nome: "Centro → Praça dos Idosos",
    descricao: "Acesso a área de lazer e descanso.",
    itinerario: ["Terminal Central", "Av. Santos Dumont", "Praça dos Idosos"],
    horarios: ["07:00", "08:00", "09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00"]
},
{
    numero: "014",
    nome: "Centro → Hospital do Coração",
    descricao: "Atendimento especializado em cardiologia.",
    itinerario: ["Terminal Central", "Av. Bandeirantes", "Hospital do Coração"],
    horarios: ["05:40", "06:20", "07:00", "07:40", "08:20", "09:00", "09:40", "10:20"]
},
{
    numero: "015",
    nome: "Centro → Clínica Odontológica",
    descricao: "Consultas e tratamentos odontológicos.",
    itinerario: ["Terminal Central", "Rua Pernambuco", "Clínica Odontológica"],
    horarios: ["06:10", "06:50", "07:30", "08:10", "08:50", "09:30", "10:10", "10:50"]
},
{
    numero: "016",
    nome: "Centro → Horto Florestal",
    descricao: "Passeios e atividades ao ar livre.",
    itinerario: ["Terminal Central", "Av. Tiradentes", "Horto Florestal"],
    horarios: ["08:00", "09:00", "10:00", "11:00", "14:00", "15:00", "16:00"]
},
{
    numero: "017",
    nome: "Centro → SESC",
    descricao: "Atividades esportivas e culturais.",
    itinerario: ["Terminal Central", "Rua Fernando de Noronha", "SESC"],
    horarios: ["07:30", "08:15", "09:00", "09:45", "10:30", "11:15", "14:00", "14:45"]
},
{
    numero: "018",
    nome: "Centro → CAPS",
    descricao: "Atendimento em saúde mental.",
    itinerario: ["Terminal Central", "Av. Duque de Caxias", "CAPS"],
    horarios: ["06:20", "07:00", "07:40", "08:20", "09:00", "09:40", "10:20"]
},
{
    numero: "019",
    nome: "Centro → Hemocentro",
    descricao: "Atendimento e exames especializados.",
    itinerario: ["Terminal Central", "Rua Souza Naves", "Hemocentro"],
    horarios: ["06:45", "07:30", "08:15", "09:00", "09:45", "10:30", "11:15"]
},
{
    numero: "020",
    nome: "Centro → Parque Arthur Thomas",
    descricao: "Passeios e contato com a natureza.",
    itinerario: ["Terminal Central", "Av. Dez de Dezembro", "Parque Arthur Thomas"],
    horarios: ["08:00", "09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00"]
},
{
    numero: "021",
    nome: "Centro → Shopping Catuaí",
    descricao: "Linha para compras e lazer.",
    itinerario: ["Terminal Central", "PR-445", "Shopping Catuaí"],
    horarios: ["07:00", "08:00", "09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00"]
},
{
    numero: "022",
    nome: "Centro → UEL",
    descricao: "Atendimento universitário e hospitalar.",
    itinerario: ["Terminal Central", "Av. Castelo Branco", "UEL"],
    horarios: ["06:00", "06:40", "07:20", "08:00", "08:40", "09:20", "10:00"]
},
{
    numero: "023",
    nome: "Centro → Hospital Universitário",
    descricao: "Consultas e exames especializados.",
    itinerario: ["Terminal Central", "UEL", "Hospital Universitário"],
    horarios: ["05:30", "06:10", "06:50", "07:30", "08:10", "08:50", "09:30"]
},
{
    numero: "024",
    nome: "Centro → Terminal Oeste",
    descricao: "Integração com outras linhas.",
    itinerario: ["Terminal Central", "Av. Brasília", "Terminal Oeste"],
    horarios: ["06:00", "06:30", "07:00", "07:30", "08:00", "08:30", "09:00"]
},
{
    numero: "025",
    nome: "Centro → Terminal Norte",
    descricao: "Integração regional.",
    itinerario: ["Terminal Central", "Av. Saul Elkind", "Terminal Norte"],
    horarios: ["06:15", "06:45", "07:15", "07:45", "08:15", "08:45", "09:15"]
},
{
    numero: "026",
    nome: "Centro → Terminal Sul",
    descricao: "Conexão com a zona sul.",
    itinerario: ["Terminal Central", "Av. Inglaterra", "Terminal Sul"],
    horarios: ["06:20", "06:50", "07:20", "07:50", "08:20", "08:50", "09:20"]
},
{
    numero: "027",
    nome: "Centro → Lar dos Idosos",
    descricao: "Visitas e atendimento social.",
    itinerario: ["Terminal Central", "Rua Goiás", "Lar dos Idosos"],
    horarios: ["07:00", "08:00", "09:00", "10:00", "11:00", "14:00", "15:00"]
},
{
    numero: "028",
    nome: "Centro → Cartório",
    descricao: "Acesso a serviços documentais.",
    itinerario: ["Terminal Central", "Rua Sergipe", "Cartório Central"],
    horarios: ["08:00", "08:40", "09:20", "10:00", "10:40", "11:20", "12:00"]
},
{
    numero: "029",
    nome: "Centro → Banco do Brasil",
    descricao: "Atendimento bancário e previdenciário.",
    itinerario: ["Terminal Central", "Av. Paraná", "Banco do Brasil"],
    horarios: ["06:30", "07:10", "07:50", "08:30", "09:10", "09:50", "10:30"]
},
{
    numero: "030",
    nome: "Centro → Prefeitura",
    descricao: "Serviços públicos e atendimento ao cidadão.",
    itinerario: ["Terminal Central", "Rua Pernambuco", "Prefeitura Municipal"],
    horarios: ["07:00", "07:45", "08:30", "09:15", "10:00", "10:45", "11:30", "13:00"]
}
];

// ===============================
// ELEMENTOS DO HTML
// ===============================
const listaLinhas = document.getElementById("lista-linhas");
const buscaLinha = document.getElementById("busca-linha");

const modalLinha = document.getElementById("modal-linha");
const fecharLinha = document.querySelector(".fechar-linha");

const linhaTitulo = document.getElementById("linha-titulo");
const linhaDescricao = document.getElementById("linha-descricao");
const linhaItinerario = document.getElementById("linha-itinerario");
const linhaHorarios = document.getElementById("linha-horarios");

// ===============================
// RENDERIZA AS LINHAS
// ===============================
function renderizarLinhas(filtro = "") {
    listaLinhas.innerHTML = "";

    const resultado = linhas.filter(linha =>
        linha.numero.toLowerCase().includes(filtro.toLowerCase()) ||
        linha.nome.toLowerCase().includes(filtro.toLowerCase())
    );

    resultado.forEach(linha => {
        const card = document.createElement("div");
        card.className = "linha-card";

        card.innerHTML = `
            <span class="linha-numero">${linha.numero}</span>
            <h3>${linha.nome}</h3>
            <p>${linha.descricao}</p>
        `;

        // Ao clicar no card
        card.addEventListener("click", () => {
            // Título e descrição
            linhaTitulo.textContent = `${linha.numero} - ${linha.nome}`;
            linhaDescricao.textContent = linha.descricao;

            // Itinerário
            linhaItinerario.innerHTML = "";
            linha.itinerario.forEach(parada => {
                const li = document.createElement("li");
                li.textContent = parada;
                linhaItinerario.appendChild(li);
            });

            // Horários (mostra todos separados por bolinhas)
            linhaHorarios.innerHTML = linha.horarios.join(" • ");

            // Abre modal
            modalLinha.style.display = "flex";
            document.body.style.overflow = "hidden";
        });

        listaLinhas.appendChild(card);
    });
}

// ===============================
// BUSCA EM TEMPO REAL
// ===============================
buscaLinha.addEventListener("input", () => {
    renderizarLinhas(buscaLinha.value);
});

// ===============================
// FECHAR MODAL
// ===============================
fecharLinha.onclick = () => {
    modalLinha.style.display = "none";
    document.body.style.overflow = "auto";
};

// Clicar fora do modal fecha também
window.addEventListener("click", (e) => {
    if (e.target === modalLinha) {
        modalLinha.style.display = "none";
        document.body.style.overflow = "auto";
    }
});

renderizarLinhas();