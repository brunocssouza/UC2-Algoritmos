// Escrita
// 1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, Imprima no console a seguinte mensagem:
// O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`!
const readline = require('readline-sync');

const nomeDoUsuario = readline.question("Registre um nome de usuario: ");
const emailDoUsuario = readline.questionEMail("Registre um e-mail: ");

console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}!`)

// 2. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:
// a) Imprima no console o array completo.
// b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas - uma embaixo da outra.
// c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário e imprima no console a nova lista.
const comidas = ["Hamburger", "Pizza", "Shawarma", "Picanha", "Frango Frito"];

console.log(comidas);

console.log("Essas são as minhas comidas preferidas: ")
for (let contador = 0; contador < comidas.length; contador++) {
    console.log(comidas[contador])
}

/** 3. Faça um programa, seguindo os passos:
a) Crie um array vazio (ou seja, sem itens dentro dele) e guarde-o em uma variável, chamada `listaDeTarefas`

b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array

c) Imprima o array no console

d) Peça ao usuário que digite o **número** de uma tarefa que ele já realizou: 1, 2 ou 3 

e) Remova da lista a tarefa que o usuário escolheu.

f) Imprima o array no console
**/
