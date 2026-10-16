// Função 1: mostrar mensagem
function mostrarMensagem() {
    alert("Olá aluno!");
}

// Função 2: trocar cor do fundo
function trocarCor() {
    document.body.style.backgroundColor = "lightblue";
}

// Função 3: mostrar nome digitado
function mostrarNome() {
    let nome = document.getElementById("nome").value;
    document.getElementById("resposta").innerText = "Olá, " + nome;
}