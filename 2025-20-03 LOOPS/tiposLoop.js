const lista = [1, 2, 3]

// WHILE
let i=0;
while (i < lista.length) {
    console.log("WHILE básico", lista[i])
    i++
}

// FOR Básico
for(let i=0; i < lista.length; i++) {
    console.log("FOR básico", lista[i])
}

// FOR IN: itera sobre atributos de um OBJETO.
let romance = {
    "Os trabalhadores do Mar": "Victor Hugo",
    "A culpa é das estrelas:": "John Green"
}
for (let livro in romance) {
    console.log(`O autor do livro ${livro} é ${romance[livro]}`)
    //                              livro  romance["Os trabalhadores do Mar"]
}

// FOR OF: itera sobre OBJETOS E ARRAYS
for (let numero of lista) {
    console.log("FOR OF", numero)
}

// Exercicio 1
const arr = ["Oi", "sumido", "tudo", "bem?", "Saudades"]
console.log(arr.join(" "))  

// Exercicio 2
const nums = [11,15,18,14,12,13]

let somaPares = 0;
for (let num of nums) {
    if (num % 2 == 0) {
        somaPares = somaPares + num
    }
}
console.log(somaPares)

// FOR EACH: Executa uma determina função em cada elemento de um array.
const numeros = [65,44,12,4]

let soma = 0;
function somarTudo(numeroRecebido) {
    soma = soma + numeroRecebido
}

numeros.forEach(somarTudo)
console.log(soma)

// NAMELESS FUNCTION:
numeros.forEach(function(numero) {
    soma += numero
})

// ARROW FUNCTION:


// Pegando o value, index e array usando ForEach
const veiculos = ["carro", "moto", "bicicleta"]

veiculos.forEach((value, index, array) => {
    console.log(`Valor: ${value} | Index: ${index} | ${array}`)
})




