let username = prompt("Digite um nome de usuario:")
let senha = prompt("Digite a senha:")

if (username == "admin" && senha == "senha123") {
    console.log("Login bem sucedido")
} else {
    console.log ("Voce não tem permissão de acesso!")
}