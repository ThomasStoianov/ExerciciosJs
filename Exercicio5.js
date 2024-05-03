// Exercício 5: Verificação de números em ordem crescente
// Escreva um programa que solicita três números ao usuário e verifica se eles estão em ordem crescente. Exibindo uma mensagem indicando se os números estão em ordem crescente ou não.

let numero1 = prompt ("Digite o número")
let numero2 = prompt ("Digite o número")
let numero3 = prompt ("Digite o número")

if (numero1 < numero2 && numero2 < numero3) {
    console.log ("Ordem crescente")
}

else {
    console.log ("Ordem decrescente")
}