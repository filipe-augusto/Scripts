/* Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o
conceito B e de 9,0 a 10,0 o conceito A. */

let notas = [4.5,6.8,8.6,6.5,10]

function converteNotas(vetorNota){
let vetorLetras =[]
    for(let i in vetorNota){
    if(vetorNota[i]<=4.9){
        vetorLetras.push('D')
    } else if(vetorNota[i]>=5 && vetorNota[i]<6.9){
        vetorLetras.push('C')
    }else if(vetorNota[i]>=7 && vetorNota[i]<8.9){
        vetorLetras.push('B')
    }else if(vetorNota[i]>=9 && vetorNota[i]<=10){
        vetorLetras.push('A')
    }
}
return vetorLetras
}
console.log(converteNotas(notas))