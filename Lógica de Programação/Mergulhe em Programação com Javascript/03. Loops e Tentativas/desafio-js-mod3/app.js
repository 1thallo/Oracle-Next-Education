// 1.Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
let contador = 1;

while(contador <= 10){
  console.log(`Número: ${contador}`);
  alert(`Número: ${contador}`);
  contador++;
}
// ------------------------------------------------------------------------------------------
// 2.Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.
let contador2 = 10;

while(contador2 >= 0){
  console.log(`Número: ${contador2}`);
  alert(`Número: ${contador2}`);
  contador2--;
}
// ------------------------------------------------------------------------------------------
// 3.Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.
let numeroInserido = prompt("Insira um número:");

while(numeroInserido >= 0){
 console.log(`Número: ${numeroInserido}`);
 numeroInserido--;
}
// ------------------------------------------------------------------------------------------
// 4.Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.
let numeroInserido2 = prompt("Insira um número:");
let contador3 = 0;

while(numeroInserido2 >= contador3){
 console.log(`Número: ${contador3}`);
 contador3++;
}