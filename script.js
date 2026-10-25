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