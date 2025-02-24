// Escreva uma função que encontre a soma de todos os números em um array. Por exemplo, para o array [1, 2, 3, 4], a saída seria 10.

function somaNumerosArray(arr) {
    somaTotal = arr.reduce((acc, num) => acc + num, 0);
   
    return somaTotal
    
}
// Exemplos de uso
console.log(somaNumerosArray([1, 2, 3, 4])); // 10
console.log(somaNumerosArray([10, 3, 10, 4])); // 27
console.log(somaNumerosArray([1, 2, 3, 4, 5])); // 15