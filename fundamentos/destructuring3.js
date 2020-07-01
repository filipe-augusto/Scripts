function rand({min=0,max = 100}){ // coloca valores padrão nos parametros que são obj
    const valor = Math.random()*(max-min) + min //calcula um numero random
    return Math.floor(valor) //floor retorna o menor numero inteiro
}

const obj = {max: 50, min: 40}

console.log(rand(obj))
console.log(rand({min:955}))
console.log(rand({}))