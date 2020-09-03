function falarDepoisDe(segundos,frase){
    return new Promise((resolve,reject)=>{//resolve aceita somente um parametro
setTimeout(()=>{
    resolve(frase)
},segundos * 1000)
    })
}

falarDepoisDe(3,'que legal!')
.then(frase=>  frase.concat('?!?!'))
.then(outraFrase => console.log(outraFrase))
//exercicios


 function falar (seg, frase){
    return new Promise(resolve =>{
        setTimeout(()=>{
            resolve(frase)
        },seg * 1000)
    })
}
falar(2,'Ola')
.then(who => who.concat(' mundo!'))
.then (who2 => who2.concat('!!!'))
.then(outraFrase => console.log(outraFrase))

 

function operacao (seg,valor){
    return new Promise(resolve =>{
        setTimeout(()=>{
            resolve(valor)
        },seg*1000)
    })
}

operacao(1,5)
.then(valor=>--valor)
.then((valor1,n1=50)=>valor1+n1)
.then(resultado=>console.log(resultado))