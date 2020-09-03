function real(partes, ...valores){
    const resultado = []
    valores.forEach((valor,indice)=>{
        valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}` //verifica se é um valor numerico, se for aplica uma mascara
        resultado.push(partes[indice],valor)//
    })
    return resultado.join('')
}

const preco = 29.99
const precoParcela = 11
console.log(real `x1 de ${preco} ou 3x de ${precoParcela}`);
