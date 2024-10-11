let hasWallet = true
let enoughAge = true


// IF: somente se a condição especificada for TRUE, as ações em seu bloco serão executados.
if (hasWallet) {
    console.log("Você tem carteira.")

// ELSE IF: SEMPRE fica entre o IF e o ELSE, se necessário mais validações de condições.
} else if (enoughAge) {
    console.log("Você é de maior porém não tem carteira.")
}

// ELSE: Se nenhuma das condições acima forem TRUE, as ações em seu bloco serão executados.
else {
    console.log("Você não tem carteira.")
}

// == EXERCICIO EXEMPLO 1 ==
// Crie uma variável chamada "time"
// SE o time for "Grêmio", imprima algo (1).
// SE o time for "Inter", imprima algo (2).
// SE o time for "Juventude", imprima algo (3).
// SE o time for "Corinthians", imprima algo (4).
// SE NÃO, imprima: "Time não conhecido".
let time = "Flamengo";

if (time === "Grêmio") {
    console.log("Você torce para o Grêmio.")
} else if (time === "Inter") {
    console.log("Você torce para o Inter.")
} else if (time === "Juventude") {
    console.log("Você torce para o Juventude.")
} else if (time === "Corinthians") {
    console.log("Você torce para o Corinthians.")
} else {
    console.log("Time não conhecido.")
}

// == EXERCICIO EXEMPLO 2 ==
// Crie uma variável chamada "numero" verificando:
// SE o numero é 0
// SE o numero é positivo
// SE o numero é negativo
let numero = -4;

if (numero === 0) {
    console.log("Numero é igual a 0.")
} else if (numero > 0) {
    console.log("Numero é positivo.")
} else if (numero < 0) {
    console.log("Numero é negativo.")
} else {
    console.log("Digito não reconhecido.")
}



