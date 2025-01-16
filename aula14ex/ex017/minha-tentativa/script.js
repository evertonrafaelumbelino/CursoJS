function tabuada() {
    let txn = document.getElementById('txtn')
    let res = document.getElementById('res')
    let num = Number(txn.value)
    let nT = 1
    res.innerHTML = ''

    if (txn.value.length == 0) {
        alert('[ERRO] Digite um número')
    } else {
        for (let i = nT; i <= 10; i++) {
        let valT = num * nT
        res.innerHTML += `${num} x ${nT} = ${valT} <br>`
        nT++
        }
    }
}