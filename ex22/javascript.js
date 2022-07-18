let a = ''
let b = ''
let r = '' 
let d = ''
let h = Number('')
let m = Number('')
do {
    let a = window.prompt('Qual o sexo? [M/F]')
    let b = Number(window.prompt('Qual a idade? '))
    let d = Number(window.prompt('Qual a cor do cabelo?  [1] para Preto, [2] para Castanho, [3] para Loiro, [4] para Ruivo'))
    r = window.prompt('Quer continuar? [S/N] ') 
    if (a == 'm' && b > 18 && d == 2) {
        h += 1
    } else if (a == 'f' && b >= 25 && b <= 30 && d == 3) {
        m += 1
      }  
} while(r == 's')
alert(`Total de homens com mais de 18 anos e cabelos castanhos: ${h}. Total de mulheres entre 25 e 30 anos: ${m} `)


/*do {
    
    
    let r = window.prompt('Quer continuar? [S/N] ')      
    
    } 
 }  while (r == 'n')*/
 
 






