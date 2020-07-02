const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

//chineses
const chineses = f => f.pais === 'China'
//mulhres
const mulheres = f => f.genero === 'F'
//menor salario
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data//recebe o json
    const func = funcionarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(menorSalario)
        console.log(func)
})