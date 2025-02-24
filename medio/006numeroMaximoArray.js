// Escreva uma função que encontre o valor máximo de um array de objetos. A função deve receber um array de objetos que tenham um atributo numérico e retornar o objeto que tenha o maior valor numérico. Por exemplo:

function numeroMaximoArray(array) {
  let max = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i].numero > max.numero) {
      max = array[i];
    }
  }

  return max;
}
console.log(numeroMaximoArray([
  { numero: 1 },
  { numero: 2 },
  { numero: 3 },
])); // { numero: 3 }
console.log(numeroMaximoArray([
  { numero: 3 },
  { numero: 2 },
  { numero: 1 },
])); // { numero: 3 }   
console.log(numeroMaximoArray([
  { numero: 1 },
  { numero: 3 },
  { numero: 2 },
])); // { numero: 3 }