function verificar() {
    let resultado = document.querySelector('#res');
    resultado.innerHTML = ''; // Limpa o conteúdo antes de começar

    for (let i = 10; i >= 1; i--) {
        resultado.innerHTML += i + '<br>';
    }

    resultado.innerHTML += 'FIM!';
}
