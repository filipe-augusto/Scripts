function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        try {
            if (Math.random() < chanceErro) {
                reject('ocorreu um erro')
            } else {
                resolve(valor)//
            }
        } catch (e) {
            reject(e)
        }
    })
}

funcionarOuNao('testando ...', 0.5)
    .then(v => console.log(`valor ${v}`))
    .catch(err => console.log(`Erro: ${err}`))