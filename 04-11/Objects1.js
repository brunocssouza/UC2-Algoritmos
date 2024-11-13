// Declaracao
let pessoa = {
    nome: 'Bruno',
    idade: 22,
    cpf: 99999999999,
    filmesFavoritos: ['X', 'Y', 'Z'],
    trabalhar: function() {             // Funcões em objetos são chamadss de Métodos.
        console.log(`${this.nome} está trabalhando. Ele não vê a hora de chegar.`)
    }
}

// Impressão
console.log(pessoa.nome); // Output: Mario
console.log(pessoa.filmesFavoritos[1]); // Output: Y

// Troca do valor
pessoa.idade = 34;

// Criação de atributo
pessoa.altura = 1.78

// Uso de um método 
pessoa.trabalhar() // Output: Bruno está trabalhando. Ele não vê a hora de chegar.
