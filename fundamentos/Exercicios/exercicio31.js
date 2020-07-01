function quantidadeNegativos(vetor){
    let negativos =0
    for(let i =0; i< vetor.length;i++){
        if(vetor[i]<0){
    negativos++  
    }
    }
    return negativos
    }
    let numeros = [10,3,-50,33,-60,9,-18,65,-32,-2,1,89,4]
    console.log(quantidadeNegativos(numeros))


    /*
    Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console. */