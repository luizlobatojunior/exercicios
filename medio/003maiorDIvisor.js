//Escreva um programa que encontre o maior divisor comum de dois números. O maior divisor comum (MDC) de dois números é o maior número que divide ambos sem deixar resto. Por exemplo, o MDC de 56 e 98 é 14.
function gcd(a, b) {
    if (!b) {
        return a;
    }
    return gcd(b, a % b);
}

// Example usage:
const num1 = 56;
const num2 = 98;
console.log(`o maior divisor comum de ${num1} e ${num2} é ${gcd(num1, num2)}`);