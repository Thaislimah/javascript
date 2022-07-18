   function contar() {
     var início = document.getElementById('começo')
     var fim = document.getElementById('final')
     var passo = document.getElementById('passos')
     var resp = document.getElementById('resposta') 
     if (início.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
         resp.innerHTML = 'Impossivel contar!'
         window.alert('[ERRO] Faltam dados!')
     } else {
        resp.innerHTML = 'Contando: <br>'
        var i = Number(início.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo inválido! considerando PASSO 1')
            p = 1
        }
            
        if (i < f) {
        for(var c = i; c <= f; c += p) {
            resp.innerHTML += `${c} \u{1F449}`
        }
      } else {
          for(var c = i; c >= f; c -= p) {
            resp.innerHTML += `${c} \u{1F449}`
          }
      }
      resp.innerHTML += `\u{1F3C1}`
    }  
         
 } 
    

