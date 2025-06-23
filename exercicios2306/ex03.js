/*Contagem regressiva Peça um número inteiro positivo e exiba uma 
contagem regressiva do número até 0.*/

function contagem(){
    let numero = parseInt(prompt('Digite um número inteiro positivo: '))

    if (isNaN(numero) || numero < 0){
        alert('Número inválido, por favor digite um número valido!')
    } else {
        let contagemRegressiva = ''
        for (let i = 0; i <= numero; i++){
            contagemRegressiva += (numero - i) + (i < numero ? ', ' : '')
        }
        alert(`Contagem regressiva: ${contagemRegressiva}`)
    }
}
contagem()
