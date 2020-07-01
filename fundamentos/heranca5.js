function Aula(nome, videoID){// criei o obj
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bem vindo',123) //herdei
const aula2 = new Aula('Até breve',456)
console.log(aula1,aula2)

//simulando o new
function novo(f, ...params){
    const obj = {} //cria um obj vazio
    obj.__proto__ =f.prototype //aponte para funcao
    f.apply(obj.params)//vai receber um conjunto de parametros e concatenar
    return obj
}

const aula3 = novo(Aula,'bem vindo',123)
const aula4 = novo(Aula,'até breve',456)
console.log(aula3,aula4)