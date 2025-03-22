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
