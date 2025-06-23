/*Tabuada de um número
Peça ao usuário um número inteiro 
e exiba a tabuada dele (do 1 até o 10).*/

function tabuada(){
    let numero = parseInt(prompt('Digite um número inteiro: '));
    
    if (isNaN(numero)) {
        alert('Por favor, digite um número válido.');
    } else {
        let resultado = '';
        for (let i = 1; i <= 10; i++) {
            resultado += `${numero} x ${i} = ${numero * i}\n`;
        }
        alert(`Tabuada do ${numero}:\n${resultado}`);
    }
}

tabuada();