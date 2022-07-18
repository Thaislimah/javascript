let a = Number(window.prompt('Quantos alunos a turma tem? '))
let c = 1
let m = ''
let nome = ''
while (a >= c) {
window.alert('Aluno ' + c)
 n = window.prompt('Nome do aluno: ')
let nota = Number(window.prompt('Nota de ' + n))
c++
if (nota > m) {
    m = nota
    nome = n
 }
}
window.alert(`O melhor aproveitamento foi de ${nome} com a nota ${m}`)