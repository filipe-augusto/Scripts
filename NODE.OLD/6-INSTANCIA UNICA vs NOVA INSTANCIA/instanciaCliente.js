const contadorA = require ('./instanciaUnica')
const contadorB = require ('./instanciaUnica')//exportou um obj do node e ele faz cache
                                            // e se o obj ja foi criado ele retorna a mesma instancia

const contadorC = require ('./instanciaNova')()//retorna um obj
const contadorD = require ('./instanciaNova')()//nao retorna a mesma instancia

contadorA.inc()
contadorA.inc()

console.log(contadorA.valor, contadorB.valor)

contadorC.inc()
contadorC.inc()

console.log(contadorC.valor,contadorD.valor)