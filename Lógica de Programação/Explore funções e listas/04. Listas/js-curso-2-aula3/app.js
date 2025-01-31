let listaNumerosSorteados = [];
let numeroMaximoTentativas = 3;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
   let campo = document.querySelector(tag);
   campo.innerHTML = texto;
}

function gerarNumeroAleatorio(){
   let numeroSorteado = parseInt(Math.random() * numeroMaximoTentativas + 1);
   let quantidadeElementos = listaNumerosSorteados.length;

   if(quantidadeElementos == numeroMaximoTentativas){
      listaNumerosSorteados = [];
   }

   if(listaNumerosSorteados.includes(numeroSorteado)){
      return gerarNumeroAleatorio(); 
   }
      else {
         listaNumerosSorteados.push(numeroSorteado);
         console.log(listaNumerosSorteados);
         return numeroSorteado;
      }
}


function exibirMensagemInicial(){
   exibirTextoNaTela('h1', 'Jogo do Número Secreto');
   exibirTextoNaTela('p', `Tente advinhar o número secreto, entre 1 e ${numeroMaximoTentativas}.`);
}

exibirMensagemInicial();

exibirTextoNaTela('h1', 'Jogo do Número Secreto');
exibirTextoNaTela('p', `Tente advinhar o número secreto, entre 1 e ${numeroMaximoTentativas}.`);

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