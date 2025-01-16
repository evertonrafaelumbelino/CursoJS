function clicar() {
    var fano = document.getElementById('fnasc')
    var data = new Date()
    var ano = data.getFullYear()
    var idade = ano - fano.value
    var res = document.getElementById('res')
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fano.value.length == 0 || fano.value > ano) {
        alert('[ERRO] Verifique os dados novamente')
    } else {
        var fsex = document.getElementsByName('fsex')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.src = 'foto-bebe-m.png'
            } else if (idade < 21) {
                //Jovem
                img.src = 'foto-jovem-m.png'
            } else if (idade < 50) {
                //Adulto
                img.src = 'foto-adulto-m.png'
            } else {
                //Idoso
                img.src = 'foto-idoso-m.png'
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.src = 'foto-bebe-f.png'
            } else if (idade < 21) {
                //Jovem
                img.src = 'foto-jovem-f.png'
            } else if (idade < 50) {
                //Adulto
                img.src = 'foto-adulto-f.png'
            } else {
                //Idoso
                img.src = 'foto-idoso-f.png'
            }
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Você é ${genero} e tem ${idade} anos`
    res.appendChild(img)
}