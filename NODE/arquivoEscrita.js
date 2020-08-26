const fs = require('fs')
const produto = {
    nome: 'notebook',
    preco:12.98,
    desconto: 0.15,
    loja:'Bras Roupas'
}

fs.writeFile(__dirname + '/arquivoGerado.js',JSON.stringify(produto), err =>{
    console.log(err || 'arquivo salvo!')
})//objeto para JSON


