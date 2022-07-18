

function adicionar() {
    var num = document.querySelector('input#fnun')
var lista = document.querySelector('select#flista')
var res = document.querySelector('div#res')
var valores = []
    if(isnumero(num.value) && !inlista(num.value, valores)) {
        valores.push(Number(num.value))
        var item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
     }
}

function inlista(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function isnumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
     }
}



