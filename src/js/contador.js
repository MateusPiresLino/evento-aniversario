export function atualizaContador(dataAlvo) {
    const agora = new Date();
    const tempoRestante = dataAlvo.getTime() - agora.getTime();

    // formula para milessegundos
    const diaEmMs = 24 * 60 * 60 * 1000;
    const horasEmMs = 1000 * 60 * 60;
    const minutosEmMs = 1000 * 60;
    const segundosEmMs = 1000;

    // formula para converter milessegundos em tempo legível
    const dias = Math.floor(tempoRestante / diaEmMs);
    const restoDepoisDias = tempoRestante % diaEmMs;
    const horas = Math.floor(restoDepoisDias / horasEmMs);
    const restoDepoisHoras =  restoDepoisDias % horasEmMs;
    const minutos = Math.floor(restoDepoisHoras / minutosEmMs);
    const restoDepoisMinutos = restoDepoisHoras % minutosEmMs;
    const segundos = Math.floor(restoDepoisMinutos / segundosEmMs);

    // captura dos elementos do DOM
    const diasElemento = document.getElementById('dias');
    const horasElemento = document.getElementById('horas');
    const minutosElemento = document.getElementById('minutos');
    const segundosElementos = document.getElementById('segundos');

    if (tempoRestante <= 0) {
        diasElemento.textContent = "0";
        horasElemento.textContent = "0";
        minutosElemento.textContent = "0";
        segundosElementos.textContent = "0";

        const mensagem = document.getElementById('mensagemFinal');
        mensagem.textContent = "Feliz Aniversário";
        return;
    }

    // Atualização visual
    diasElemento.textContent = String(dias).padStart(2, "0");
    horasElemento.textContent = String(horas).padStart(2, "0");
    minutosElemento.textContent = String(minutos).padStart(2, "0");
    segundosElementos.textContent = String(segundos).padStart(2,"0");
}