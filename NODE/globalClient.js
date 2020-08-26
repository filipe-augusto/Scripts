require('./global')
console.log(minhaApp.saudacao())

minhaApp.nome = "Eita" //nao modifica devido ao objeto.freeze
console.log(minhaApp.nome)
