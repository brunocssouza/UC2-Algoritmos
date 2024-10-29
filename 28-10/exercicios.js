// 1.
// a) Crie um array com diversas tarefas.
const tarefas = ["Limpar o chão", "Lavar os pratos", "Lavar as roupas"];
// b) Liste todas as tarefas neste array.
console.log(tarefas)
// c) Adicione uma tarefa ao array.
tarefas.push("Fazer o jantar");
// d) Substitua uma tarefa do array.
tarefas[0] = "Comer"

console.log(tarefas)


// 2.
// Criar array com 5 racas de cachorro
// Pedir pro usuario colocar um numero de 1 a 5
const readline = require('readline-sync');
const racasCachorro = ["Yorkshire", "Poodle", "Labrador", "Pinscher", "Pastor Alemão"]
const usuarioInseriu = readline.questionInt("Selecione um numero (1-5) da raca: ");

console.log("Voce escolheu",racasCachorro[usuarioInseriu-1])

// 3. 
// Crie um array: [1, 2, 3, 4, 5, 6]
// Mostre o tamanho do array.
// Adicione o numero 7.
// Remove os elementos 4 e 5.
// Mostre o novo tamanho do array.
const numbers = [1, 2, 3, 4, 5, 6];

console.log(array.length)
array.push(7);
array.splice(3, 2);
console.log(array.length)
