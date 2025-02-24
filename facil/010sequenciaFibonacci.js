// Crie um programa que exiba os primeiros 10 números de Fibonacci. A sequência de Fibonacci é uma sequência de números inteiros, começando normalmente por 0 e 1, na qual cada termo subsequente corresponde à soma dos dois anteriores. Os primeiros números de Fibonacci são: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34. */
function fibonacci(n) {
    let sequencia = [0, 1];
    for (let i = 2; i < n; i++) {
        sequencia[i] = sequencia[i - 1] + sequencia[i - 2];
    }
    return sequencia;
}

// Teste a função
let numeroDeTermos = 10;
let sequenciaFibonacci = fibonacci(numeroDeTermos);
console.log(`A sequência de Fibonacci com ${numeroDeTermos} termos é: ${sequenciaFibonacci.join(', ')}`);
