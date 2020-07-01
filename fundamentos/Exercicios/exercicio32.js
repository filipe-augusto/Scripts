function calculaMedia(vetor){
    let total =0
    for(let i =0; i< vetor.length;i++){
    total += vetor[i]
    }
    return total/vetor.length
    }
    let numeros = [10,20,30,25,15]
    console.log(calculaMedia(numeros))


//Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.