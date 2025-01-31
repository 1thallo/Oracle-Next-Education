let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
   let campo = document.querySelector(tag);
   campo.innerHTML = texto;
}

function exibirMensagemInicial(){
   exibirTextoNaTela('h1', 'Jogo do Número Secreto');
   exibirTextoNaTela('p', 'Tente advinhar o número secreto, entre 1 e 100.');
}

exibirMensagemInicial();

exibirTextoNaTela('h1', 'Jogo do Número Secreto');
exibirTextoNaTela('p', 'Tente advinhar o número secreto, entre 1 e 100.');

function verificarChute(){
   let chute = parseInt(document.querySelector('input').value);
   console.log(`Chute: ${chute}\nNúmero Secreto: ${numeroSecreto}\nChute é igual ao número secreto? ${chute == numeroSecreto}\nQuantidade de tentativas: ${tentativas}`);

   let palavraTentativas = tentativas == 1 ? 'tentativa' : 'tentativas';

   chute == numeroSecreto ? 
   (exibirTextoNaTela('h1', 'Parabéns, você acertou!'), exibirTextoNaTela('p', `Você descobriu o número secreto com ${tentativas} ${palavraTentativas}! :D`), document.getElementById('reiniciar').removeAttribute('disabled'))//numero certo**
   : chute > numeroSecreto ? // condicao
   exibirTextoNaTela('p', `O número secreto é menor que ${chute}`)
   : exibirTextoNaTela('p', `O número secreto é maior que ${chute}`)
   tentativas++;  
   limparCampo();
}

function gerarNumeroAleatorio(){
   return parseInt(Math.random() * 100 + 1);
}

function limparCampo(){
   chute = document.querySelector('input');
   chute.value = '';
}

function reiniciarJogo(){
   numeroSecreto = gerarNumeroAleatorio();
   limparCampo();
   tentativas = 1;
   exibirMensagemInicial();
   document.getElementById('reiniciar').setAttribute('disabled', 'disabled');
}