//eestrategia 1 para gerar valor padrão
function soma1(a,b,c){
    a = a || 1 //caso variavel a naõ receba nenhum valor, será automaticamente 1
    b = b || 1
    c = c || 1
    return a+ b + c
}

//estrategia 2, 3 e 4 para gerar valor padrão
function soma2(a,b,c){
    a = a !== undefined ? a : 1 // se a não for definido será automaticamente 1
    b = 1 in arguments ? b :1  //se b foi passado por parametro será b, caso não será 1
    c = isNaN(c) ? 1 :c //se nao for um numero ele pega o valor padrao que é 1
    return a + b + c
}
console.log(soma2(), soma2(3), soma2(1,2,3),soma2(0,0,0))

//valor padrão do es2015
function soma3(a = 1, b = 2, c =3){ 
return a + b + c
}
console.log(soma3(),soma3(3),soma3(1,2,3), soma3(0,0,0))