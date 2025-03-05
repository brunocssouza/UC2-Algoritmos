const palavras = [
    'ARARA AZUL',
    'SAPO',
    'IGUANA',
    'JACARE',
    'DRAGAO DE KOMODO',
    'ARANHA',
    'CARANGUEJO',
    'LULA',
    'POLVO',
    'URSO',
    'TARTARUGA',
    'ONCA PINTADA',
    'PAPAGAIO'
]

let palavra_sorteada;
let palavra_sorteada_codificada;

function iniciarJogo() {

    // Chances restantes iniciais
    document.getElementById('chances_restantes').innerHTML = 5;

    // Esconde todos os elementos-resultados 
    const resultados = ['acertou', 'ganhou', 'errou', 'perdeu']
    for (let i=0; i < resultados.length; i++) {
        document.getElementById(resultados[i]).style.display = 'none'
    }
    

    // Define a palavra secreta da vez e a formata de um jeito em que todos os Espaços virem Hífens.
    palavra_sorteada = palavras[Math.floor(Math.random() * palavras.length)].split("")
    for (let i=0; i < palavra_sorteada.length; i++) {
        if (palavra_sorteada[i] == " ") {palavra_sorteada[i] = "-"}
    }

    // Usando como base a palavra secreta definida, cria-se uma variavel de mesmo tamanho porém com seus elementos substituidos por underscore.
    // com excessão dos elementos onde ficariam hífens.
    palavra_sorteada_codificada = []
    for (let i=0; i < palavra_sorteada.length; i++) {
        if (palavra_sorteada[i] == "-") {palavra_sorteada_codificada.push('-')} 
        else {palavra_sorteada_codificada.push('_')}
    }


    console.log(palavra_sorteada)
    document.getElementById('palavra_secreta').innerHTML = palavra_sorteada_codificada.join("")
};

function testarLetra() {

    if ((document.getElementById('perdeu').style.display == 'inline') || (document.getElementById('ganhou').style.display == 'inline')) {
        return
    }

    let inputRecebido = document.getElementById('inputBar').value.toUpperCase().trim() // value: atributo para se obter dados de um input.

    // Verifica se a letra recebida faz parte da palavra secreta
    if (palavra_sorteada.includes(inputRecebido) && !palavra_sorteada_codificada.includes(inputRecebido)) {    
        mostrarResultado('acertou')

        // Substitui todos os underscores que guardam a letra que o usuario enviou
        for (let i=0; i < palavra_sorteada.length; i++) {

            if (inputRecebido == palavra_sorteada[i]) {
                palavra_sorteada_codificada[i] = inputRecebido
                document.getElementById('palavra_secreta').innerHTML = palavra_sorteada_codificada.join("")
            } 

        }

        // Verifica se a palavra sorteada foi completamente descoberta
        if (palavra_sorteada_codificada.join() == palavra_sorteada.join()) {
            mostrarResultado('ganhou')
        }
        
    } else {

        mostrarResultado('errou')
        document.getElementById('chances_restantes').innerHTML--

        if (document.getElementById('chances_restantes').innerHTML <= 0) {
            mostrarResultado('perdeu')
            document.getElementById('palavra_secreta').innerHTML = "O animal era " + palavra_sorteada.join("")
        }
    }
    
}

// Armazena os possiveis desfechos para cada tentativa e mostra/esconde esses elementos-resultado conforme o parametro recebido. 
function mostrarResultado(resultadoRecebido) {

    const resultados = ['acertou', 'ganhou', 'errou', 'perdeu']
    for (let i=0; i < resultados.length; i++) {
        if (resultados[i] == resultadoRecebido) {
            document.getElementById(resultados[i]).style.display = 'inline'
        } else {
            document.getElementById(resultados[i]).style.display = 'none'
        }
    }
    
}

iniciarJogo()

