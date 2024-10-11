const readline = require('readline-sync');

// Switch Case: If a bunch && only equality conditional (===) are needed, this conditional structure is used instead.
let team = readline.question("Que time eh teu?").toUpperCase()

switch (time) {
    case "GREMIO":
        console.log("Você torce para o Grêmio.")
    break
    case "INTER":
        console.log("Você torce para o Inter.")
    break
    case "JUVENTUDE":
        console.log("Você torce para o Juventude.")
    break
    case "CORINTHIANS":
        console.log("Você torce para o Corinthians.")
    break
    default:
        console.log("Time não conhecido.")
    break
}

// Exercicio Exemplo
// Peça um Input Numerico
// Caso num === 1: "Voce escolheu Red Dead Redemption 2"
// Caso num === 2: "Voce escolheu The Last of Us"
// Caso num === 3: "Voce escolheu Diablo 3"
// Caso nenhum encontrado: "Jogo nao encontrado".

let num = readline.questionInt("Insira um numero: ")

switch (num) {
    case 1:
        console.log("Voce escolheu Red Dead Redemption 2");
    break
    case 2:
        console.log("Voce escolheu The Last of Us");
    break
    case 3:
        console.log("Voce escolheu Diablo 3");
    break
    default:
        console.log("Jogo nao encontrado,")
    break
}