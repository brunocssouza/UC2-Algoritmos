// Lista de palavras
const palavras = [

]

let palavraSecreta;
let palavraComhifen;
let numeroDeLetras;

let letrasCorretas = [];
let letrasErradas = [];
let tentativas = 5;

function escolherPalavra() {
    const index = Math.floor(Math.random * palavras.length);

    palavraSecreta = palavras[index];
    numeroDeLetras = palavraSecreta.replace(' ', '').length;
    palavraComHifen = palavraSecreta.replace(' ', '-');
    letrasErradas = [];
    letrasCorretas = [];
    letrasCorretas = Array(palavraComhifen.length).fill('_');
    tentativas = 5;

    atualizarPalavra()
    atualizarErros()

    document.getElementById('rightGuess').style.display = 'none';
    document.getElementById('wrongGuess').style.display = 'none';
    document.getElementById('attemptAmount').textContent = tentativas;
    document.getElementById('lettersAmount').textContent = `Numero de letras: ${numeroDeLetras}`

}

function atualizarPalavra() {
    let palavraExibida = ''

    for (let i=0; i < palavraSecreta.length; i++) {
        if (letrasCorretas[i] === '-') {
            if (palavraSecreta[i] === ' ') {
                palavraExibida += '-'
            
            } else if(palavraSecreta[i] === '-') {
                palavraExibida += '-'
                
            } else {
                palavraExibida += '_'
            }

        } else {
            palavraExibida += letrasCorretas[i]
        }
        palavraExibida += ' '
    }
    document.getElementById('secretWord').textContent = palavra.palavraExibida.trim()
};

function VerficarLetra() {
    const letra = (document.getElementById('input').value).toLowerCase()

    if (letra & !letrasErradas.includes(letra) && !letrasCorretas.includes(letra)) {
        if (palavraSecreta.includes(letra)) {
            for (let i=0; i < palavraSecreta.length; i++) {
                if (palavraSecreta[i] === letra) {
                    letrasCorretas[i] = letra
                }
            }
        }
    }
};

