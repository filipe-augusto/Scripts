//function sem retorno
function imprimirSoma (a, b) {
    console.log(a +b)
}

imprimirSoma(2,3)
imprimirSoma(2)
imprimirSoma()

//funcao com retorno
function soma(a, b) {
    return a + b
}
console.log(soma(2,8))


//armazenando uma funcao em uma veriavel
const imprmirSoma = function (a, b) {
    console.log(a +b)
}
imprmirSoma(2,3)

//armazenando uma funcao ARROW em uma variavel
const soma1 = (a, b) => {
    return a +b
}

console.log(soma1(10,3))

//retorno implicito
const subtracao = (a, b) => a - b
console.log(subtracao(2,3))

const imprimir2 = a => console.log(a)
imprimir2('legal')