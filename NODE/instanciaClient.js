const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')()//retorna um obj
const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorB.valor,contadorA.valor)


//novas instancias foram criadas
contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)

