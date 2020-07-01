const produtos = [
    {nome:"notebook", preco:2499, fragil: true},
    {nome: 'ipad pro', preco:4199, fragil: true},
    {nome:'copo de vidro', preco: 12.49, fragil: true},
    {nome: 'copo de plastico', preco:18.99, fragil:false}
]
const caro = produto => produto.preco>=500
const fragil = produto => produto.fragil
console.log(produtos.filter(caro).filter(fragil))

/* The filter() method takes each element in an array and it applies a conditional statement against it. If this conditional returns true, the element gets pushed to the output array. If the condition returns false, the element does not get pushed to the output array. */


