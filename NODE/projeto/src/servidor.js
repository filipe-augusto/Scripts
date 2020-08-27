const porta = 3003
const express = require('express') //importa express, arquivo index.js
const bodyParser = require('body-parser')
const app = express()
const bancoDeDados = require('./bancoDeDados')

app.use(bodyParser.urlencoded({extended:true}))//se o padrao for urlencoded transforma em objeto

app.get('/produtos',(requisicao, resposta, next)=>{//funcao middleware
    resposta.send(bancoDeDados.getProdutos())//converte para JSON
})

app.get('/produtos/:id',(req,res,next)=>{
    res.send(bancoDeDados.getProduto(req.params.id))//dentro de params tem o id que foi passada pelo url
})

app.post('/produtos',(req,res,next)=>{//incluir
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //converte para JSON
})

app.put('/produtos/:id',(req,res,next)=>{//alterar
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //converte para JSON
})

app.delete('/produtos/:id',(req,res,next)=>{//alterar
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto) //converte para JSON
})

/* app.use('/produtos',(requisicao, resposta, next)=>{
    resposta.send({nome: 'notebook - POST', preco: 123.45})//converte para JSON
}) */



//qual porta eu vou ficar executando a aplicação
app.listen(porta, ()=>{
        console.log(`servidor executando na porta ${porta}.`)
})