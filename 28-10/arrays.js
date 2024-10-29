// Arrays
let listaVo = ["Cacetinho", 3, "Negresco"] // Declaracao de lista

console.log(listaVo) // Imprime a lista completa.

console.log(listaVo[0]) // Imprime um DETERMINADO elemento da lista.

console.log(listaVo.length) // Mostra a quantidade de entidades na lista.

console.log(listaVo.includes("Cacetinho")) // Verifica se a lista tem o elemento incluido. 

listaVo.push("7 Bello") // Adicionar um DETERMINADO elemento no final da lista.

listaVo.pop() // Retira um elemento no final da lista.

// Splice (2 parâmetros + 1 opcional)
// 1º Parâmetro [Obrigatório]: Retira elementos a partir de um índex 2.
// 2º Parâmetro [Obrigatório]: Quantidade de elementos retirar a partir dele.
// 2º Parâmetro [Opcional]: Cria um elemento para substituir aqueles removidos.
listaVo.splice(2, 1) // 1. Retira elementos a partir de um índex  3. 

listaVo[0] = "Arroz" // Substitui um elemento da lista por outro.

