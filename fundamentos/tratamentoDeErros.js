function traterErroELancer(erro){
    //throw new Error('...')
   // throw 10
   //throw true
//throw 'mensagem'
throw {
    nome: erro.nome,
    msg: erro.menssage,
    date: new Date
}
}

function imprimirNomeGritado(obj){
try{
    console.log(obj.name.toUpperCase()+ '!!!')

} catch(e){
    traterErroELancer(e)    
} finally {
    console.log(' Exibe o Final')
}    
}

const obj = {nome: 'Roberto'}
imprimirNomeGritado(obj.nome)