// FOR EACH: Executa uma função em cada elemento de um array.
console.log("FOR EACH BÁSICO -------")
const numeros1 = [65,44,12,4]

let soma1 = 0;
function somarNumeros(numeroRecebido) {
    soma1 = soma1 + numeroRecebido
}

numeros1.forEach(somarNumeros)
console.log(soma1)

//
// NAMELESS FUNCTION: Permite criar uma função on-the-fly.
console.log("NAMELESS FUNCTION -------")
let soma2 = 0;
const numeros2 = [65, 44, 12, 4]

numeros2.forEach(function(numero) {
    soma2 = soma2 + numero
})
console.log(soma2)

//
// ARROW FUNCTION: Permite
console.log("ARROW FUNCTION -------")
let soma3 = 0;
const numeros3 = [65, 44, 12, 4]

numeros3.forEach(myFunction => {
    soma3 += myFunction
})

console.log("ARROW FUNCTION -------")
// Pegando o VALUE, INDEX e ARRAY usando ForEach
const veiculos = ["carro", "moto", "bicicleta"]

veiculos.forEach((value, index, array) => {
    console.log(`Valor: ${value} | Index: ${index} | ${array}`)
})
