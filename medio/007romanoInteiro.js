//Crie um programa que converta um número romano para inteiro. Por exemplo, para o número romano "XIV", a saída deve ser 14.

function romanoInteiro(romano) {
    let romanos = {
        I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000
    }
    let inteiro = 0;
    for (let i = 0; i < romano.length; i++) {
        let atual = romanos[romano[i]];
        let proximo = romanos[romano[i + 1]];
        if (atual < proximo) {
            inteiro += proximo - atual;
            i++;
        } else {
            inteiro += atual;
        }
    }
    return inteiro;
}
console.log(romanoInteiro("XIV")); // 14
console.log(romanoInteiro("XX")); // 20
console.log(romanoInteiro("IV")); // 4
console.log(romanoInteiro("V")); // 5
