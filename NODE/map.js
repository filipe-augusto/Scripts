const { kMaxLength } = require("buffer");

const tecnologias = new Map()
tecnologias.set('react', {framework: false})
tecnologias.set('angular',{framework:true})

console.log(tecnologias.react);
console.log(tecnologias.get('react').framework);

const chavesVariaveis = new Map([
    [function(){}, 'função'],
    [{},'objeto'],
    [132,'numero']
])

chavesVariaveis.forEach((vl,ch)=>{
    console.log(ch, vl);
})

console.log(chavesVariaveis.has(123))//verifica se contem o numero
chavesVariaveis.delete(123) //deleta
console.log(chavesVariaveis.has(123));//verifica se contem o numero
console.log(chavesVariaveis.size);//tamanho

chavesVariaveis.set(132,'a')//acrescenta 
chavesVariaveis.set(132,'b')//acrescenta
chavesVariaveis.set(456,'b')
console.log(chavesVariaveis);

//exercicio
const nomes = new Map()

nomes.set(1, {nomeCompleto:'Filipe Augusto'})
nomes.set(2,{nomeCompleto:'Cassila Fonseca'})
nomes.set(3, {nomeCompleto: 'Pedro Isaac'})
nomes.set(4,{nomeCompleto: 'Maria Eunice'})
console.log(nomes.get(3).nomeCompleto);

const operacoes = new Map([
    ['soma', (n1,n2)=>n1+n2],
    ['subtracao', (n1,n2)=>n1-n2],
    ['divisao', (n1,n2)=>n1/n2],
    ['multiplicacao', (n1,n2)=>n1*n2],   
]);
operacoes.set('expoente',(n1,ex)=>n1**ex)

operacoes.forEach((vl,ch)=>{
    console.log(ch,vl(3,2));
})

console.log(operacoes.get('expoente')(3,3))