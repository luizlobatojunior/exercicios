// Crie um programa que converta Celsius em Fahrenheit. A fórmula para essa conversão é a seguinte: fahrenheit = celsius * 1.8 + 32.
function converterCelsiusParaFahrenheit(celsios) {
  return celsios * 1.8 + 32;
}
// Teste da função
let celsius = 25;
let fahrenheit = converterCelsiusParaFahrenheit(celsius);

console.log(fahrenheit); // 77