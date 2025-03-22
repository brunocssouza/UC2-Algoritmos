// ENUM: é umaa lista de valores CONSTANTES.
export enum dias_semana {
    segunda,
    terca,
    quarta,
    quinta,
    sexta,
    sabado,
    domingo
}
console.log(dias_semana.quinta);

// Mostra somente value
enum Cores {
    vermelho = '#FF0000',
    verde = '#00ff00',
    azul = '#0000FF'
}
console.log(Cores.verde)

// Mostra index e value
enum Direcoes {
    norte,
    sul,
    leste,
    oeste
}
for (let direcao in Direcoes) {
    console.log(direcao)
}

// O valor seguintes são, explicitamente, incrementados caso o primeiro valor não comece com '1'.
enum Level{
    blue = 5,
    yellow,
    orange,
    red
}
console.log(Level.blue)