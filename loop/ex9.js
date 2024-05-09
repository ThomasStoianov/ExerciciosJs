// 9. Faça um programa que receba um número do usuário e mostre
// no console a contagem regressiva até 0.

let num = parseInt(prompt("Digite um número para a contagem regressiva"))

console.log("Contagem regressiva está começando em: " + num)

while(num >= 0) {
    console.log(num);
    num--;
}

console.log("Contagem regressiva finalizada!")