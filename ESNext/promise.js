let a = 1
console.log(a)

let p = new Promise(function(cumprimirPromessa){
cumprimirPromessa(['Ana','Bia','Carlos','Daniel'])//pode receber qualquer dado. ex: array, obj, string
})
function primeiroElemento(array){
    return array[0]
}
function primeiraLetra(string){
    return string[0]
}
const letraMinuscula = letra => letra.toLowerCase()


p
.then(primeiroElemento)
.then(primeiraLetra)
.then(letraMinuscula)
.then(console.log)
