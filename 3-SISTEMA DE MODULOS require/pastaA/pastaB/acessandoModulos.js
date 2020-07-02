const modulaA = require('../../../1-MODULOS/moduloa')

console.log(modulaA.ola)

/* const http = require('http')
http.createServer((req,res)=>{
    res.write('bom dia!')
    res.end()
}).listen(8080) */

const c = require('./pastaC/index')
console.log(c.ola2)