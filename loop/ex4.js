// 4. Faça um programa que imprima na tela a tabuada de um número
// qualquer escolhido pelo usuário até o 10.

let numero = parseInt(prompt("Digite um número de 1 a 10"))

if (!isNaN(numero)) {
    for (let tabuada  = 1; tabuada <= 10; tabuada++) {
        console.log(tabuada * numero)
    }
}

else {
    console.log("Numero invalido. Por favor, digite um numero válido")
}
