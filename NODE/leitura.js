const fs = require('fs')//modulo 

//sincrono ... 
const caminho = __dirname + '/arquivo.json'

//sincrono
const conteudo = fs.readFileSync(caminho,'utf-8')
console.log(conteudo)

//assincrono...
fs.readFile(caminho, 'utf-8',(err, conteudo)=>{ //ler um arquivo
    const config = conteudo
   // console.log(`${config.db.host}:${config.db.port}`)
})
const config = require('./arquivo.json')
console.log(config)

fs.readdir(__dirname,(err,arquivos)=>{
    console.log('conteudo da pasta')
    console.log(arquivos)
})