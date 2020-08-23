const { set } = require("lodash")

//não aceita repetição/não indexada
const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('Cortinthians')
times.add('Flamengo')
times.add('Vasco')
console.log(times)
console.log(times.size) //tamanho
console.log(times.has('vasco'))
console.log(times.has('Vasco'))
times.delete('Flamengo')    //exclui
console.log(times.has('Flamengo'))

const nomes = ['Raquel','Lucas','Julia','Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet)