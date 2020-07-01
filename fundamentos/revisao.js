
const produto = new Object
produto.nome = 'cadeira'
produto['marca do produto'] = 'generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marcar do produto']
console.log(produto)

const carro ={
    modelo:'a4',
    valor: 89000,
    propreitario:{
        nome: 'Raul',
        idade: 56,
        endereco:{
            lagradouro:'Rua ABC',
            numero:123
        }
    },
    condutores:[{
        nome: 'Junior',
        idade:19
    },{
        nome:'Ana',
        idade:42
    }],
    calcularValorSeguro: function(){
        //..
    }
}

carro.propreitario.endereco.numero =1000
carro['propreitario']['endereco']['lagradouro'] = 'Av Gigante'
console.log(carro)
delete carro.condutores
delete carro.propreitario.endereco
delete carro.calcularValorSeguro
console.log(carro)
