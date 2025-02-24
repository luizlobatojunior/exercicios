// Escreva uma função que verifique se um número é primo. A função deve receber um número e retornar um booleano. Um número primo é um número que é divisível apenas por 1 e por ele mesmo. Por exemplo, 2, 3, 5, 7, 11, 13, 17, 19, 23 são números primos.

function numeroPrimo(numero) {
    if (numero === 1) {
        return false;
    }
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}

// Teste a função
console.log(numeroPrimo(2)); // true    
console.log(numeroPrimo(3)); // true
console.log(numeroPrimo(4)); // false
console.log(numeroPrimo(5)); // true
console.log(numeroPrimo(6)); // false