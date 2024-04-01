function validarCampos() {
    var inputValue = document.getElementById('inputCode').value;
    var quantidadeValue = document.getElementById('inputQtd').value;
    var descValue = document.getElementById('inputDesc').value;

    if (inputValue === '' || quantidadeValue === '' || descValue === '') {
        alert('Por favor, preencha todos os campos.');
    } else {
        gerarQR();
    }
}

function gerarQR() {
    var inputValue = document.getElementById('inputCode').value;
    var quantidadeValue = document.getElementById('inputQtd').value;
    var descValue = document.getElementById('inputDesc').value;
    // Encaminha para a página qr.html com os dados inseridos
    window.location.href = 'qr.html?data=' + encodeURIComponent(inputValue) + '&quantidade=' + encodeURIComponent(quantidadeValue) + '&desc=' + encodeURIComponent(descValue);

}

function toggleNavbar() {
    var sidebar = document.getElementById("sidebar");
    var content = document.getElementById("content");

    sidebar.classList.toggle('active');
    content.classList.toggle('active');

    menuBtn.classList.toggle('hidden');
}

function toggleList() {
    var sidebarList = document.getElementById("sidebarList");
    if (sidebarList.style.display === "none") {
        sidebarList.style.display = "block";
    } else {
        sidebarList.style.display = "none";
    }
}

function toggleList2() {
    var sidebarList = document.getElementById("sidebarList2");
    if (sidebarList.style.display === "none") {
        sidebarList.style.display = "block";
    } else {
        sidebarList.style.display = "none";
    }
}


function copyItem(button) {
    // Obtém o valor do atributo data-text do botão
    var itemText = button.getAttribute("data-text");
    
    // Cria um elemento de texto temporário
    var tempInput = document.createElement("textarea");
    tempInput.value = itemText;
    document.body.appendChild(tempInput);
    
    // Seleciona e copia o texto dentro do elemento de texto temporário
    tempInput.select();
    document.execCommand("copy");
    
    // Remove o elemento de texto temporário
    document.body.removeChild(tempInput);
    
    // Avisa o usuário que o texto foi copiado
    alert("Item copiado: " + itemText);
}
