const notas = [7.7,6.5,5.2,8.9,5.9,3.6,9.0]

//sem callback
let notasBaixas1 = []
for(let i in notas){
    if(notas[i] < 7){
        notasBaixas1.push(notas[i])
    }
}
console.log(notasBaixas1)
//com callback
const notasBaixas2 = notas.filter(function(nota){
    return nota < 7
})
console.log(notasBaixas2)

//com callback e usando arrow
const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)
fabricantes.forEach(fabricante => console.log(fabricante))
//Uma função callback é uma função passada a outra função como argumento, que é então invocado dentro da função externa para completar algum tipo de rotina ou ação.