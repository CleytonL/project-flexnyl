// Função para obter parâmetros da URL
function obterParametroUrl(name) {
    var urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Obtém os dados passados na URL
var code = obterParametroUrl('data');
var quantidade = obterParametroUrl('quantidade');
var desc = obterParametroUrl('desc');

console.log('Dados recebidos:', quantidade, desc); // Verifica se os dados estão sendo recebidos corretamente


// Função para obter e formatar a data e hora atual
function exibirDataHoraAtual() {
    var dataAtual = new Date();
    var dia = dataAtual.getDate().toString().padStart(2, '0');
    var mes = (dataAtual.getMonth() + 1).toString().padStart(2, '0'); // Mês começa em 0, por isso somamos 1
    var ano = dataAtual.getFullYear();
    var horas = dataAtual.getHours().toString().padStart(2, '0');
    var minutos = dataAtual.getMinutes().toString().padStart(2, '0');
    var segundos = dataAtual.getSeconds().toString().padStart(2, '0');

    // Formata a data e hora como "DD/MM/AAAA HH:MM:SS"
    var dataHoraFormatada = `${dia}/${mes}/${ano} ${horas}:${minutos}:${segundos}`;
    
    // Exibe a data e hora no elemento com ID 'span-data-hora'
    document.getElementById('span-data-hora').textContent = dataHoraFormatada;
}

// Gera o QR Code e exibe a data e hora após o carregamento completo do DOM
document.addEventListener("DOMContentLoaded", function() {
    var qrcode = new QRCode(document.getElementById('qrcode'), {
        text: code,
        width: 100,
        height: 100
    });

    // Exibe as informações nos spans
    document.getElementById('span-qtd').textContent = quantidade;
    document.getElementById('span-desc').textContent = desc;


    // Chama a função para exibir a data e hora atual
    exibirDataHoraAtual();
});
