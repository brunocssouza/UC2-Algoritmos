// Exercicio 1:
// Crie um objeto que represente um personagme que voce goste.
// Dê um nome, idade e habilidades á ele. 
// Crie um método que demonstre o personagem fazendo uma ação.
// Dê um console.log para cada um dos atributos criados.

let personagem = {
    nome: 'Mario',
    idade: 2,
    habilidades: ['Pular', 'Abaixar', 'Nadar'],
    acao: function() {
        console.log(`${this.nome} pulou!`)
    }
}

console.log(personagem.nome); 
console.log(personagem.idade);
console.log(personagem.habilidades); 
personagem.acao();
