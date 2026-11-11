// ===============================
// SLIDES (ordem da apresentação)
// ===============================
const slides = [
    {
        src: "sua-mobilidade.png",
        alt: "Casal de idosos caminhando em um parque, com um andador, sorrindo um para o outro",
        titulo: "Sua mobilidade não precisa diminuir com a idade",
        texto: "A SeniorWay nasce para garantir que ir e vir continue sendo um direito em todas as fases da vida."
    },
    {
        src: "desafios.png",
        alt: "Idosa com dificuldade para subir o degrau alto de um ônibus comum",
        titulo: "Dificuldades no transporte comum",
        texto: "Degraus elevados, escadas difíceis e ambientes cheios e movimentados tornam o dia a dia um desafio para muitos idosos."
    },
    {
        src: "solucao.png",
        alt: "Motorista da SeniorWay ajudando uma idosa com andador a embarcar em uma van adaptada",
        titulo: "A solução SeniorWay",
        texto: "Veículos adaptados e equipe treinada para oferecer um transporte gratuito, seguro e acolhedor."
    },
    {
        src: "como-usar.png",
        alt: "Casal de idosos olhando o celular, com os três passos: cadastro, solicitação e embarque",
        titulo: "Como usar em 3 passos",
        texto: "Cadastro, solicitação e embarque: simples assim, para você ter autonomia em cada jornada."
    },
    {
        src: "cadastre-se.png",
        alt: "Casal de idosos sentados em um banco usando o celular, com QR Code para cadastro",
        titulo: "Cadastre-se e saiba mais",
        texto: "Aponte a câmera para o QR Code e descubra como a SeniorWay pode transformar o seu dia a dia."
    }
];

const INTERVALO = 5000; // tempo de cada slide no modo apresentação (ms)

// ===============================
// ELEMENTOS
// ===============================
const stage = document.getElementById("stage");
const trilho = document.getElementById("trilho");
const moldura = document.getElementById("moldura");
const miniaturas = document.getElementById("miniaturas");
const info = document.querySelector(".info");
const tituloEl = document.getElementById("titulo");
const descricaoEl = document.getElementById("descricao");
const atualEl = document.getElementById("atual");
const totalEl = document.getElementById("total");
const progresso = document.getElementById("progresso");
const btnAuto = document.getElementById("auto");
const btnTela = document.getElementById("tela-cheia");

let indice = 0;
let timer = null;

const pad = n => String(n).padStart(2, "0");

// ===============================
// MONTA SLIDES E MINIATURAS
// ===============================
slides.forEach((s, i) => {
    const slide = document.createElement("div");
    slide.className = "slide";
    slide.innerHTML = `<img src="${s.src}" alt="${s.alt}" draggable="false" ${i > 0 ? 'loading="lazy"' : ""}>`;
    trilho.appendChild(slide);

    const mini = document.createElement("button");
    mini.className = "mini";
    mini.setAttribute("aria-label", `Ir para: ${s.titulo}`);
    mini.innerHTML = `<img src="${s.src}" alt="">`;
    mini.addEventListener("click", () => { irPara(i); reiniciarAuto(); });
    miniaturas.appendChild(mini);
});

totalEl.textContent = pad(slides.length);

// ===============================
// NAVEGAÇÃO
// ===============================
function irPara(novo) {
    indice = (novo + slides.length) % slides.length;

    trilho.style.transform = `translateX(-${indice * 100}%)`;

    // troca de texto com fade
    info.classList.add("troca");
    setTimeout(() => {
        tituloEl.textContent = slides[indice].titulo;
        descricaoEl.textContent = slides[indice].texto;
        atualEl.textContent = pad(indice + 1);
        info.classList.remove("troca");
    }, 200);

    document.querySelectorAll(".mini").forEach((m, i) =>
        m.classList.toggle("ativa", i === indice)
    );
}

const proximo = () => irPara(indice + 1);
const anterior = () => irPara(indice - 1);

// ===============================
// MODO APRESENTAÇÃO (autoplay)
// ===============================
function animarBarra() {
    progresso.classList.remove("rodando");
    void progresso.offsetWidth; // reinicia a animação
    if (timer) progresso.classList.add("rodando");
}

function iniciarAuto() {
    pararAuto();
    timer = setInterval(() => { proximo(); animarBarra(); }, INTERVALO);
    btnAuto.textContent = "❚❚ Pausar";
    btnAuto.setAttribute("aria-pressed", "true");
    animarBarra();
}

function pararAuto() {
    clearInterval(timer);
    timer = null;
    btnAuto.textContent = "▶ Apresentar";
    btnAuto.setAttribute("aria-pressed", "false");
    progresso.classList.remove("rodando");
}

function alternarAuto() { timer ? pararAuto() : iniciarAuto(); }
function reiniciarAuto() { if (timer) iniciarAuto(); }

// ===============================
// TELA CHEIA
// ===============================
function alternarTelaCheia() {
    if (document.fullscreenElement) {
        document.exitFullscreen();
    } else if (stage.requestFullscreen) {
        stage.requestFullscreen();
    }
}

if (!document.fullscreenEnabled) btnTela.style.display = "none";

// ===============================
// EVENTOS
// ===============================
document.getElementById("proximo").onclick = () => { proximo(); reiniciarAuto(); };
document.getElementById("anterior").onclick = () => { anterior(); reiniciarAuto(); };
document.getElementById("seta-dir").onclick = () => { proximo(); reiniciarAuto(); };
document.getElementById("seta-esq").onclick = () => { anterior(); reiniciarAuto(); };
btnAuto.onclick = alternarAuto;
btnTela.onclick = alternarTelaCheia;

document.addEventListener("keydown", e => {
    if (e.key === "ArrowRight") { proximo(); reiniciarAuto(); }
    else if (e.key === "ArrowLeft") { anterior(); reiniciarAuto(); }
    else if (e.key === "f" || e.key === "F") alternarTelaCheia();
    else if (e.key === " " && document.activeElement.tagName !== "BUTTON") {
        e.preventDefault();
        alternarAuto();
    }
});

// arrastar / deslizar (celular e mouse)
let inicioX = null;

moldura.addEventListener("pointerdown", e => { inicioX = e.clientX; });

moldura.addEventListener("pointerup", e => {
    if (inicioX === null) return;
    const diff = e.clientX - inicioX;
    inicioX = null;

    if (Math.abs(diff) > 50) {
        diff < 0 ? proximo() : anterior();
        reiniciarAuto();
    }
});

moldura.addEventListener("pointercancel", () => { inicioX = null; });

// pausa o autoplay se a aba ficar em segundo plano
document.addEventListener("visibilitychange", () => {
    if (document.hidden && timer) pararAuto();
});

// início
tituloEl.textContent = slides[0].titulo;
descricaoEl.textContent = slides[0].texto;
document.querySelector(".mini").classList.add("ativa");
