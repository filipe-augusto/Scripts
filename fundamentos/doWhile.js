function getInteiroAleatorio(max, min){
    const valor = Math.random() * (max -min) +min//gera um valore aleatorio
    return Math.floor(valor)//retorna o valor arredondado
}

let opcao = 0
let quant = 0
do{
    quant++
    opcao = getInteiroAleatorio(-1,10)
    console.log(`Opcao escolhida foi ${opcao}.`)
}while (opcao !=-1)
console.log('quantidade de vezes: '+ quant)