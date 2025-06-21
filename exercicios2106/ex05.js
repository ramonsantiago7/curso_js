let n = parseInt(prompt("Digite um número inteiro positivo: "));
let soma = 0;
let expressao = '';

if (n > 0) {
    for (let i = 1; i <= n; i++) {
        soma += i;
        expressao += i + (i < n ? ' + ' : '');
    }
    alert(`A soma de 1 até ${n} é: ${expressao} = ${soma}`);
} else {
    alert("Por favor, digite um número inteiro positivo.");
}
