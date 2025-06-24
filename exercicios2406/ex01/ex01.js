/*function verificar(){
let numero = parseInt(prompt('Digite um número inteiro: '))

if(isNaN(numero)){
    alert('ERRO, digite um número valido.')
} else {
    if(numero % 2 === 0){
        alert(`o número ${numero} é par`)
    } else {
        alert(`o número ${numero} é impar`)
    }
}
}*/

function verificar(){
    let numero = document.querySelector('#num').value
    let resultado = document.querySelector('#res')
    numero = parseInt(numero)

    resultado.classList.remove('mostrar')

    if(isNaN(numero)){
        resultado.innerHTML = '<span style="color: red;">ERRO: Digite um número válido.</span>'
    } else {
        if(numero % 2 === 0){
            resultado.innerHTML = `✅ O número <strong>${numero}</strong> é <span style="color: blue;">PAR</span>.`
        } else {
            resultado.innerHTML = `✅ O número <strong>${numero}</strong> é <span style="color: green;">ÍMPAR</span>.`
        }
    }

    setTimeout(() => {
        resultado.classList.add('mostrar');
    }, 10)
}

 // Limpando o campo de input
    document.querySelector('#num').value = '';

    // (Opcional) Colocando o cursor de volta no campo pra digitar outro número
    document.querySelector('#num').focus();