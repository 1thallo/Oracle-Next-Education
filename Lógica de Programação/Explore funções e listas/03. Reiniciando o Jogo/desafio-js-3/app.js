// 1.Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
function calculadoraIMC(altura, peso){
    let IMC = peso / (altura * altura);
    return IMC;
}

console.log(calculadoraIMC(1.70, 70));

// 2.Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
function fatorial(numero){
    let fatorial = 1;
    for(let i = 1; i <= numero; i++){
        fatorial *= i;
    }
    return fatorial;
}
let num = 5;
console.log(`O fatorial de ${num} é ${fatorial(5)}`);

// 3.Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.
function conversorMonetario(valorDolar){
    valorReais = valorDolar * 4.8;
    return valorReais;
  }
  
  let valorDolar = 100;
  console.log(`Valor em Dolar: $${valorDolar}\nValor em reais: R$${conversorMonetario(valorDolar).toFixed(2)}`);
  
// 4.Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
function areaPerimetro(altura, largura){
    let area = altura * largura;
    let perimetro = 2 * (altura + largura);
    return `Área: ${area}m²\nPerímetro: ${perimetro} metros`;
}

let altura = 5;
let largura = 10;
console.log(areaPerimetro(altura, largura));

// 5.Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
function areaPerimetroCirculo(raio){
    let area = 3.14 * (raio * raio);
    let perimetro = 2 * 3.14 * raio;
    return `Área: ${area}m²\nPerímetro: ${perimetro} metros`;
}

let raio = 5;
console.log(areaPerimetroCirculo(raio));

// 6.Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
/* function tabuada(numero){
    console.log(`Tabuada de ${numero}:\n`);
     let tabuada = '';
     for(let i = 1; i <= 10; i++){
         tabuada += `${numero} x ${i} = ${numero * i}\n`; //printa o texto a cada iteração
    }
    return tabuada;
 } */

// let num2 = 5;
// console.log(tabuada(num));

function mostrarTabuada(numero){
    console.log(`Tabuada de ${numero}:\n`);
    for(let i = 1; i <= 10; i++){
    let resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}`);
  }
} 
  
  let numero = 8;
  mostrarTabuada(numero);