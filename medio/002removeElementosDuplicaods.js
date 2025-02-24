// Crie uma função que remova elementos duplicados de um array e retorne um novo array sem esses elementos. Exemplo: [1,2,3,3,4,5,5,6] => [1,2,3,4,5,6]

function removeElementosDuplicados(array) {
  return [...new Set(array)]; // Set é uma estrutura de dados que não aceita elementos duplicados
}

console.log(removeElementosDuplicados([1, 2, 3, 3, 4, 5, 5, 6])); // [1, 2, 3, 4, 5, 6]
console.log(removeElementosDuplicados([1, 2, 3, 3, 4, 5, 5, 6, 6, 6, 6, 6])); // [1, 2, 3, 4, 5, 6]

function removerDuplicados(array) {
    let resultado = [];
    for (let i = 0; i < array.length; i++) {
        if (resultado.indexOf(array[i]) === -1) { // Verifica se o elemento já está presente no array resultado
            resultado.push(array[i]); // Adiciona o elemento ao array resultado se ele ainda não estiver presente
        }
    }
    return resultado;
}

// Teste a função
let array = [1, 2, 3, 3, 4, 5, 5, 6];
let arraySemDuplicados = removerDuplicados(array);
console.log(`O array sem elementos duplicados é: ${arraySemDuplicados.join(', ')}`);
