
function contar() {
 let i = Number(document.getElementById("ini").value)
 let f = Number(document.getElementById("fim").value)  
  if (i < f) {
    do {
     document.write(i + ' ... ')
     i++
     } while(i <= f)
   } else {
        do {
            document.write(i + ' ... ')
            i--
        } while(i >= f)
   }
}

