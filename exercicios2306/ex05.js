function verificarOMaior() {
    alert('Digite 3 números para saber qual é o maior deles');
    
    let n1 = parseInt(prompt('Digite o primeiro número: '));
    let n2 = parseInt(prompt('Digite o segundo número: '));
    let n3 = parseInt(prompt('Digite o terceiro número: '));

    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
        alert('Por favor, digite apenas números válidos.');
    } else if (n1 > n2 && n1 > n3) {
        alert(`O número ${n1} é o maior`);
    } else if (n2 > n1 && n2 > n3) {
        alert(`O número ${n2} é o maior`);
    } else if (n3 > n1 && n3 > n2) {
        alert(`O número ${n3} é o maior`);
    } else {
        alert('Existe empate entre os números.');
    }
}

verificarOMaior();
// ou temos esse

function verificarOMaior2() {
    alert('Digite 3 números para saber qual é o maior deles');

    let n1 = parseInt(prompt('Digite o primeiro número: '));
    let n2 = parseInt(prompt('Digite o segundo número: '));
    let n3 = parseInt(prompt('Digite o terceiro número: '));

    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
        alert('Por favor, digite apenas números válidos.');
        return;
    }

    let maior = Math.max(n1, n2, n3);

    alert(`O maior número é ${maior}`);
}

verificarOMaior2();
