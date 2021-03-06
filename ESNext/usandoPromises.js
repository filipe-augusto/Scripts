//sem promise
const http = require('http')

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
   return new Promise((resolve,reject)=>{
    http.get(url, res => {
        let resultado = ''
        res.on('data', dados => {//os dados serão concatenados na variavel resultado
            resultado += dados
        })
        res.on('end', () => {
          try{
              resolve(JSON.parse(resultado))
          }catch(e){
              reject(e)
          }
        })
    })
   })
}

Promise.all([getTurma('A'), getTurma('B'), getTurma('C')]) //passando um array de funções
.then(turmas => [].concat(...turmas)) 
.then(alunos =>alunos.map(aluno =>aluno.nome))
.then(nomes => console.log(nomes))
getTurma('D').catch(e=> console.log(e.message))