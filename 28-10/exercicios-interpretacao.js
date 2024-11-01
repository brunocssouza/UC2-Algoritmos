// Interpretação
// 1.
let array
console.log('a. ', array) // Output: a. undefined

// 2.
array = null
console.log('b. ', array) // Output: b. null

// 3.
array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length) // Output: c. 11

// 4.
let i = 0
console.log('d. ', array[i]) // Output: d. 3

// 5.
array[i+1] = 19
console.log('e. ', array) // Output: e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

// 6.
const valor = array[i+6]
console.log('f. ', valor) // Output: f. 8
