const carrinho = [
    '{"nome":"borracha","preco":3.45}',
    '{"nome":"Caderno","preco":13.90}',
    '{"nome":"kit de lapis","preco":41.22}',
    '{"nome":"caneta","preco":7.50}'
]
//retornar um array apenas com os precos
const paraObjeto = json => JSON.parse(json)//passe para obj
const apenasPreco = produto => produto.preco//coloque apenas o preco
const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(carrinho.map(paraObjeto))
console.log(resultado)