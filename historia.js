const modal = document.getElementById("modal");
const titulo = document.getElementById("modal-titulo");
const texto = document.getElementById("modal-texto");
const imagem = document.getElementById("modal-img");
const fechar = document.querySelector(".fechar");

// Dados de cada cargo
const conteudos = {
    ceo: {
        titulo: "Jão",
        texto: `
            CEO e Fundador da SeniorWay.<br>
            Responsável pela visão estratégica da empresa, e o desenvolvimento do site.
        `,
        imagem: "./img/jao.png"
    },

    operacoes: {
        titulo: "Carlos Silva",
        texto: `
            Diretor de Operações.<br>
            Responsável pela frota e manutenção.
        `,
        imagem: "./img/op.png"
    },

    tecnologia: {
        titulo: "Ana Souza",
        texto: `
            Diretora de Tecnologia.<br>
            Responsável pelo aplicativo e sistemas.
        `,
        imagem: "./img/tech.png"
    },

    atendimento: {
        titulo: "Mariana Costa",
        texto: `
            Diretora de Atendimento.<br>
            Responsável pelo suporte ao usuário.
        `,
        imagem: "./img/atendimento.png"
    },

    motoristas: {
        titulo: "Equipe de Motoristas",
        texto: `
            Profissionais treinados para oferecer
            transporte seguro e confortável.
        `,
        imagem: "./img/motoristas.png"
    },

    manutencao: {
        titulo: "Equipe de Manutenção",
        texto: `
            Responsável pela revisão e conservação da frota.
        `,
        imagem: "./img/manutencao.png"
    },

    sistema: {
        titulo: "Equipe de Sistemas",
        texto: `
            Desenvolve e mantém o aplicativo da SeniorWay.
        `,
        imagem: "./img/sistema.png"
    },

    monitoramento: {
        titulo: "Equipe de Monitoramento",
        texto: `
            Acompanha rotas e desempenho da frota.
        `,
        imagem: "./img/monitoramento.png"
    },

    suporte: {
        titulo: "Equipe de Suporte",
        texto: `
            Presta atendimento e resolve dúvidas.
        `,
        imagem: "./img/suporte.png"
    },

    postos: {
        titulo: "Postos de Atendimento",
        texto: `
            Locais para cadastro e orientação aos usuários.
        `,
        imagem: "./img/postos.png"
    }
};

// Configuração do organograma
var chart_config = {
    chart: {
        container: "#organograma",
        connectors: {
            type: "step"
        },
        node: {
            HTMLclass: "nodeExample"
        }
    },

    nodeStructure: {
        HTMLid: "ceo",
        text: { name: "CEO" },

        children: [
            {
                HTMLid: "operacoes",
                text: { name: "Operações" },
                children: [
                    {
                        HTMLid: "motoristas",
                        text: { name: "Motoristas" }
                    },
                    {
                        HTMLid: "manutencao",
                        text: { name: "Manutenção" }
                    }
                ]
            },
            {
                HTMLid: "tecnologia",
                text: { name: "Tecnologia" },
                children: [
                    {
                        HTMLid: "sistema",
                        text: { name: "Sistema" }
                    },
                    {
                        HTMLid: "monitoramento",
                        text: { name: "Monitoramento" }
                    }
                ]
            },
            {
                HTMLid: "atendimento",
                text: { name: "Atendimento" },
                children: [
                    {
                        HTMLid: "suporte",
                        text: { name: "Suporte" }
                    },
                    {
                        HTMLid: "postos",
                        text: { name: "Postos" }
                    }
                ]
            }
        ]
    }
};

new Treant(chart_config);

setTimeout(() => {
    Object.keys(conteudos).forEach(id => {
        const elemento = document.getElementById(id);

        if (elemento) {
            elemento.style.cursor = "pointer";

            elemento.addEventListener("click", () => {
                titulo.innerText = conteudos[id].titulo;
                texto.innerHTML = conteudos[id].texto;
                imagem.src = conteudos[id].imagem;

                modal.style.display = "flex";
                document.body.style.overflow = "hidden";
            });
        }
    });
}, 1000);

// Fechar modal
fechar.onclick = () => {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
};

// Clicar fora do modal
window.onclick = (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }
};  



