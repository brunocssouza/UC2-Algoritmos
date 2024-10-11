// A biblioteca Readline-Sync permite criar inputs que o usuário pode escrever, permitindo armazenar em uma variável.
// 1. É necessário instalar a biblioteca primeiramente no workplace, no terminal:
// npm install readline-sync 
// 2. Importar biblioteca 'readlyne-sync':
const readline = require('readline-sync');

// 3. Exemplo de uso, após importação:
let name = readline.question("Qual o o seu nome? ")
console.log(`Olá, ${name}.`)

// You can turn a String into a Upper or Lower case, using the toUpperCase or toLowerCase method.
console.log("Nome inserido:", name.toUpperCase())