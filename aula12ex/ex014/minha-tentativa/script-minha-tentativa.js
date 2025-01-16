var agora = new Date()
var hora = agora.getHours()
var txtDiv = document.getElementById('txtdiv')
txtDiv.innerHTML += `Agora são ${hora} horas`
var img = document.getElementById('imgdiv')

if (hora < 12) {
    img.innerHTML += '<img src="../fotomanha.png" alt="foto de tarde">'
    document.body.style.background = 'rgb(70, 142, 236)'
} else if (hora >= 12 && hora < 18) {
    img.innerHTML += '<img src="../fototarde.png" alt="foto de tarde">'
    document.body.style.background = 'rgb(213, 168, 95)'
} else {
    img.innerHTML += '<img src="../fotonoite.png" alt="foto de tarde">'
    document.body.style.background = 'rgb(53, 53, 52)'
}
