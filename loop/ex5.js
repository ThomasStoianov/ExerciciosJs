// 5. Imprimir os primeiros 10 números da sequência de Fibonacci.

num1 = 0
num2 = 1

for (cont = 1; cont <= 10; cont++){
    result = num1 + num2

    num1 = num2
    num2 = result

    console.log (result)
}