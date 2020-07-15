//operador ... rest(juntar) /spread (espalhar)
//usar rest com parametro de função

//usar spread com objeto
//espalha todos os elementos de um obj para outro obj
const funcionario = {nome: 'Maria', salario:123345.99}
const clone = {ativo: true, ...funcionario}//espalhar os atributo dentro de outro obj
console.log(clone)

//usar spread com array
//espalha todos os elementos de um array para outro array
const grupoA = ['joão','pedro','gloria']
const grupoFinal = ['maria', ...grupoA,'rafaela']
