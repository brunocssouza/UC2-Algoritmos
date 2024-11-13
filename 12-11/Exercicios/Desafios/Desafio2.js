/*
Crie dois objetos que representem filmes que tenham os seguintes atributos: 
= Nome
- Ano de Lançamento 

Crie uma função que:
- Exija Receber 2 parâmetros, sendo ambos objetos que representam filmes.
= Deve retornar uma mensagem com o seguinte formato:
    O primeiro filme foi lançado antes do segundo? false
    O primeiro filme foi lançado no mesmo ano do segundo? true
*/

const johnWick4 = {
    name: 'John Wick: Capítulo 4',
    releaseYear: 2023
}
const badBoys4 = {
    name: 'Bad Boys: Até o Fim',
    releaseYear: 2024
}

function compareMovies(movie1, movie2) {
    console.log(movie1)
    console.log(movie2)
    return console.log(`O primeiro filme foi lançado antes do segundo? ${movie1.releaseYear < movie2.releaseYear}\nO primeiro filme foi lançado no mesmo ano do segundo? ${movie1.releaseYear == movie2.releaseYear}`)
}
compareMovies(johnWick4, badBoys4)