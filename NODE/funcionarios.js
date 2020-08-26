const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')
const chineses = c => c.pais ==='China'
const feminino = f => f.genero ==='F'
const menorSalario =(func, funcAtual) =>{
    return func.salario < funcAtual ? func :funcAtual
}


axios.get(url).then(response => {
    const funcionarios = response.data
    const func = funcionarios
    .filter(chineses)
    .filter(feminino)
    .reduce(menorSalario)
console.log(func)
})