const porta = 3003
const express = require('express') //importa express, arquivo index.js
const bodyParser = require('body-parser')
const app = express()
const bancoDeDados = require('./bancoDeDados')
app.use(bodyParser.urlencoded({extended:true}))//se o padrao for urlencoded transforma em objeto

app.get('/pessoas',(requisicao, resposta, next)=>{//funcao middleware
    resposta.send(bancoDeDados.getPessoas())//converte para JSON
})

app.get('/pessoas/:id',(req,res,next)=>{
    res.send(bancoDeDados.getPessoa(req.params.id))//dentro de params tem o id que foi passada pelo url
})
//incluir
app.post('/pessoas',(req,res,next)=>{
    const pessoa = bancoDeDados.salvarPessoa({
        nome: req.body.nome,
        idade: req.body.idade,
        genero: req.body.genero
    })
    res.send(pessoa) //converte para JSON
})
//alterar
app.put('/pessoas/:id',(req,res,next)=>{
    const pessoa = bancoDeDados.salvarPessoa({
        id: req.params.id,
        nome: req.body.nome,
        idade: req.body.idade,
        genero: req.body.genero
    })
    res.send(pessoa) //converte para JSON
})
//deleta
app.delete('/pessoas/:id',(req,res,next)=>{
    const pessoa = bancoDeDados.excluirPessoa(req.params.id)
    res.send(pessoa) //converte para JSON
})

app.listen(porta, ()=>{
    console.log(`servidor executando na porta ${porta}.`)
})