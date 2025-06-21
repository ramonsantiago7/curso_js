let nota1 = parseFloat(prompt("Digite a primeira nota: "))
let nota2 = parseFloat(prompt("Digite a segunda nota: "))
let media = (nota1 + nota2) / 2

if (media >= 6){
    alert(`sua média é ${media}. você está aprovado.`)

} else if (media >= 4 && media < 6){
    alert(`sua média é ${media}. você está de recuperação.`)

}else {
    alert(`sua média é ${media}. você está reprovado.`)
}

