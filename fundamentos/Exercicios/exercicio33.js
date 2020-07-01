/* Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter
quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.
Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e
mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console. */

function juntarVetores(...args){//recebe argumentos 
    resultado = []
for (let index = 0; index < arguments.length; index++) {
resultado = resultado.concat(arguments[index])    
}
return resultado
}
vetorInteiro = [10,20,30,40]
vetorString =["maça","filipe","javascript","cafe"]
vetorDouble = [0.5,0.8,0.25,0.33]

console.log(juntarVetores(vetorInteiro,vetorDouble))
console.log(juntarVetores(vetorString,vetorDouble))