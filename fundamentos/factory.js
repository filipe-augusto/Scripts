function criarPessoa(){ 
    return {
        nome: 'ana',
        sobrenome: 'silva',    
    } 
}
console.log(criarPessoa())
//-----------------------
function criarProduto(nome, preco){ 
    const x = 0;
    return {
        nome, preco,
         desconto: 0.1
    } 
}
console.log(criarProduto('notebook',2199))
console.log(criarProduto('ipad',1199.99))
console.log(criarProduto('mouse',20.99))