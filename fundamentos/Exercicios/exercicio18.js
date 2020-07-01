function extenso(numero) {
    switch (numero) {
        case 1:
            return "um"
            break
        case 2:
            return "dois"
            break
        case 3:
            return "tres"
            break
        case 4:
            return "quatro"
            break
        case 5:
            return "cinco"
            break
        case 6:
            return "seis"
            break
        case 7:
            return "sete"
            break
        case 8:
            return "oito"
            break
        case 9:
            return "nove"
            break
        case 10:
            return "dez"
            break
        default:
            return "numero invalido"
    }
}

for(let i=1; i<=11; i++){
    console.log(`${i} - ${extenso(i)}`)
}


/* 
Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando
switch. Crie um case default que escreva ‘Número fora do intervalo.’ */