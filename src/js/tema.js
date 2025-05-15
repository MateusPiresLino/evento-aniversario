const seletorTema = document.getElementById('seletor-tema');
const icone = document.querySelector('.icone-tema');
const texto = document.querySelector('.texto-tema');

const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

// --- Função para aplicar tema baseado em string ('claro', 'escuro', ou null)
function aplicaTema(tema) {
    if (tema === 'escuro') {
        document.body.classList.add('modo-escuro');
    } else {
        document.body.classList.remove('modo-escuro');
    }
    atualizaTextoBotao();
}

// --- Função para manter o <select> sincronizado
function sincronizaSelect(temaSalvo) {
    if (temaSalvo === 'escuro') {
        seletorTema.value = 'escuro';
    } else if (temaSalvo === 'claro') {
        seletorTema.value = 'claro';
    } else {
        seletorTema.value = 'auto';
    }
}

// --- Atualiza o texto/ícone de feedback visual
function atualizaTextoBotao() {
    if (document.body.classList.contains('modo-escuro')) {
        icone.textContent = '☀️';
        texto.textContent = 'Modo Claro';
    } else {
        icone.textContent = '🌙';
        texto.textContent = 'Modo Escuro';
    }
}

// --- 1. Ao carregar: decide o tema e sincroniza o select
const temaSalvo = localStorage.getItem('tema');
if (temaSalvo === 'escuro' || temaSalvo === 'claro') {
    aplicaTema(temaSalvo);
    sincronizaSelect(temaSalvo);
} else {
    // "Automático": segue o sistema
    const prefereEscuro = mediaQuery.matches;
    aplicaTema(prefereEscuro ? 'escuro' : 'claro');
    sincronizaSelect(null); // ou 'auto'
}

// --- 2. Ouve mudanças no select
seletorTema.addEventListener('change', function () {
    const valorSelecionado = this.value;
    if (valorSelecionado === 'auto') {
        localStorage.removeItem('tema');
        aplicaTema(mediaQuery.matches ? 'escuro' : 'claro');
    } else {
        localStorage.setItem('tema', valorSelecionado);
        aplicaTema(valorSelecionado);
    }
});

// --- 3. Ouve mudanças do sistema operacional (só se não houver preferência salva)
mediaQuery.addEventListener('change', (event) => {
    const temaSalvo = localStorage.getItem('tema');
    if (!temaSalvo) {
        aplicaTema(event.matches ? 'escuro' : 'claro');
        sincronizaSelect(null); // continua marcando "auto"
    }
});
