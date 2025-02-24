// Crie uma função que implemente a busca binária em um array ordenado. A função deve receber um array e um elemento a ser procurado. Ela deve retornar o índice do elemento no array ou -1 caso o elemento não esteja presente no array.

function buscaBinaria(array, elemento) {
  let inicio = 0;
  let fim = array.length - 1;

  while (inicio <= fim) {
    let meio = Math.floor((inicio + fim) / 2);

    if (array[meio] === elemento) {
      return meio;
    } else if (array[meio] < elemento) {
      inicio = meio + 1;
    } else {
      fim = meio - 1;
    }
  }

  return -1;
}
console.log(buscaBinaria([1, 2, 3, 4, 5], 3)); // 2
console.log(buscaBinaria([1, 2, 3, 4, 5], 5)); // 4
console.log(buscaBinaria([1, 2, 3, 4, 5], 6)); // -1
console.log(buscaBinaria([1, 2, 3, 4, 5], 0)); // -1
console.log(buscaBinaria([1, 2, 3, 4, 5], 1)); // 0
