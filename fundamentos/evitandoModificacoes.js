
//object.prevenExtensions
const produto = Object.preventExtensions({//nao vai conseguir adiconar novas atributos, 
    //esta previndo de aumentar
    nome: 'qualquer', preco:1.99, tag:'promoção'
})

console.log('extensivel:', Object.isExtensible(produto))
produto.nome = "borracha"
produto.descricao = "borracha  escolar branca"
delete produto.tag

console.log(produto)

//object.seal

const pessoa = {nome: 'juliana',idade:35}// ao selar um obj voce nao consegue novos atributos, excluir,
                               // mas voce consegue modificar   
Object.seal(pessoa)
console.log('Selado',Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva' // nao consegue adicionar um novo atributo
delete pessoa.nome // nao conseguiu 
pessoa.idade = 29 
console.log(pessoa)

// object.frezze
//nao consegue incluir, excluir chaves e nao consegue modificar os valores