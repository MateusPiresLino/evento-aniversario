import {atualizaContador} from './contador';
import './tema';

let dataAlvo = new Date('August 24, 2025 00:00:00');

// iniciar atualização 
atualizaContador(dataAlvo);

const intervalo = setInterval(() => {
    atualizaContador(dataAlvo);
}, 1000);

// Captura e escuta do input
const inputData = document.getElementById('dataEvento');
inputData.addEventListener('change', function() {
    const valorSelecionado = this.value;
    dataAlvo = new Date(`${valorSelecionado}T00:00:00`);
    atualizaContador(dataAlvo);
});