function rand([min =0,max =1000]){
   if(min>max)[min,max] = [max,min] //caso o minimo seja maior que o maximo. minino recebe o maximo e maximo recebe o minimo

    const valor = Math.random()*(max-min) +min //pega um valor random do min ao max
    return Math.floor(valor)
}
console.log(rand([50,40]))
console.log(rand([992]))
console.log(rand([,0]))
console.log(rand([]))