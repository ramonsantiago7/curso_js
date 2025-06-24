let soma = 0;

function adicionar() {
    let numInput = document.querySelector('#num');
    let res = document.querySelector('#res');
    let num = Number(numInput.value);

    if (num < 0) {
        alert('Número negativo não será somado.');
    } else if (num > 0) {
        soma += num;
    } else if (num === 0) {
        res.innerHTML = `A soma dos números positivos foi: <strong>${soma}</strong>.`;
        // Reseta a soma para nova sequência, se quiser continuar usando a página
        soma = 0;
    }

    numInput.value = '';
    numInput.focus();
}
