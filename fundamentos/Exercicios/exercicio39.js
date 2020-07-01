/* Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o
primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente.
Faça a troca sem utilizar uma variável auxiliar. */

let vetor1 = [1,2,3,4,5]
let vetor2 = [6,7,8,9,10]

function inverteFuncao(vetor1,vetor2){
for(let i in vetor1){
    [vetor1[i],vetor2[i]]=[vetor2[i],vetor1[i]]
}
return `vetor 1: ${vetor1} vetor2: ${vetor2}`
}
console.log(inverteFuncao(vetor1,vetor2))