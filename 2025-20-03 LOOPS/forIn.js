// FOR IN: itera sobre atributos de um OBJETO.
let romance = {
    "Os trabalhadores do Mar": "Victor Hugo",
    "A culpa é das estrelas:": "John Green"
}

for (let livro in romance) {
    console.log(`O autor do livro ${livro} é ${romance[livro]}`)
    //                              livro  romance["Os trabalhadores do Mar"]
}
