
//notação literal -1
const obj1 = {}
console.log(obj1)
//obj em js  - 2
const obj2 = new Object
console.log(obj2)
//funções construtoras -3 
function Produto(nome,preco,desc){
    this.nome = nome
    this.getPrecoDesconto = () =>{
        return preco * (1-desc)
    }
}

const p1 = new Produto ('Caneta', 7.99,0.15)
const p2 = new Produto('notebook',2998.99,0.25)
console.log(p1.getPrecoDesconto(),p2.getPrecoDesconto())

//função factory
function criarFuncionario(nome, salarioBase, faltas){
    return{
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase /30) * (30- faltas)
        }
    }
}
const f1 = criarFuncionario('João',7980,4)
const f2 = criarFuncionario('Maria',11400,1)
console.log(f1.getSalario(),f2.getSalario())
//object.create
const filha = Object.create(null)
filha.nome ='ana'
console.log(filha)
// um função famosa que retorna objeto 
const fromJSON = JSON.parse('{"info":"sou um json"}')
console.log(fromJSON.info)