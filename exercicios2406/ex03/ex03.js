function tabuada(){
    let numero = document.querySelector('#num')
    let tab = document.querySelector('#seltab')

    if(numero.value.length === 0 ){
        alert('[ERRO] Por favor digite um número.')
    } else {
        let n = Number(numero.value)
        let c = 1

        tab.innerHTML = '' // Limpa o conteúdo da tabela antes de gerar a nova tabuada
        tab.style.display = 'block' // Exibe a tabela de resultados
        tab.style.width = '100%' // Define a largura da tabela para 100%
        tab.style.height = '100%' // Define a altura da tabela para 200px
        tab.style.overflowY = 'auto' // Adiciona rolagem vertical se necessário
        num.value = '' // Limpa o campo de entrada após gerar a tabuada

        while(c <= 10 ){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}