const { timeEnd } = require("console")

function gerarNumerosEntre(min, max, numerosProibidos) {
    if (min > max) {
        [max, min] = [min, max]//max atribuindo o min. e min atribuindo max       
    }
    return new Promise((resolve, reject) => {
        const fator = (max - min + 1)
        const aleatorio = parseInt(Math.random() * fator) + min
        if (numerosProibidos.includes(aleatorio)) {
            reject('numero repetido!')
        } else {
            resolve(aleatorio)
        }
        resolve(aleatorio)
    })
}

async function gerarMegaSena(qtdNumeros,tentativas =1) {
    try {
        const numeros = []
        for (let _ of Array(qtdNumeros).fill()) {
            numeros.push(await gerarNumerosEntre(1, 60, numeros))
        }
        return numeros
    } catch (e) {
      if(tentativas > 10){
            throw 'que chato'
      }else{
            gerarMegaSena(qtdNumeros, tentativas +1)
      }
    }
}

gerarMegaSena(8)
    .then(console.log)
    .catch(console.log())

/* gerarNumerosEntre(1,5,[1,2,4])
.then(console.log)
.catch(console.log)  */