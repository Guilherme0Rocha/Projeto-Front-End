// Seleção de elementos
const dropArea = document.getElementById('drop-area');
const fileInfo = document.getElementById('file-info');
const progressBar = document.getElementById('progress-bar');
const statusMessage = document.getElementById('status-message');

// Área de arrastar e soltar - eventos
dropArea.addEventListener('dragover', (event) => {
    event.preventDefault();
    dropArea.style.backgroundColor = "#f0f0f0";
});

dropArea.addEventListener('dragleave', () => {
    dropArea.style.backgroundColor = "#fafafa";
});

dropArea.addEventListener('drop', (event) => {
    event.preventDefault();
    dropArea.style.backgroundColor = "#fafafa";
    const files = event.dataTransfer.files;
    handleFiles(files);
});

// Manipulação dos arquivos
function handleFiles(files) {
    if (files.length > 0) {
        const file = files[0];
        validateFile(file);
    }
}

// Validação de arquivo
function validateFile(file) {
    const validTypes = ['image/jpeg', 'image/png', 'application/pdf'];
    const maxSize = 2 * 1024 * 1024; // 2MB

    if (!validTypes.includes(file.type)) {
        statusMessage.textContent = "Tipo de arquivo inválido. Apenas JPG, PNG e PDF são aceitos.";
        return;
    }

    if (file.size > maxSize) {
        statusMessage.textContent = "O arquivo excede o tamanho máximo de 2MB.";
        return;
    }

    statusMessage.textContent = "";
    showFileInfo(file);
    uploadFile(file);
}

// Exibe informações do arquivo
function showFileInfo(file) {
    fileInfo.textContent = `Arquivo selecionado: ${file.name} (${(file.size / 1024).toFixed(2)} KB)`;
}

// Simulação de upload de arquivo com barra de progresso
function uploadFile(file) {
    let progress = 0;
    const interval = setInterval(() => {
        progress += 10;
        progressBar.querySelector('::after').style.width = `${progress}%`;

        if (progress >= 100) {
            clearInterval(interval);
            statusMessage.textContent = "Upload concluído com sucesso!";
            progressBar.querySelector('::after').style.width = "0%"; // Reiniciar barra
        }
    }, 200);
}

let isAdmin = false;

// Função para abrir o modal com os detalhes do projeto
function abrirProjeto(titulo, descricao, duracao, integrantes, linguagem, tecnologias) {
    document.getElementById('modalTitle').innerText = titulo;
    document.getElementById('modalDescricao').innerText = descricao;
    document.getElementById('modalDuracao').innerText = duracao;
    document.getElementById('modalIntegrantes').innerText = integrantes;
    document.getElementById('modalLinguagem').innerText = linguagem;
    document.getElementById('modalTecnologias').innerText = tecnologias;
    document.getElementById('projectModal').style.display = 'block';
}

// Função para fechar o modal
function fecharModal() {
    document.getElementById('projectModal').style.display = 'none';
}

// Função de login do administrador
function adminLogin(event) {
    event.preventDefault();
    const username = document.getElementById('adminUser').value;
    const password = document.getElementById('adminPassword').value;

    // Simulando autenticação simples
    if (username === 'admin' && password === '123456') {
        isAdmin = true;
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('adminPanel').style.display = 'block';
        alert('Login bem-sucedido! Você agora é o administrador.');
    } else {
        alert('Credenciais incorretas!');
    }
}

// Função para adicionar ou remover projetos (somente admin)
function gerenciarProjetos() {
    if (isAdmin) {
        // Exibir opções de adicionar ou remover projetos
        document.getElementById('adminActions').style.display = 'block';
    }
}