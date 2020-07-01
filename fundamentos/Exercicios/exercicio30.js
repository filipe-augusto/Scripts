function maiorMenor(vetor){
    let maior = vetor[0]
    let menor =vetor[0]
    for(let i =0; i< vetor.length;i++){
        if(vetor[i]>maior){
            maior=vetor[i]
        }else if(vetor[i]<menor){
            menor=vetor[i]
        }
    }
    return {maior: maior, menor:menor}
    }
    let numeros = [10,3,50,33,60,9,18,65,32,21,89,4]
    console.log(maiorMenor(numeros))

    //Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.