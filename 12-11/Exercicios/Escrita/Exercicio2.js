// a) Crie dois objetos diferentes com as propriedades nome, idade e profissao.
const pessoa1 = {
    nome: 'Lucas',
    idade: 43,
    profissao: 'Mecânico'
}

const pessoa2 = {
    nome: 'José',
    idade: 76,
    profissao: 'Fazendeiro'
}

/* 
b) Função para Retornar Informações em Array
Escreva uma função que receba um objeto de cada vez e retorne um array com as seguintes informações:
O valor de nome
O número de caracteres do valor nome
O valor de idade
O valor de profissao
O número de caracteres do valor profissao
*/
function GetInfo(alvo) {
    let arr = [alvo.nome, alvo.nome.length, alvo.idade, alvo.profissao, alvo.profissao.length];
    return console.log(arr)
}
GetInfo(pessoa1)



