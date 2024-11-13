// Exemplo 1: Objetos dentro de objetos
const donoDoPet = {
    nome: 'Bruno',
    idade: 23,
    pet: {
        nome: 'Tobi',
        raca: 'Pinsher',
        idade: 13
    }
}
console.log(donoDoPet.pet.nome);

// Exemplo 2: Arrays dentro de objetos
const curso = {
    nome: 'Front-end',
    linguagens: ['Javascript', 'CSS', 'HTML']
}
console.log(curso.linguagens[1])

// Exemplo 3: Objetos dentro de listas
const professoresTDS = [
    {nome: 'Leonardo', UC: 2}, 
    {nome: 'Lucas', UC: 3}, 
    {nome: 'Maria', UC: 5}
];

console.log(professoresTDS[0].nome)

// Exemplo 4: Spread (Copiar dados de outro objeto/array utilizando: ...)
const antigoProfessor = {
    nome: 'Leo',
    idade: 29,
    disciplinas: ['Algoritmos', 'Banco de Dados', 'Java']
}

const novoProfessor = {
    ...antigoProfessor,
    nome: 'Lucas',
    idade: 30,
    veiculo: 'Carro'
}

console.log(antigoProfessor, novoProfessor)


