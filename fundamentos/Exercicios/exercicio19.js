function pedidos(codigo, quatidade) {
    switch (codigo) {
        case 100:
            return ` ${codigo}\n Cachorro quente \n Quantidade: ${quatidade} \n Valor: R$ ${calculaQuantidade(3, quatidade)}`
            break
        case 200:
            return ` ${codigo}\n Hamburguer simples \n Quantidade: ${quatidade} \n Valor: R$ ${calculaQuantidade(4, quatidade)}`
            break
        case 300:
            return ` ${codigo}\n Cheeseburguer \n Quantidade: ${quatidade} \n Valor: R$ ${calculaQuantidade(5.5, quatidade)}`
            break
            case 400:
            return ` ${codigo}\n Bauru \n Quantidade: ${quatidade} \n Valor: R$ ${calculaQuantidade(7.5,quatidade)}`
            break
            case 500:
            return ` ${codigo}\n Refrigerente \n Quantidade: ${quatidade} \n Valor: R$ ${calculaQuantidade(3.5,quatidade)}`
            break
            case 600:
            return ` ${codigo}\n Suco \n Quantidade: ${quatidade} \n Valor: R$ ${calculaQuantidade(6.5,quatidade)}`
            break
            default:
                return "produto não existe"
    }
}
let calculaQuantidade = (valor, quantidade) => valor * quantidade

console.log(pedidos(200,2))
/* console.log(pedidos(200,3))
console.log(pedidos(300,4))
console.log(pedidos(400,1))
console.log(pedidos(500,2))
console.log(pedidos(600,3))
console.log(pedidos(10,2)) */





/* O cardápio de uma lanchonete é o seguinte:
Código Descrição do Produto Preço
100 Cachorro Quente R$ 3,00
200 Hambúrguer Simples R$ 4,00
300 Cheeseburguer R$ 5,50
400 Bauru R$ 7,50
500 Refrigerante R$ 3,50
600 Suco R$ 2,80
Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente. */