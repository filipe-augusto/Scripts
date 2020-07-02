console.log(this === global)//this aponta para modulo.exports
console.log(this === module)//this é um obj
console.log(this ===  module.exports)//true
console.log(this === exports)//true
function logThis(){
    console.log('dentro de uma função...')
    console.log(this === exports) //true -dentro de uma função ele não aponta para exports
    console.log(this ===  module.exports)//false
    console.log(this === global)//true
    this.perigo = ' ...'//coloca em escopo global
}

this.perigo = ' ...'//apota para module.exports
logThis()
console.log()
