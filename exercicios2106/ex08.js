let senha = parseInt(prompt("Digite a senha: "))

if (senha === 1234) {
    alert("Acesso permitido")
} else {
    let tentativas = 1
    while (tentativas < 3) {
        senha = parseInt(prompt("Senha incorreta. Tente novamente: "))
        if (senha === 1234) {
            alert("Acesso permitido")
            break
        }
        tentativas++
    }
    if (tentativas === 3) {
        alert("Acesso negado")
    }
}