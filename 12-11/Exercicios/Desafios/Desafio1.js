/*
Crie uma função que faça o seguinte: 
- Pergunta ao usuário e armazena em variaveis: nome, idade e profissão. 
- Cria um objeto a partir dos dados inseridos pelo usuario.
- Imprime no console o objeto e seu tipo de dado (object).
*/
const readline = require('readline-sync');

function askUser() {
    const userName = readline.question("Digite seu nome: ");
    const userAge = readline.question("Digite sua idade: ");
    const userWork = readline.question("Digite sua profissao: ");

    const user = {
        name: userName,
        age: userAge,
        work: userWork
    };

    console.log(user);
    console.log(typeof(user));
};

askUser()
