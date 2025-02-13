let currentBalance = 0.00

function updateBalance() {
    document.getElementById("saldo").innerHTML = currentBalance.toFixed(2)
}

function deposit() {
    value = parseFloat(document.getElementById('numeroRecebido').value)

    if (isNaN(value) || value <= 0) {
        console.log(value)
        alert("Número inválido!")
    } else {
        currentBalance += value
        updateBalance()
    }
}

function withdraw() {
    value = parseFloat(document.getElementById('numeroRecebido').value)

    if (value <= currentBalance && value > 0) {
        currentBalance -= value
        updateBalance()
    } else 
        alert("Valor inválido inserido!")
}