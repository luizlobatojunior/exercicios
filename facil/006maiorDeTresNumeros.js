// Crie uma função que encontre o maior de três números. A função deve ser chamada maiordeTresnumero e deve receber três parâmetros, a, b e c. A função deve retornar o maior número entre os três.

function maiordeTresnumero(a, b, c) {
    if (a > b && a > c) {
        return a;
    } else if (b > a && b > c) {
        return b;
    } else {
        return c;
    }
}
        console.log(maiordeTresnumero(2, 3, 9)); // 9
        console.log(maiordeTresnumero(5, 5, 50)); // 50
        console.log(maiordeTresnumero(2, 22, 2)); // 22
        console.log(maiordeTresnumero(26, 5, 3)); // 26
        console.log(maiordeTresnumero(55, 2, 3)); // 55