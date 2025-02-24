// Crie uma função que encontre o menor valor em um array. A função deve ser chamada encontrarMenorValor e deve receber um parâmetro, array. A função deve retornar o menor valor no array.

function encontrarMenorValor(array) {
    let menorValor = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < menorValor) {
            menorValor = array[i];
        }
    }
    return menorValor;
}

// Teste a função
let array = [10, 5, 8, 3, 9];
let menorValor = encontrarMenorValor(array);
console.log(`O menor valor no array é ${menorValor}`);

