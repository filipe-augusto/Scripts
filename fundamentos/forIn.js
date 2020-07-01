
const notas = [6.7,7.4,9.8,8.1,7.7]

for(let i in notas){
    console.log(i, notas[i])
}

const pessoa = {
nome:'Ana',
sobrenome: 'Silva',
idade: 29,
peso:64
}

for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}

const obj ={
    id:1,
    nome:"filipe",
    idade: 26,
    nascimento:'04/07/2000',
    nascionalidade:'Brasil',
    genero:'Masculino',
    profissao: 'Suporte tecnico Junior',
    cep:01654
}

for(let atributo in obj){
    console.log(`${atributo} : ${obj[atributo]}`)
}

const arrayX = ['banana','arroz','feijao','carne']

for(atrib in arrayX){
    console.log(`${atrib}: ${arrayX[atrib]}`)
}