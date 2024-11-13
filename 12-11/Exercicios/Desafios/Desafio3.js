/*
Reescreva o exercício 3, da seção Escrita, com uma função a mais:
- Ela deve receber uma das frutas como parâmetro e retornar o objeto da fruta recebida com a propriedade disponibilidade invertida.
*/
let carrinho = [];

const maca = {
    nome: 'Maçã',
    disponibilidade: true
};
const banana = {
    nome: 'Banana',
    disponibilidade: false
};
const maracuja = {
    nome: 'Maracujá',
    disponibilidade: true
};

function buy(alvo) {
    carrinho.push(alvo);
};

buy(maca);
buy(banana);
buy(maracuja);
console.log(carrinho);

function invertAvailability(alvo) {
    alvo.disponibilidade = !alvo.disponibilidade;

    return console.log(alvo);
};
invertAvailability(banana);
