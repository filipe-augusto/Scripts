const texto = "isso é um texto normal para ser usado no algoritmo"
let conteudo = texto.split(" ")//convertir para array
conteudo.forEach( (nome,indice)=> console.log(`${indice +1}) ${nome}`))
console.log(conteudo.join().replace(/,/g," "))//convetir para string
//----------------TABUADA
const numero = 5
const tabuada =[]
for (let i = 0; i <= 10; i++) {
tabuada.push(i*numero)	
}
tabuada.forEach((valor,indice,arrayTodo,numero=5) => {
	console.log(`${numero} x ${indice} = ${valor}`)
//	console.log(arrayTodo)
})

