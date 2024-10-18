// Exemplo
function areaSquare(base, altura) {
    console.log(base*altura)
}
areaSquare(2, 4);


// EXERCICIOS



// RETURN key-word (1/2)
function soma(number1, number2) {
    let soma = number1 + number2;
    return soma;
}
console.log(soma(10,8));

// RETURN key-word (2/2): Armazenar múltiplos RETURNs
function converterParaFahrenheit(celsiusTemp) {
    let fahrenheitTemp = 1.8 * celsiusTemp + 32
    return {fahrenheitTemp, celsiusTemp}
}

const {fahrenheitTemp, celsiusTemp} = converterParaFahrenheit(30);
console.log(`Temperatura em Fahrenheit: ${fahrenheitTemp}.`)
console.log(`Temperatura em Celsius: ${celsiusTemp}.`)



