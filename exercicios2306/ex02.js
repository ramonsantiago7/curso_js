//Calcular a média e verificar aprovação

function calcularMedia(){
    let nota1 = parseFloat(prompt('Digite a primeira nota: '));
    let nota2 = parseFloat(prompt('Digite a segunda nota: '))
    let nota3 = parseFloat(prompt('Digite a terceira nota: '))

    let media = (nota1 + nota2 + nota3) / 3

    if(isNaN(nota1) || isNaN(nota2) || isNaN(nota3)){
        alert('ERRO, digite novamente')     
    } else if (media >= 7){
        alert('Você esta aprovado')
    } else {
        alert('Você esta reprovado')
    }

}

calcularMedia()