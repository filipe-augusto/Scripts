//operador ... rest(juntar) /spread (espalhar)
const funcionario = {nome: "maria", salario: 1234.99}
const clone = {ativo: true, ...funcionario}

console.log(clone);

//usanr spread com array
const grupoA = ['joao','pedro', 'gloria']
const grupoFinal = ['maria',...grupoA,'Rafaela']
console.log(grupoFinal);

const pessoa = {nome:'Filipe', salario: 1231}
const clone = {ativo: true, ...pessoa}

console.log(clone);

const frutas = ['uva', 'abacaxi', 'pera','laranja']
const todasFrutas = [...frutas, 'coco','limao']
console.log(todasFrutas);