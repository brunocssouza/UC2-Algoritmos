// Escrita
const readline = require('readline-sync');


// 1.
console.log("=====", "EXRCICIO 1", "=====")
// a) Faça um programa que pergunte ao usuário seu nome e seu e-mail.
const nomeDoUsuario = readline.question("Registre um nome de usuario: ");
const emailDoUsuario = readline.questionEMail("Registre um e-mail: ");

// b) Em seguida, Imprima no console a seguinte mensagem: O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`!
console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}!`);


// 2.
console.log("=====", "EXRCICIO 2", "=====")
// a) Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável.
const comidas = ["Hamburger", "Pizza", "Shawarma", "Picanha", "Frango Frito"];

// b) Imprima no console o array completo.
console.log(comidas);

// c) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas - uma embaixo da outra.
console.log("Essas são as minhas comidas preferidas: ");
for (let contador = 0; contador < comidas.length; contador++) {
    console.log(comidas[contador])
};

// d) Pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário e imprima no console a nova lista.
comidas[1] = readline.question("Insira sua comida favorita: ");
console.log(comidas);


// 3.
console.log("=====", "EXRCICIO 3", "=====")
// a) Crie um array vazio (ou seja, sem itens dentro dele) e guarde-o em uma variável, chamada `listaDeTarefas`.
const listaDeTarefas = [];

// b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array.
for (let contador = 1; contador <= 3; contador++) {
    listaDeTarefas.push(readline.question(`Digite a tarefa ${contador} a ser realizada: `))
}

// c) Imprima o array no console.
console.log(listaDeTarefas);

// d) & e) Peça ao usuário que digite o número de uma tarefa que ele já realizou: 1, 2 ou 3 e remova-o da lista de tarefas.
listaDeTarefas.splice(readline.questionInt("Digite o numero de uma tarefa que ja foi realizada: ")-1, 1);

// f) Imprima o array no console.
console.log(listaDeTarefas);
