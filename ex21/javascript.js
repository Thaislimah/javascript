function clicar() {
    let a = Number(document.getElementById('num').value)
    switch (a) {
        case 1:  
            c = 1
            do {  
                document.write(c + ' ... ')
                c++
            } while(c <= 10)
        break
        case 2:
            c = 10
            do {
                document.write(c + ' ... ')
                c--
            } while(c >= 1) 
        break
        case 3:
            document.write('Saindo...')
        break
        default:
            window.alert('[ERRO] ESCREVA APENAS DE 1 ATÉ 3')
        break    
    }
}