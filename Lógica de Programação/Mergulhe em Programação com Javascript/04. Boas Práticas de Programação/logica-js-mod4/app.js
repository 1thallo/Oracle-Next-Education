alert("Boas-vindas ao jogo do número secreto!");
let numeroSecreto = parseInt(Math.random() * 100 + 1);
let chute;
let tentativas = 1;

console.log("Número secreto: " + numeroSecreto);

// enquanto chute for diferente de numeroSecreto, pedir um novo chute
while(chute != numeroSecreto){
    chute = prompt("Digite um número de 1 a 100");

// se chute for igual a numeroSecreto, exibir mensagem de parabens
    if(chute == numeroSecreto){
        break;
    } else {
        if(chute > numeroSecreto){
            alert(`O número secreto é menor que ${chute}`);
        } else{
            alert(`O número secreto é maior que ${chute}`);
        }
        tentativas++;
    }
}
    let palavraTentativa = tentativas == 1 ? 'tentativa' : 'tentativas';
    let mensagem = `Parabéns, você acertou o número secreto ${numeroSecreto} em ${tentativas} ${palavraTentativa}!`;
    alert(mensagem);


    