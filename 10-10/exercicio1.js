// 1.
const readline = require('readline-sync');

let numero1 = Number(readline.question("Digite o numero 1: ")) // question: gera uma String. Logo, é necessario converter (Number())
let numero2 = readline.questionInt("Digite o numero 2: ") // questionInt: gera um Int. Logo, não é necessário converter.

console.log(numero1+numero2)

// 2.
let time = readline.question("Que time eh teu?").toUpperCase();

if (time === "GREMIO") {
    console.log("Você torce para o Grêmio.")
} else if (time === "INTER") {
    console.log("Você torce para o Inter.")
} else if (time === "JUVENTUDE") {
    console.log("Você torce para o Juventude.")
} else if (time === "CORINTHIANS") {
    console.log("Você torce para o Corinthians.")
} else {
    console.log("Time não conhecido.")
}

console.log("Time inserido:", time.toUpperCase())