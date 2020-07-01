function aumentoSalario(salarioAtual, plano) {
    switch (plano) {
        case "a":
            return ` Plano A. Salario: ${salarioAtual}. Com aumento de 10% fica: R$ ${salarioAtual + (salarioAtual *0.1)}`
            break
        case "b": 
        return ` Plano B. Salario: ${salarioAtual}. Com aumento de 15% fica: R$ ${salarioAtual + (salarioAtual *0.15)}`
            break
        case "c": 
        return ` Plano C. Salario: ${salarioAtual}. Com aumento de 20% fica: R$ ${salarioAtual + (salarioAtual *0.2)}`
            break
        default:
            return "plano invalido"        
    }
}
console.log(aumentoSalario(1000,"a"))
console.log(aumentoSalario(1000,"b"))
console.log(aumentoSalario(1000,"c"))
console.log(aumentoSalario(1000,"d"))

/* 
Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano Aumento
A 10%
B 15%
C 20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido. */