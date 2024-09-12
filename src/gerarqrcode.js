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

// Função para abrir o container suporte
function toggleSupport() {
    var support = document.getElementById("support");
    var content = document.getElementById("content");

    if (support.classList.contains('hidden')) {
        support.classList.remove('hidden');
        content.classList.add('hidden');
    } else {
        support.classList.add('hidden');
        content.classList.remove('hidden');
    }
}

document.getElementById('supportForm').addEventListener('submit', function(event) {
    event.preventDefault();

    fetch('/.netlify/functions/submit-form', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
        },
        body: new URLSearchParams(new FormData(event.target)).toString()
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            document.getElementById('confirmationMessage').style.display = 'block';
            document.getElementById('errorMessage').style.display = 'none';
            event.target.reset();
        } else {
            document.getElementById('confirmationMessage').style.display = 'none';
            document.getElementById('errorMessage').style.display = 'block';
        }
    })
    .catch(error => {
        document.getElementById('confirmationMessage').style.display = 'none';
        document.getElementById('errorMessage').style.display = 'block';
    });
});


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

     // Preenche automaticamente o input com o texto copiado
    var inputField = document.getElementById("inputCode"); // Adapte o ID conforme necessário
    if (inputField) {
        inputField.value = itemText;
    } else {
        console.error('Campo de input não encontrado!');
    }
    
}

function limparConteudo() {
    // Limpar os campos de entrada
    document.getElementById("inputCode").value = "";
    document.getElementById("inputQtd").value = "";
    document.getElementById("inputDesc").value = "";
}