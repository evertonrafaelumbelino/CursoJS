function adicionar() {
    let txn = document.getElementById('txtn')
    let n = Number(txn.value)
    let sel = document.getElementById('sel')
    let lista = []

    if (n.length == 0 || n > 100 || n < 1) {
        alert('[ERRO] Valor inválido ou já encontrado na lista')
    } else {
        let valL = lista.push(n)
        sel.innerHTML += document.createElement('option')
        sel.option = `Valor ${valL} adicionado.`
    }
}

function finalizar() {

}