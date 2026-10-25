const btnCalcular = document.getElementById('btn-calcular');
const secaoResultado = document.getElementById('resultado');

const inputArea = document.getElementById('area');
const selectSol = document.getElementById('sol');
const inputPessoas = document.getElementById('pessoas');
const selectTipoAparelho = document.getElementById('tipo-aparelho');
const inputTubulacao = document.getElementById('tubulacao');

const resBtus = document.getElementById('res-btus');
const resTipoAparelho = document.getElementById('res-tipo-aparelho');
const resMaoObra = document.getElementById('res-mao-obra');
const resTubulacao = document.getElementById('res-tubulacao');
const resAdicionais = document.getElementById('res-adicionais');
const resTotal = document.getElementById('res-total');
const btnWhatsapp = document.getElementById('btn-whatsapp');

const FATOR_SOL_MANHA = 600;
const FATOR_SOL_TARDE = 800;
const BTUS_POR_PESSOA_EXTRA = 600;
const PRECO_METRO_TUBULACAO = 90;
const TELEFONE_WHATSAPP = '5565999999999';

function formatarMoeda(valor) {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor);
};

function calcularMaoDeObra(btus, tipoAparelho) {

    let precoBase = 450;

    if (btus <= 9000) {
        precoBase = 450;
    }
    else if (btus <= 12000) {
        precoBase = 550;
    }
    else if (btus <= 18000) {
        precoBase = 700;
    }
    else {
        precoBase = 900;
    }

    if (tipoAparelho === 'inverter') {
        precoBase += 80;
    }

    return precoBase;
}

function calcularBtus(area, sol, pessoas) {
    const fatorSol = sol === 'manha' ? FATOR_SOL_MANHA : FATOR_SOL_TARDE;

    const pessoasExtras = pessoas > 1 ? pessoas - 1 : 0;
    const calorPessoas = pessoasExtras * BTUS_POR_PESSOA_EXTRA;

    const cargaBruta = (area * fatorSol) + calorPessoas;

    if (cargaBruta <= 9000) {
        return 9000;
    }
    else if (cargaBruta <= 12000) {
        return 12000;
    }
    else if (cargaBruta <= 18000) {
        return 18000;
    }
    else if (cargaBruta <= 24000) {
        return 24000;
    }
    else {
        return 30000;
    }
}

function calcularAdicionais() {
    const checkboxes = document.querySelectorAll('.campo-opcionais input[type="checkbox"]:checked');
    let totalAdicionais = 0;

    checkboxes.forEach(function(item) {
        totalAdicionais += Number(item.value);
    });

    return totalAdicionais;
}

function processarOrcamento() {
    const area = parseFloat(inputArea.value);
    if (isNaN(area) || area <= 0) {
        alert ('Por favor, informe uma área válida em m².');
        inputArea.focus();
        return;
    }

    const sol = selectSol.value;
    const pessoas = parseInt (inputPessoas.value, 10) || 1;
    const tipoAparelho = selectTipoAparelho.value;
    const metrosTubulacao = parseFloat(inputTubulacao.value) || 0;
    const btusRecomendados = calcularBtus(area, sol, pessoas);
    const valorMaoObra = calcularMaoDeObra(btusRecomendados, tipoAparelho);
    const valorTubulacao = metrosTubulacao * PRECO_METRO_TUBULACAO;
    const valorAdicionais = calcularAdicionais ();
    const valorTotal = valorMaoObra + valorTubulacao + valorAdicionais;
    resBtus.textContent = btusRecomendados.toLocaleString('pt-BR');
    resTipoAparelho.textContent = tipoAparelho === 'inverter' ? 'Tecnologia sugerida: Split Hi-Wall Inverter' : 'Tecnologia sugerida: Split Convencional';
    resMaoObra.textContent = formatarMoeda(valorMaoObra);
    resTubulacao.textContent = formatarMoeda(valorTubulacao);
    resAdicionais.textContent = formatarMoeda(valorAdicionais);
    resTotal.textContent = formatarMoeda(valorTotal);

    secaoResultado.classList.remove('oculto');

    const mensagem = `Olá! Gostaria de agendar uma visita/orçamento:
    - Carga Térmica: ${btusRecomendados.toLocaleString('pt-BR')} BTUs
    - Tecnologia: ${tipoAparelho === 'inverter' ? 'Inverter' : 'Convencional'}
    - Metragem extra de tubulação: ${metrosTubulacao}m
    - Total estimado: ${formatarMoeda(valorTotal)}`;

    const mensagemCodificada = encodeURIComponent(mensagem);
    btnWhatsapp.href = `https://wa.me/${TELEFONE_WHATSAPP}?text=${mensagemCodificada}`;

    secaoResultado.scrollIntoView({ behavior: 'smooth' });
}

btnCalcular.addEventListener('click', processarOrcamento);