
let cartao = document.getElementById("card");

document.querySelector("#sim").addEventListener("click", function() {
    let pergunta = document.getElementById("questao");
    let resposta = document.getElementById("resultado");

    pergunta.style.display = "none";
    resposta.style.display = "flex";
});

document.querySelector("#nao").addEventListener("mouseover", function() {
    let largura = window.innerWidth - 50;
    let altura = window.innerHeight - 50;

    this.style.position = "absolute";
    this.style.left = Math.random() * largura + "px";
    this.style.top = Math.random() * altura + "px";
});

document.getElementById("reiniciar").addEventListener("click", function() {
    location.reload(); // Recarrega a página para reiniciar a enquete
});