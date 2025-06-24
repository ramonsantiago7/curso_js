function verificar() {
    let numInput = document.querySelector('#num');
    let res = document.querySelector('#res');

    if (numInput.value.length === 0) {
        alert('[ERRO] Por favor, digite um número.');
        res.innerHTML = '';  // Limpa o resultado caso o campo esteja vazio
    } else {
        let num = Number(numInput.value);

        if (num % 3 === 0 && num % 5 === 0) {
            res.innerHTML = `O número ${num} é múltiplo de 3 e 5.`;
        } else {
            res.innerHTML = `O número ${num} não é múltiplo de 3 e 5.`;
        }
    }
}
