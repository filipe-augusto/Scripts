function calculadora(sinal,valor1, valor2){
    switch(sinal){
case '+':
    return valor1 +valor2
break 
case '-':
    return valor1 - valor2
break 
case '/':
    return valor1 +valor2
break 
case '*':
    return valor1 *valor2
break 
default:
    return 'operador invalido'
    }
}
console.log(calculadora('+',100,50))
console.log(calculadora('-',100,50))
console.log(calculadora('*',100,50))
console.log(calculadora('/',100,50))


/* Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebe
como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores
numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e
3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas. */