// Escreva uma função que verifique se duas strings são anagramas uma da outra. Anagramas são palavras que têm as mesmas letras, mas em ordem diferente.

function anagram(str1, str2) {
  return str1.split('').sort().join('') === str2.split('').sort().join('');
}
console.log(anagram('listen', 'silent')); // true
console.log(anagram('hello', 'bye')); // false
console.log(anagram('hello', 'hello')); // true