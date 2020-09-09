let b = 1
console.log(b);

//------------------------
let  p = new Promise(function(cumprimirPromessa){
cumprimirPromossa({
    x: 99,
    y:66
})
})
p.then(function(valor){
    console.log(valor.x,valor.y);
})
//-------------------------
let primeiroElemento = array => array[0]
let primeiraLetra = string => string[0]
let letraMinuscula = letra =>letra.toLowerCase()
let lista = new Promise(function(cumprimirPromossa){
    cumprimirPromossa(['Filipe','augusto','santos','chaves'])
})
lista
.then(primeiroElemento)
.then(primeiraLetra)
.then(letraMinuscula)
.then(console.log)
//------------