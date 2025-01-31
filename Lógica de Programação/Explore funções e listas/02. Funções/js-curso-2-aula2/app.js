let numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela(tag, texto){
   let campo = document.querySelector(tag);
   campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do Número Secreto');
exibirTextoNaTela('p', 'Tente advinhar o número secreto, entre 1 e 100.');

function verificarChute(){
   let chute = parseInt(document.querySelector('input').value);
   console.log(`Chute: ${chute}\nNúmero Secreto: ${numeroSecreto}\nChute é igual ao número secreto? ${chute == numeroSecreto}`);
}

function gerarNumeroAleatorio(){
   return parseInt(Math.random() * 100 + 1);
}