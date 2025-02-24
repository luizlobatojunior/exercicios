// Escreva uma função que classifique um array em ordem crescente. A função deve receber um array como argumento e retornar um novo array com os elementos classificados em ordem crescente.

function ordemCrescente(){
    let array = [5, 3, 2, 4, 7, 1, 0, 6];
    let novaOrdem = array.sort((a, b) => a - b);
    return novaOrdem;
}
console.log(ordemCrescente());

