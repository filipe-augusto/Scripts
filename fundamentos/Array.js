// o array eh um objeto
const texto ="eu prefiro ser essa metamorfose ambulente, do que ter aquela opnião formado sobre tudo"
let palavras = texto.split(" ")//transforma em array o separador é o espaço
//console.log(palavras[0], palavras[11])
palavras[1] = "não prefiro"
//console.log(palavras)
//console.log(palavras.length)//ver tamanho
palavras.push({id:3}, false, null,'TROQUEI')//ADICIONEI OBJ, BOLEANOS E STRING
//console.log(palavras)
//console.log(palavras.pop())//deleta o ultimo
//console.log(palavras)
delete palavras [15] //deleta pela posicao
//console.log(palavras)
//console.log(palavras.indexOf("do"))//posicao 
//console.log(palavras.reverse())//inverte
//console.log(palavras.sort()) //ordem alphabet
console.log(palavras.join().replace(/,/g,' '))//junta tudo e transforma em uma string
//junta tudo e o replace troca a , por espaço