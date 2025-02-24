
// Crie uma função que verifique se uma string é um palíndromo ou não. Um palíndromo é uma palavra, frase, número, ou outra sequência de caracteres que lida da mesma maneira para frente e para trás (ignorando espaços, pontuação e capitalização). Por exemplo, as seguintes strings são palíndromose devem retornar true:

function isPalindrome(str) {
    // Remove espaços, pontuação e converte para minúsculas
    let cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

    // Verifica se a string limpa é igual à sua reversa
    let reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
}

// Exemplos de uso
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("No 'x' in Nixon")); // true

