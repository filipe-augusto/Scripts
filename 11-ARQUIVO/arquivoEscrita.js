const fs = require('fs')
const produto = {
    nome: 'Celular',
    preco: 1249.99,
    desconto: 0.15
}
const texto = "lorem loremoasdsad oasdjaosd oasi ii saosjiosa osajdoas is isdaosd osaod"

fs.writeFile(__dirname + '/arquivoGeraldo.json',JSON.stringify(texto), err =>{
    console.log(err || "arquivo salvo")
})