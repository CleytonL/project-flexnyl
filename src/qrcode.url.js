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
});
