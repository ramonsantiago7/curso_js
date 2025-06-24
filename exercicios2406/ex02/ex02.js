function verificarMedia() {
    let nota1 = parseFloat(document.querySelector('#num').value);
    let nota2 = parseFloat(document.querySelector('#num2').value);
    let nota3 = parseFloat(document.querySelector('#num3').value);
    let resultado = document.querySelector('#res');

    // Verificar se todas as notas são números válidos
    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        resultado.innerHTML = '<span style="color: red;">ERRO: Preencha todas as notas corretamente.</span>';
    } else {
        let media = (nota1 + nota2 + nota3) / 3;
        media = media.toFixed(2);  // Deixar com 2 casas decimais

        let mensagem = `<p>A média das notas ${nota1}, ${nota2}, ${nota3} é <strong>${media}</strong>.</p>`;

        if (media >= 7) {
            mensagem += `<p style="color: green;">✅ Com a sua média em ${media}, você está <strong>APROVADO!</strong></p>`;
        } else {
            mensagem += `<p style="color: red;">❌ Com a sua média em ${media}, você está <strong>REPROVADO!</strong></p>`;
        }

        resultado.innerHTML = mensagem;

        // Ativar o efeito de fade-in
        resultado.classList.remove('mostrar');
        setTimeout(() => {
            resultado.classList.add('mostrar');
        }, 10);

        // (Opcional) Limpar os campos das notas
        document.querySelector('#num').value = '';
        document.querySelector('#num2').value = '';
        document.querySelector('#num3').value = '';
        document.querySelector('#num').focus();
    }
}
