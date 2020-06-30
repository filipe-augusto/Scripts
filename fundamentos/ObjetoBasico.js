const prod1 = {} //criando o obj
prod1.nome = 'Celular' //adicioinando uma chave e valor
prod1.preco = 4999.90 //adicioinando uma chave e valor
prod1['descontoLegal'] = 0.40 //adicioinando uma chave e valor
console.log(prod1.descontoLegal)
console.log(prod1)
const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj: {//pode criar obj dentro de outro obj
        blabla: 1,
        obj: {
            blabla: 2
        }
    }
}
//-------JSON NAO EH OBJETO. Jason, basicamente, é texto
//exemplo
'{"nome":"camisa polo","preco":79.90}'
console.log(prod2)
console.log(prod2.obj.obj)

