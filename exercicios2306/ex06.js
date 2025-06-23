function calcular(){
    let numerosPares = '';
    let soma = 0;

    for (let i = 2; i <= 100; i += 2) {
        numerosPares += i + (i < 100 ? ' + ' : '');
        soma += i;
    }

    console.log(`Números pares entre 1 e 100: ${numerosPares} = ${soma}`);
    console.log(`A soma de todos os números pares entre 1 e 100 é: ${soma}`);
}

calcular()