const porta = 3003
const express = require('express')
const app = express()
const bancoDeDados = require('./bancoDeDados ')
app.get('/produtos',(req,res,next)=>{
 console.log('middleware 1...')
 next()
})

app.get('/produtos',(req,res,next)=>{
    res.send({nome: 'notebook',preco: 123.45})
})
app.listen(porta, ()=>{
    console.log(`servidor executando na prota ${porta}.`)
})