// DEFINICAO
let voltas = 0;

while (voltas < 10) {
    voltas += 1
    console.log(`Corridae em andamento! Quantidade de voltas ate o momento: ${voltas}`)
}

console.log(`A corrida terminou! ${voltas} voltas foram realizadas.`)

// EXEMPLOS
//Exemplo 1: Usando While, imprima até 10.
let number = 0;

while (number <= 10) {
    console.log(number)
    number += 1
}

//Exemplo 2: Usando While, imprima APENAS os numeros pares de 1 a 100.
number = 1;

while (number <= 100) {
    if (number % 2 === 0) {
        console.log(number)
    }
    number += 1
}

//Exemplo 3: Usando While e Readline-Sync, imrima a tabuada de um determinado input do usuário.
const readline = require('readline-sync');

let numberInput = readline.questionInt("Qual eh a tabuada que deseja? ")
let counter = 1

while (counter <= 10) {
    console.log(`${numberInput} x ${counter} = ${numberInput*counter}`)
    counter += 1
}