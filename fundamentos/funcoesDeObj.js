
const pessoa ={
    nome: 'rebeca',
    idade: 2,
    peso:13
}

console.log(Object.keys(pessoa))//retorna as chaves
console.log(Object.values(pessoa))//retorna os valores
console.log(Object.entries(pessoa))//retorna chave e valor

Object.entries(pessoa).forEach(([chave,valor]) => {//foreache de chave e valor
    console.log(`${chave}: ${valor}`)
});

Object.defineProperty(pessoa,'datadeNascimento',{//definiri propriedades para o obj
    enumerable: true,//esta passivel a ser listada
    writable:false, //nao permite ser alterada
    value:'01/01/2019' // atribuir o valor
})

pessoa.datadeNascimento = '01/01/2017'
console.log(pessoa.datadeNascimento)
console.log(Object.keys(pessoa))

//object.assign ('ecmascript 2015)
const dest = {a:1}
const o1 = {b:2}
const o2 = {c:3,a:4}
const obj = Object.assign(dest, o1, o2)//vai botar no dest os atributos do o1 e o2

Object.freeze(obj)
obj.c = 12345
console.log(obj)
