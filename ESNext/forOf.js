
//percorre pelo valor
for(let letra of "Cod3er"){//percorre pelo valor
    console.log(letra)
}
const assuntosEcma = ['Map','Set','Promisse']
for (let i in assuntosEcma){//percorre pelo indice
    console.log(i)
}

for(let assunto of assuntosEcma){//percorre pelo valor
    console.log(assunto)
}

const assuntosMap = new Map([
    ['Map',{abordado: true}],
    ['Set',{abordado:true}],
    ['Promise',{abordado:false}]   
])

for(let assunto of assuntosMap){//chave e valor
    console.log(assunto)
}

for(let chave of assuntosMap.keys()){//chave
    console.log(chave)
}

for(let valor of assuntosMap.values()){//valor
    console.log(valor)
}

for(let[ch, vl] of assuntosMap.entries()){//os dois
console.log(ch,vl)
}
const s = new Set(['a','b','c'])
for(let letra of s){
    console.log(letra)
}
