let a = parseFloat(prompt("Digite o valor do primeiro lado:"));
let b = parseFloat(prompt("Digite o valor do segundo lado:"));
let c = parseFloat(prompt("Digite o valor do terceiro lado:"));

if (
    a + b > c &&
    a + c > b &&
    b + c > a
) {
    alert("Os valores podem formar um triângulo.");
} else {
    alert("Os valores NÃO podem formar um triângulo.");
}