const sequence = {
    _id: 1,
    get id() { return this._id++ }//pegar os id. vai retornar o proximo valor de id
}

const produtos = {}

function salvarProduto(produto) {
    if (!produto.id) produto.id = sequence.id //adiciona o id caso nao tenha
    produtos[produto.id] = produto
    return produto
}

function getProduto(id) {//pegar o id do produto como parametro
    return produtos[id] || {}
}

//retornar todos os valores do produtos
function getProdutos() {
    return Object.values(produtos)
}

function excluirProduto(id) {
    const produto = produtos[id]
    delete produtos[id]
    return produto
}

module.exports = { salvarProduto, getProduto, getProdutos,excluirProduto }