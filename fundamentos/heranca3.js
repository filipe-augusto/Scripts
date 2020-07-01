
const pai = { nome:'pedro', corCabelo:'preto'}

const filha1 = Object.create(pai)//herdou do pai
filha1.nome = 'Ana' 
console.log(filha1.corCabelo)

const filha2 = Object.create(pai,{//atribui o nome e herda o resto do pai
    nome:{value: 'bia', writable:false, enumerable:true}
})
console.log(filha2.nome)
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for(let key in filha2){
    filha2.hasOwnProperty(key)? //identificar os atributos do proprio obj
    console.log(key) : console.log(`por henrança: ${key}`)
}
//----------------------------
const animal ={nome:null,  peso:0, altura:0     
}
const cachorro = Object.create(animal)
cachorro.nome ='pitbul'
cachorro.peso = 40.5
cachorro.altura = 100

Object.entries(cachorro).forEach(element => {
    console.log(element)
});
