const passo01 = (ctx, next) => {
    ctx.valor1 = 'mid1'
    next()
}

const passo02 = (ctx, next) => {
    ctx.valor1 = 'mid2'
    next()
}

const passo03 = (ctx, next) => {
    ctx.valor1 = 'mid3'
    }

    const exec = (ctx, ...middleswares)=>{
const execPasso = indice => {
    middleswares && indice < middleswares.length && 
    middleswares[indice](ctx, ()=>execPasso(indice + 1))
}
execPasso(0)
    }

    const ctx = {}
    exec(ctx, passo01, passo02, passo03)
    console.log(ctx)