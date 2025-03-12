const filmes = {
    acao: [
        {
            nome: "John Wick",
            diretor: "Chad Stahelski",
            elenco: ["Keanu Reeves", "Michael Nyqvist", "Alfie Allen"],
            sinopse: "A legendary hitman who comes out of retirement to seek revenge against the men who killed his dog.",
            imagem: "./img/john_wick.jpg"
        },
        {
            nome: "John Wick: Chapter 2",
            diretor: "Chad Stahelski",
            elenco: ["Keanu Reeves", "Laurence Fishburne", "Ruby Rose"],
            sinopse: "John Wick is forced back into his old life to fulfill a blood oath to a crime lord.",
            imagem: "./img/john_wick2.jpg"
        },
        {
            nome: "John Wick: Chapter 3 – Parabellum",
            diretor: "Chad Stahelski",
            elenco: ["Keanu Reeves", "Laurence Fishburne", "Halle Berry"],
            sinopse: "Centers on John Wick going on the run from a legion of hitmen after a bounty is placed for his murder.",
            imagem: "./img/john_wick3.jpg"
        },
        {
            nome: "John Wick: Chapter 4",
            diretor: "Chad Stahelski",
            elenco: ["Keanu Reeves", "Donnie Yen", "Bill Skarsgård"],
            sinopse: "John Wick sets out for revenge on the High Table and those who left him for dead.",
            imagem: "./img/john_wick4.jpg"
        }
    ]
}

function adicionarFilmes() {

    for (let filme of filmes.acao) {
        const container = document.createElement('div');
        container.classList.add('filme');

        const filmeTitulo = document.createElement('h2');
        filmeTitulo.textContent = filme.nome;

        const filmeImagem = document.createElement('img');
        filmeImagem.src = filme.imagem;
        filmeImagem.alt = filme.nome;

        container.appendChild(filmeTitulo);
        container.appendChild(filmeImagem);        

        const categoria_acao = document.getElementById('acao')
        categoria_acao.appendChild(container);
    }

}

adicionarFilmes()
