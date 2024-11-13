// 1,
// a) Crie um objeto que contém duas propriedades: nome (string) e apelidos (um array com três apelidos). Em seguida, escreva uma função que recebe o objeto e imprime uma mensagem.
function show(alvo) {

    console.log(`Eu sou ${alvo.nome}, mas pode me chamr de: ${alvo.apelidos[0]}, ${alvo.apelidos[1]} ou ${alvo.apelidos[2]}.`)
}

const pessoa1 = {
    nome: "Vitor Hugo", 
    apelidos: ["Vitinho", "Vitão", "Vit"]
}
show(pessoa1);

// b) Crie um novo objeto que mantém o valor da propriedade nome, mas possui uma nova lista de três apelidos. Chame a função anterior passando o novo objeto como argumento.
const pessoa2 = {
    ...pessoa1,
    apelidos: ["Vitola", "Vitin", "Vito"]
}
show(pessoa2)
