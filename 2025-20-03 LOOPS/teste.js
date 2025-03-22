




//
// ARROW FUNCTION: Permite
console.log("------- ARROW FUNCTION -------")
let soma3 = 0;
const numeros3 = [65, 44, 12, 4]

numeros3.forEach(element => {
    soma3 += element
})
console.log(soma3)


numeros3.forEach(element => {
    soma3 += element
});

for (let element of numeros) {
    soma3 += element
}











console.log("------- ARROW FUNCTION (c/ Value, Index e Array) -------")
// Pegando o VALUE, INDEX e ARRAY usando ForEach
const veiculos = ["carro", "moto", "bicicleta"]

veiculos.forEach((value, index, array) => {
    console.log(`Valor: ${value} | Index: ${index} | ${array}`)
})