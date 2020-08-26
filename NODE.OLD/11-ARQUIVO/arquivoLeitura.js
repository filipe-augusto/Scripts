const fs =require('fs')
const caminho = __dirname + '/arquivo.json'
const caminho2 = __dirname + '/texto.txt'
//sincrono
const conteudo = fs.readFileSync(caminho,'utf-8')

console.log(conteudo)

//assincrono ...
fs.readFile(caminho, 'utf-8',(err,conteudo)=>{
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})
//usando require
const config = require('./arquivo.json')
console.log(config.db)

//ler pastas
fs.readdir(__dirname,(err,arquivos)=>{
    console.log('conteudo da pasta...')
    console.log(arquivos)
})
//lendo um txt
const conteudo2 = fs.readFileSync(caminho2,'utf-8')
console.log(conteudo2)
