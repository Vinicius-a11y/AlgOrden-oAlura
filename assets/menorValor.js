const livros = require('./listaLivros')

function menorValor(arreProdutos, posicaoInicial) {
    let maisBarato = posicaoInicial;
    
    for  (let atual = posicaoInicial; atual < arreProdutos.length; atual++) {
        if (arreProdutos[atual].preco < arreProdutos[maisBarato].preco) {
            maisBarato = atual
        }
    }
    return maisBarato
}


module.exports = menorValor
