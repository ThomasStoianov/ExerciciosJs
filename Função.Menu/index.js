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