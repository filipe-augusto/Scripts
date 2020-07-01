function frutas(fruta) {  
    switch (fruta) {
        
        case 'maça':
            return `Tem ${fruta}?\n Não vendemos esta fruta aqui `
            break 
        case 'kiwi':
            return `Tem $${fruta}?\n Estamos com escassez de kiwis`
            break 
        case 'melancia':
            return `Tem ${fruta}?\n Aqui está, são 3 reais o quilo`
            break 
            default:
                return 'Frutas invalidas'
    } 
}
console.log(frutas('maça'))
console.log(frutas('kiwi'))
console.log(frutas('melancia'))
console.log(frutas('limao'))
/* 
Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três
casos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com
escassez de kiwis”. Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções .Crie
também um default, que retornará uma mensagem de erro no console. */