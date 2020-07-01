function getInteiroAleatorio(max, min){
    const valor = Math.random() * (max -min) +min
    return Math.floor(valor)
}

let opcao = 0
let quant = 0
while (opcao !=-1){
    quant++
    opcao = getInteiroAleatorio(-1,10)
    console.log(`Opcao escolhida foi ${opcao}.`)
}
console.log('quantidade de vezes: '+ quant)