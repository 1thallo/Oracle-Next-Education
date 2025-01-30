// 1. Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".
let resposta = prompt("Qual é o dia da semana?");
console.log(`A resposta foi: ${resposta}`);

if (resposta === "Sábado" || resposta === "Domingo") {
  alert("Bom fim de semana!");
} else{
    alert("Boa semana!");
}

// 2.Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
let numeroDigitado = prompt("Digite um número");
console.log(`Número inserido pelo usuário: ${numeroDigitado}`);

if(numeroDigitado >= 0)
{
  alert(`O número ${numeroDigitado} é positivo!`);
} else
{
  alert(`O número ${numeroDigitado} é negativo!`);
}

// 3. Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".
let pontuacao = prompt("Insira a pontuação:");
console.log(`Pontuação: ${pontuacao}`);

if(pontuacao >= 100)
{
  alert(`Sua pontuação foi: ${pontuacao}!\nParabéns, você venceu!`); 
} else{
  alert(`Sua pontuação foi: ${pontuacao}.\nTente novamente para ganhar.`);
}

// 4. Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.
alert("Bem-vindo ao Banco!");
let saldoConta = prompt("Insira o saldo da sua conta:");
alert(`Valor do saldo: R$ ${saldoConta}`);

// 5. Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.
alert("Bem-vindo!");
let nomeUsuario = prompt("Insira o seu nome:");
alert(`Seja bem-vindo ${nomeUsuario}!`);



