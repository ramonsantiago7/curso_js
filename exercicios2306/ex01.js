function verificarImparOupar(){
let numero = parseInt(prompt('Digite um número: '));
if (isNaN(numero)) {
    console.log('digite um número válido')
} else if(numero % 2 === 0) {
    console.log('o número é par')
} else {
    console.log('o número é ímpar')
}
}
