let triangulo = (l1,l2,l3) =>{
    if(l1 ==l2 && l1 ==l3 ){
        return 'Equilatero' //3 kados iguais 
    } else if(l1 == l2 || l2==l3 || l1==l3) {
            return 'Isosceles' // 2 lados iguais
    } else if(l1!= l2 && l2!=l3){
        return 'Escaleno' //nenhum lado igual
    }
}
console.log(triangulo(5,5,5))
console.log(triangulo(5,4,3))
console.log(triangulo(1,5,5))

/* 02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo). */