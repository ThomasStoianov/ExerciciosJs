// Fazer um menu de exercícios utilizando exemplos dado em aula. Criar um menu, onde é possível executar 6 dos exercícios anteriores.
// Cada exercício deve ser encapsulado em uma função, e o menu deve executar essas funções.
// O usuário poderá escolher qual exercício ele quer visualizar.
// O usuário deverá digitar 0 para sair do menu.     

function ex1 () {
    for(let cont=1; cont <=10; cont++){
        console.log(cont);
    }
}

function ex2 () {
    for (let cont = 2; cont<=10; cont+=2) {
        console.log(cont)
    }
}

function ex5 () {
    num1 = 0
    num2 = 1

for (cont = 1; cont <= 10; cont++){
    result = num1 + num2

    num1 = num2
    num2 = result

    console.log (result)
}
}

function ex6() {
    let par = 0

while(par < 20) {
    par += 2;

    console.log(par)
}
}

function ex8() {
    let idade = 0

while (idade < 18) {
    idade = parseInt(prompt('digite sua idade: '))

}

console.log("maior de idade")
}

function ex10() {
    let num;

do {
    num = parseInt(prompt("Digite um número(Digite 0 para sair)"))
} while(num !==0)

console.log("Voce digitou 0. O programa foi encerrado")
}

do {
    option = parseInt(prompt("Digite uma das opções: \n 1 - Imprimir números de 1 a 10 utilizando o loop for\n2 - Imprimir números pares de 1 a 10.\n 3 - Imprimir os primeiros 10 números da sequência de Fibonacci.\n 4 -  Imprimir números pares de 0 a 20 utilizando o loop while\n 5 - Faça um programa que receba a idade do usuário, enquanto a resposta do usuário for menor que 18 anos continue a solicitar a idade e mostre uma mensagem quando a idade do usuário for maior que 18.\n 6 - Faça um programa que receba um número do usuário e continue a pedir o número se o numero for diferente de 0.\n Digite 0 para sair"))

    switch (option) {
        case 1:
            ex1 ()
            break

    case 2:
        ex2 ()
        break
        
    case 3:
        ex5 ()
        break

    case 4:
        ex6 ()
        break
        
    case 5:
        ex8 ()
        break
        
    case 6:
        ex10 ()
        break    
    }

}while(option !== 0)