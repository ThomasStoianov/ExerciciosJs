// Exercício 4: Notas escolares
// Faça um programa que receba 4 notas de um aluno, calcule e imprima a média aritmética das notas e a mensagem de APROVADO para média superior ou igual a 7,0 RECUPERAÇÃO para notas entre 5.0 e 7,0 ou a mensagem de REPROVADO para média inferior a 5,0.


let nota1 = parseFloat(prompt ("Digite sua primeira nota"))
let nota2 = parseFloat(prompt("Digite sua segunda nota"))
let nota3 = parseFloat(prompt ("Digite sua terceira nota"))
let nota4 = parseFloat(prompt("Digite sua quarta nota"))

let soma = parseFloat (nota1 + nota2 + nota3 + nota4)
let media = parseFloat (soma/4)

if (media >= 7.0) {
    console.log ("Aprovado")
}

else if (media <7.0 && media >=5.0) {
    console.log("Recuperação")
}

else {
    console.log ("REPROVADO")
}