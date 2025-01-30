alert("Boas-vindas ao jogo do número secreto!");
let numeroSecreto = 5;
console.log("Número secreto: " + numeroSecreto);

let chute = prompt("Digite um número de 1 a 10");

// se chute for igual a numeroSecreto, exibir mensagem de parabéns
if(chute == numeroSecreto){
    alert(`Parabéns, você acertou o número secreto ${numeroSecreto}!`); // Template string `` - crase
} else{
    alert("Que pena, tente novamente!");
}

/*Uso do console.log
alert('Boas vindas ao jogo do número secreto');

// adicionar um console.log para verificar o valor de "chute" após a entrada do usuário
let chute = prompt('Escolha um número entre 1 e 10');
console.log('Valor do chute:', chute);

let numeroSecreto = 4;

// adicionar um console.log para verificar a comparação entre "chute" e "numeroSecreto"
console.log('Resultado da comparação:', chute == numeroSecreto);

if (chute == numeroSecreto) {
    alert('Acertou');
} else {
    // adicionar um console.log para verificar o valor de "numeroSecreto" quando o jogador erra
    console.log('Valor do número secreto:', numeroSecreto);
    alert('O número secreto era ' + numeroSecreto);
}*/