// AND (&&)
let age = 20;
let enoughAge = age >= 18;
let hasHabilitation = true
let hasCar = true

console.log("Essa pessoa é apta à dirigir?", (enoughAge && hasHabilitation && hasCar));

// OR (||)
let temTrabalho = true
let economiza = true
let investe = true
let herdeiro = true

console.log((temTrabalho && economiza && investe) || herdeiro)

// NOT (!)
let ligado = true

console(!ligado)
