// Escreva uma função que inverta uma string. A função deve ser chamada converteString e deve receber um parâmetro, str. A função deve retornar a string invertida.  

function converteString(str) {
    return str.split('').reverse().join('');
}       
console.log(converteString("hello")); // olleh
console.log(converteString("world")); // dlrow