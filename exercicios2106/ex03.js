let contagem = ''

for (let i = 10; i >= 0; i--) {
    contagem += i + (i > 0 ? ', ' : '')
}

console.log(`A contagem regressiva é: ${contagem}`)
// saída: A contagem regressiva é: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1,