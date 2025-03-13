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
    ],
    comedia: [
        {
            nome: "Bad Boys",
            diretor: "Michael Bay",
            elenco: ["Martin Lawrence", "Will Smith", "Téa Leoni"],
            sinopse: "Two Miami narcotics detectives who are investigating $100 million worth of stolen packs of heroin.",
            imagem: "./img/bad_boys.jpg"
        },
        {
            nome: "Bad Boys II",
            diretor: "Michael Bay",
            elenco: ["Martin Lawrence", "Will Smith", "Jordi Mollà"],
            sinopse: "The detectives Marcus Burnett and Mike Lowrey investigate the flow of illegal drugs going into Miami.",
            imagem: "./img/bad_boys2.jpg"
        },
        {
            nome: "Bad Boys for Life",
            diretor: ["Adil El Arbi", "Bilall Fallah"],
            elenco: ["Martin Lawrence", "Will Smith", "Vanessa Hudgens"],
            sinopse: "Miami detectives Mike Lowrey and Marcus Burnett investigate a string of murders tied to Lowrey's troubled past.",
            imagem: "./img/bad_boys3.jpg"
        },
        {
            nome: "Bad Boys: Ride or Die",
            diretor: ["Adil El Arbi", "Bilall Fallah"],
            elenco: ["Martin Lawrence", "Will Smith", "Vanessa Hudgens"],
            sinopse: "The Miami detectives Mike Lowrey and Marcus Burnett are attempting to clear the name of their late Captain Conrad Howard after he is falsely accused of conspiracy.",
            imagem: "./img/bad_boys4.jpg"
        }
    ],
    horror: [
        {
            nome: "Saw",
            diretor: "James Wan",
            elenco: ["Cary Elwes", "Danny Glover", "Monica Potter"],
            sinopse: "Two men wake up in a locked room, chained by their feet. They are forced to play a deadly game orchestrated by a killer known as Jigsaw.",
            imagem: "./img/saw.jpg"
        },
        {
            nome: "Saw II",
            diretor: "Darren Lynn Bousman",
            elenco: ["Donnie Wahlberg", "Franky G", "Beverley Mitchell"],
            sinopse: "Detective Eric Matthews tries to save a group of people trapped in a house, forced to play Jigsaw's deadly games.",
            imagem: "./img/saw2.jpg"
        },
        {
            nome: "Saw III",
            diretor: "Darren Lynn Bousman",
            elenco: ["Tobin Bell", "Shawnee Smith", "Angus Macfadyen"],
            sinopse: "As Jigsaw is dying, he forces a doctor to help him complete his last game, but she must make tough decisions to save her own life.",
            imagem: "./img/saw3.jpg"
        },
        {
            nome: "Saw IV",
            diretor: "Darren Lynn Bousman",
            elenco: ["Tobin Bell", "Scott Patterson", "Lyriq Bent"],
            sinopse: "After Jigsaw's death, investigators try to uncover what happened during his games, but they discover a new deadly mystery.",
            imagem: "./img/saw4.jpg"
        }
    ]
};

function adicionarFilmes() {
    // Usando argumentos para acessar as categorias e filmes
    for (let i = 0; i < arguments.length; i++) {
        const categoria = arguments[i][0]; // Nome da categoria
        const categoriaFilmes = arguments[i][1]; // Array de filmes da categoria
        const categoriaClasse = document.getElementById(categoria);

        // Loop para adicionar os filmes dentro de cada categoria
        for (let j = 0; j < categoriaFilmes.length; j++) {
            const filme = categoriaFilmes[j];

            // Criando os elementos para cada filme
            const container = document.createElement('div');
            container.classList.add('filme');

            const filmeTitulo = document.createElement('h2');
            filmeTitulo.textContent = filme.nome;

            const filmeImagem = document.createElement('img');
            filmeImagem.src = filme.imagem;
            filmeImagem.alt = filme.nome;

            container.appendChild(filmeTitulo);
            container.appendChild(filmeImagem);

            // Adicionando o filme na categoria correspondente
            categoriaClasse.appendChild(container);
        }
    }
}

// Chama a função e passa as categorias e filmes
adicionarFilmes(
    ["acao", filmes.acao],
    ["comedia", filmes.comedia],
    ["horror", filmes.horror]
);
