// Declaracao
let pessoa = {
    nome: 'Bruno',
    idade: 22,
    cpf: 99999999999,
    filmesFavoritos: ['X', 'Y', 'Z'],
    trabalhar: function() {                      // Funcões em objetos são chamadss de Métodos.
        console.log(`${this.nome} está trabalhando. Ele não vê a hora de chegar.`)
    }
}

// Impressão
console.log(pessoa.nome);
console.log(pessoa.filmesFavoritos[1]);

// Troca do valor
pessoa.idade = 34;

// Adição de atributo
pessoa.altura = 1.78

// Uso de um método 
pessoa.trabalhar()

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
