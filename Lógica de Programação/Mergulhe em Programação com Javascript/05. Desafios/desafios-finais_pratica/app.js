// Desafios finais
// 1. Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.
let mensagem = "Boas-vindas";
console.log(mensagem);
// ------------------------------------------------------------------------------
// 2. Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.
let nome = "Ithallo";
console.log("Olá, " + nome + "!");
// ------------------------------------------------------------------------------
// 3. Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .
let nome1 = "Ithallo";
alert(`Olá, ${nome1}!`);
// ------------------------------------------------------------------------------
/* 4. Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. 
Em seguida, armazene a resposta em uma variável e mostre no console do navegador. */

let resposta = prompt("Qual a linguagem de programação que você mais gosta?");
console.log(`A linguagem que mais gosta é: ${resposta}`);

// ------------------------------------------------------------------------------
/* 5. Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. 
 Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". 
 Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.*/

let valor1 = 10;
let valor2 = 5;

let resultado = valor1 + valor2;

console.log("A soma de %d e %d é igual a %d.", valor1, valor2, resultado); 
// ------------------------------------------------------------------------------
/* 6. Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. 
 Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". 
 Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.*/

 let valor3 = 100;
let valor4 = 25;

let resultado2 = valor3 - valor4;

console.log(`A diferença entre ${valor3} e ${valor4} é igual a ${resultado2}.`);
// ------------------------------------------------------------------------------
/*7. Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, 
 exibindo uma mensagem apropriada no console. */

 let idade = prompt("Qual a sua idade?");

// if(idade >= 18){
//   console.log("Você é maior de idade.");
// } else{
//   console.log("Você é menor de idade.");
// }

// Solucao por Operador ternário 
idade >= 18 ? console.log("Você é maior de idade.") : console.log("Você é menor de idade.");

// ------------------------------------------------------------------------------
// 8. Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.

let numero = prompt("Insira um número:");

let mensagem2 = numero > 0 ? `O número ${numero} é positivo!` : numero < 0 ? `O número ${numero} é negativo!` : "O número é zero (neutro)!"
console.log(mensagem2);

/*
Outra solucao
 let numero = prompt("Digite um número:");

 if (numero > 0) {
     console.log("O número é positivo!");
    } else if (numero < 0) {
     console.log("O número é negativo!");
    } else {
      console.log("O número é zero (neutro)!");
  }
*/

// ------------------------------------------------------------------------------
// 9. Use um loop while para imprimir os números de 1 a 10 no console.
let contador = 1;

  while(contador <= 10){
    console.log("Número: %d", contador);
    contador++;
  }
// ------------------------------------------------------------------------------
// 10. Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.
let nota = prompt("Digite sua nota:");

 if (nota >= 7 && nota <= 10) {
     console.log("Sua nota: %d\nParabéns, você foi aprovado!", nota);
 } else if (nota < 7 && nota >= 0) {
     console.log("Sua nota: %d\nQue azar, você foi reprovado.", nota);
 } else {
      console.log("Nota inválida. Insira um valor entre 0 e 10.");
 }

/* Operador Ternário
  let nota = prompt("Insira sua nota (1 a 10)");
   nota >= 7 ? console.log("Sua nota: %d\nVocê foi aprovado!", nota) : console.log("Sua nota: %d\nVocê foi reprovado!", nota);
*/
// ------------------------------------------------------------------------------
// 11. Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.
numeroAleatorio = Math.random();
console.log("Número aleatório: %f", numeroAleatorio);
// ------------------------------------------------------------------------------
// 12. Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.
numero1a10 = parseInt(Math.random() * 10 + 1);
console.log("Número aleatório entre 1 e 10: %d", numero1a10);

// ------------------------------------------------------------------------------
// 13. Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.
numero1a1000 = parseInt(Math.random() * 1000 + 1);
console.log("Número aleatório entre 1 e 1000: %d", numero1a1000);