const numeros = [8,9,10,13,15,25,31,19,17.5]

function verificaVetor (vetor){
    let contador =0
    for (let index = 0; index < vetor.length; index++) {
       if(vetor[index]<=20 && vetor[index]>=10){//entre 10 a 20
           contador++ 
       } 
    }
    return contador
}
console.log(verificaVetor(numeros))

/* 
Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
deles estão fora do intervalo, escrevendo estas informações. */