let ano = parseInt(prompt("Digite um ano: "));
if (isNaN(ano) || ano < 0) {
    alert("Por favor, digite um ano válido.");
} else {
    let bissexto = (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
    if (bissexto) {
        alert(`${ano} é um ano bissexto.`);
    } else {
        alert(`${ano} não é um ano bissexto.`);
    }
}