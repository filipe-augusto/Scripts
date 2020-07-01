const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop()//remove o ultimo elemento do array

pilotos.push('verstappen')//adiciona um elemento no final
pilotos.shift()//remove o primiero do array
console.log(pilotos)
pilotos.unshift('Hamilton')//adiciona um elmento no inicio do array
console.log(pilotos)

//splice pode adicionar e remover elementos
//vai adicionar 2 elementos
pilotos.splice(2,0,'Bottas','Massa')//vai adicionar ou remover no indice dois. Vai remover 0 elementos.
console.log(pilotos)
//remover
pilotos.splice(3,1) //remove no indice 3 um elemento

const algunsPilotos = pilotos.slice(2) //novo array - pega apartir do indice dois os elementos seguintes
console.log(algunsPilotos)

const algunsPilotos2 = pilotos.slice(1,4) //pega elementos do indice 1 ou 4 para formar um novo array