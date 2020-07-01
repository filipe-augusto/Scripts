//map1
const nums = [1,2,3,4,5]
//for com proposito
let resultado = nums.map(function(e){
    return e *2
})
console.log(resultado,nums)
const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`
//parseFloat - passar para float. tofixed(2) - ter duas casas decimais. replace('.',',') substituir ponto por virgula 
resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)
//---------------------
const numeros = [10,7,8,5,15,0,1]
const soma5 = e => e+5
const dobro = e => e*e
resulado = numeros.map(soma5).map(dobro)
console.log(resulado)
//--------------------
const nomes =['filipe','augusto','santos','curaça','chaves']
 nomes.map(function(valores,indice,arraytodo){
	console.log(`${indice}) ${valores}`)
	})