function contar() {
    var txi = document.getElementById('txti')
    var txf = document.getElementById('txtf')
    var txp = document.getElementById('txtp')
    var res = document.getElementById('res')

    if (txi.value.length == 0 || txf.value.length == 0 || txp.value.length == 0) {
        alert('[ERRO] Digite os dados corretamente')
    } else {
        res.innerHTML = 'Contando: <br>' 
        var nI = Number(txi.value)
        var nF = Number(txf.value)
        var nP = Number(txp.value)

        if (nI <= nF) {
            for (let i = nI; i <= nF; i += nP) {
                res.innerHTML += `${i} `
            }
        } else if (nI >= nF) {
            for (let i = nI; i >= nF; i -= nP) {
                res.innerHTML += `${i} `
            }
        }
    }
}