
// a) Declaração de Array carrinho
// Crie uma variável de escopo global que armazene um array vazio chamada carrinho.
let carrinho = [];

// b) Criação de Objetos Fruta
// Crie três objetos representando frutas com as propriedades: nome (string) e disponibilidade (boolean, começando como true).
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

// c) Função para Adicionar Frutas ao carrinho
// Crie uma função que receba um objeto fruta por parâmetro e o adicione ao array carrinho usando o método push(). Invoque a função passando os três objetos de fruta.
function buy(alvo) {
    carrinho.push(alvo);
};
buy(maca);
buy(banana);
buy(maracuja);

// d) Impressão do Array carrinho
// Imprima o conteúdo da variável carrinho para garantir que ela agora contém três objetos.
console.log(carrinho);
