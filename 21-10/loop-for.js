// EXPLICACAO

// for (variavel-local, condicao, incremento na variavel-local)
for (let contador = 1; contador <= 3; contador++) {
    console.log(contador)
}

// Exercicio 1:
// Um contador que vá de 10 até 0.
// Quando contador === 0, "BOOM!"
// Quando contador % 2 === 0, "Tico!"
// Quando contador % 2 !== 0, "Teco!"
for (contador = 10; contador >= 0; contador--) {
    if (contador === 0) {
        console.log("BOOM!")
    }
    else if (contador % 2 === 0) {
        console.log("Tico!")
    }
    else {
        console.log("Teco!")
    }
}
