const numeroSecreto = 7;
let tentativa;
let tentativasRestantes = 3;

while (tentativasRestantes > 0) {
    tentativa = parseInt(prompt(`Você tem ${tentativasRestantes} tentativa(s). Tente adivinhar o número secreto entre 1 e 10:`));
    if (tentativa === numeroSecreto) {
        alert("Parabéns! Você acertou o número secreto!");
        break;
    } else if (tentativa > numeroSecreto) {
        alert("O número é menor!");
    } else {
        alert("O número é maior!");
    }
    tentativasRestantes--;
}

if (tentativa !== numeroSecreto) {
    alert(`Suas tentativas acabaram! O número secreto era ${numeroSecreto}.`);
}