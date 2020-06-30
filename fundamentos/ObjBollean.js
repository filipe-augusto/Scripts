
let isAtivo = true 
console.log(isAtivo)


isAtivo = 1
 console.log(!isAtivo) //false
 console.log(!!isAtivo) //true

 console.log('os verdadeiros')
 console.log(!!3)
 console.log(!!-1)
 console.log(!!' ')
 console.log(!!'texto')
 console.log(!![])
 console.log(!!{})
 console.log(!!Infinity)
 console.log(!!(isAtivo = true))

 console.log('os falsos')
 console.log (!!0)
 console.log(!!'')
 console.log(!!null)
 console.log(!!NaN)
 console.log(!!undefined)
 console.log(!!(isAtivo = false))
 console.log("opa teste 1" || null)
 console.log(null ||"opa teste 2")
 //
  /**usando operadores logicos na string
  * ira aparecer o valor verdadeiro, caso nao tenha ira aparecer o false
  * 
  */
//RESPOSTA AUTOMATICA CASO STRING ESTEJA FAZIA
console.log('para finalizar ...')
console.log(!!('' || null  || 0 || ''))

var nome
console.log (nome || "desconhecido")
var nome = 'Filipe'
console.log(nome || "desconhecido")