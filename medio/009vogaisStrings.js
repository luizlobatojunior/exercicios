// Crie um programa que conte o número de vogais em uma string com as vogais "a", "e", "i", "o", "u".

function contarVogais(string) {
  let vogais = ['a', 'e', 'i', 'o', 'u'];
  let contador = 0;

  for (let i = 0; i < string.length; i++) {
    if (vogais.includes(string[i])) {
      contador++;
    }
  }

  return contador;
}
console.log(contarVogais('aeiou')); // 5
console.log(contarVogais('hello')); // 2
console.log(contarVogais('world')); // 1