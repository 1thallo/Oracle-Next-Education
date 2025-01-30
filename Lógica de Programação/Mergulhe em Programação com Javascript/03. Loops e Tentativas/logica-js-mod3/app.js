alert("Boas-vindas ao jogo do número secreto!");
let numeroSecreto = 5;
console.log("Número secreto: " + numeroSecreto);
let chute;
let tentativas = 1;

// enquanto chute for diferente de numeroSecreto, pedir um novo chute
while(chute != numeroSecreto){
    chute = prompt("Digite um número de 1 a 10");

// se chute for igual a numeroSecreto, exibir mensagem de parabéns
    if(chute == numeroSecreto){
        alert(`Parabéns, você acertou o número secreto ${numeroSecreto} com ${tentativas} tentativas!`); 
    } else {
        if(chute > numeroSecreto){
            alert(`O número secreto é menor que ${chute}`);
        } else{
            alert(`O número secreto é maior que ${chute}`);
        }
        tentativas++;
    }
}