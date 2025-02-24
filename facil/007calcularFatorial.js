// Escreva um programa que calcule o fatorial de um número. O fatorial de um número n é a multiplicação de todos os números inteiros positivos de 1 a n. O fatorial de 0 é 1. A função deve ser chamada calcularFatorial e deve receber um parâmetro, numero. A função deve retornar o fatorial do número passado como parâmetro.

function calcularFatorial(numero) { 
    let fatorial = 1; // fatorial
    for (let i = 1; i <= numero; i++) { // i = 1, 2, 3, 4, 5
        fatorial *= i; // fatorial = fatorial * i;
        console.log(`${i}: ${fatorial}`);
    }
    return `resposta: ${fatorial}`;
}
// Teste da função

console.log(calcularFatorial(3)); // 6
console.log("outra chamada");
console.log(calcularFatorial(4)); // 24