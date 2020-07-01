
let minimoNotas = valor => {
    let cedula100 = 0
    let cedula50 = 0
    let cedula10 = 0
    let cedula5 = 0
    let cedula1 = 0
    while (valor > 0) {
        if (valor > 100) {
            cedula100++
            valor -= 100
        } else if (valor > 50 && valor < 100) {
            cedula50++
            valor -= 50
        } else if (valor > 10 && valor < 50) {
            cedula10++
            valor -=10
        } else if (valor > 5 && valor < 10) {
            cedula5++
            valor-=5
        } else if (valor >= 1 && valor < 5) {
            cedula1++
            valor-=1
        }
    }
    return `
    100: ${cedula100}
    50: ${cedula50}
    10: ${cedula10}
    5: ${cedula5}
    1: ${cedula1}`
}
console.log(minimoNotas(27))





/* Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1. */