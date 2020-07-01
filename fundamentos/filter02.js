const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')
const nome = (valores, indice,arraytotal) => {
    return `${valores.nome} Santos` 
}
const salario = f => f.salario > 10000 //filter
const brasileiros = f => f.pais === 'Brazil' //filter
const sexo = f => f.genero === 'M' //filter
const resultado = f => `${f.nome} - R$ ${(f.salario/10).toFixed(2)} - ${f.email}` //map
axios.get(url).then(response => {
    const funcionarios = response.data//recebe o json
	 const pessoas = funcionarios
	.filter(brasileiros)
//	.map(nome)
	//.filter(salario)
	//.map(email)
	//.filter(sexo)
	//.map(resultado)
		console.log(pessoas) 
})