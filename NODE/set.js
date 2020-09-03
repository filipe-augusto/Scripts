//nao aceita repetição /nao indexida

const { set } = require("lodash")

const times = new Set()
times.add('vasco')
times.add('sao paulo').add('palmeiras').add('Corinthians')
times.add('flamengo')
times.add('vasco')
console.log(times);
console.log(times.size);
console.log(times.has('vasco'))
times.delete('flamengo')
console.log(times.has('flamengo'));

const nomes = ['filipe','augusto','santos','filipe']
const nomesSet = new Set(nomes)
console.log(nomesSet);
