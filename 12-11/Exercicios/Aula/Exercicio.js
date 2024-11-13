// Exercicio 1:
// Uma funcao que recebe um objeto Pessoa (nome, idade, genero musical preferido).
// A função cria um objeto que herda os atributos do objeto recebido originalmente e adiciona mais atributos nesse novo objeto (lista de comidas favoritas, objeto melhorAmigo contendo nome e idade).
// E, por fim, a função imprime as proprieades no seguinte modelo: "O nome da pessoa é [X] e suas comidas preferidas são [Y]. Seu melhor amigo se chama [Z] e tem [W] anos."

let pessoaModelo = {
    nome: 'Bruno',
    idade: 23,
    generoMusical: 'Funk'
}

function criarPessoa(alvo) {
    let pessoaNova = {
        ...alvo,
        comidasFavoritas: ["Picanha", "Hamburger", "Shawarma"],
        melhorAmigo: {
            nome: 'Vitor',
            idade: 22
        }
    }

    console.log(`O nome da pessoa é ${pessoaNova.nome} e suas comidas preferidas são ${pessoaNova.comidasFavoritas}. Seu melhor amigo se chama ${pessoaNova.melhorAmigo.nome} e tem ${pessoaNova.melhorAmigo.idade} anos.`)
}

criarPessoa(pessoaModelo);