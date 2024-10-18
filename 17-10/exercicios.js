// Funcao que recebe um horario em horas, e transforme em segundos.
function horasParaSegundos(hora) {
    console.log(hora*3600)
}
horasParaSegundos(2);

// Três notas e calcular a media
function media(nota1, nota2, nota3) {
    console.log(((nota1+nota2+nota3)/3).toFixed(2)) // O método toFixed() delimita a quantidade de números após o vírgula
}
media(6,17,10);

// Analisa se um numero é par ou impar 
function parImpar(number) {
    if (number === 0) {
        console.log("O numero eh 0.")
    }
    else if (number % 2 === 0) {
        console.log("O numero eh par.")
    }
    else {
        console.log("O numero eh impar.")
    }
}
parImpar(8);

// Funcao que gere uma saudacao e retorne o resultado:
function saudar(nome) {
    return(`Olá, senhor ${nome}!`)
}

let nome = "Bruno"
console.log(saudar(nome))

// Funcao que recebe temperatura em Celsius e retorna a mesma em Fahrenheit: 
function converterParaFahrenheit(temperaturaEmCelsius) {
    return 1.8 * temperaturaEmCelsius + 32
}

console.log(converterParaFahrenheit(34))

