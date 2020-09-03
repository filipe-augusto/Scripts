//for of intera em cima de valores

for(let letra of "Cod3er"){
    //console.log(letra);
}

const assuntosEcma = ['map', 'set','promise']

for(let i in assuntosEcma){//pega o indice
  //  console.log(i);
}

for (let assunto of assuntosEcma ){
    console.log(assunto);//percorre os valores
}
//criou um array map com chave e valor
const assuntoMap = new Map([
    ['map',{abordado:true}],
    ['set',{abordado:true}],
    ['promise',{abordado:false}]
])

for(let assunto of assuntoMap){
    console.log(assunto);//percorre os as chaves
}
for(let chave of assuntoMap.keys()){//chave
    console.log(chave);
}

for(let valor of assuntoMap.values()){//valores
    console.log(valor);
}
for(let [ch,vl] of assuntoMap.entries()){//valores e chaves
    console.log(ch,vl);
}

const s = new Set(['a','b','c'])
//percorrendo um set
for(let letra of s){
    console.log(letra);
}

//exercicios
for (let letra of 'Filipe augusto santos chaves trabalha bem'){
    // console.log(letra);
 }
 const analistas = ['filpe','felipe','philipe','filipe']
 
 for(let nomes in analistas){
    // console.log(nomes);
 }
 for(let nomes of analistas){
  //   console.log(nomes);
 }
 
 const operacoes = new Map([
     ['somar',(n1,n2=5)=>n1+n2],
     ['subtrair',(n1,n2=5)=>n1-n2],
     ['divisao',(n1,n2=5)=>n1/n2],
     ['multiplicacao',(n1,n2=5)=>n1*n2]
 ])
 
 for(let op of operacoes.values(10,5)){
    // console.log(op(100,50))
 }
 
 const numero = new Set([566,505,'14f','10.6','0,3'])
 for(let resultado of numero){
 resultado = isNaN(resultado)? 'nao é numero' : resultado
 //console.log(resultado);
 }
 
 let interable = new Uint8Array([0x00,0xff,0xfa,1111])
 
 for (let  valor of interable){
     console.log(valor);
 }


