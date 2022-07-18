function carregar() {
    var msg = window.document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'manha.png'
        document.body.style.background = '#B06D01'
    } else if (hora <= 18) {
        img.src = 'tarde.png'
        document.body.style.background = '#873100'
    } else {
        img.src = 'noite.png'
        document.body.style.background = '#181B2F'
    }

}