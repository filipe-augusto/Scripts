class Produto {
    constructor(nome, preco, desconto) {
        this.nome = nome
        this.preco = preco
        this.desconto = desconto
    }
    calcDesconto(x, y) {
        const desc = this.preco - (this.preco * this.desconto)
        return desc
    }
}
const cafe = new Produto('cafe', 5, 0.5)
const pao = new Produto('pão', .5, 0.5)
const acucar = new Produto('açucar', 2, 0.5)
const leite = new Produto('leite', 5, .5)
const compra = []
compra.push([cafe, 2])
compra.push([pao, 10])
compra.push([acucar, 5])
compra.push([leite, 3])
compra.forEach((element, indice) => {
    console.log(` ${element[0].nome} - R$ ${element[0].preco} - desconto: ${element[0]
        .desconto * 100}% - quantidade: ${element[1]}`);
})
const calculaDesconto = a => a[0].calcDesconto() * a[1]
const calculaQuantidade = a => a[0].preco * a[1]
const valorCompra = (acumulador, atual) => acumulador + atual

console.log(` Total: R$${compra.map(calculaQuantidade).reduce(valorCompra)}`);
console.log(` Total Desconto :R$ ${compra.map(calculaDesconto).reduce(valorCompra)}`);