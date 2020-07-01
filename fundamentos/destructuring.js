const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco:{
        logradouro: "rua abc",
        numero: 1000,
        cep: 01123
    }
    }

    //------------------------------
    //possibilita ao usuário “desempacotar” valores de um array ou propriedades de objetos, em variáveis diferentes!
    const{nome, idade} = pessoa
    console.log(nome, idade)
    const {nome: n, idade:i} = pessoa
    console.log(n, i)
    const {sobrenome, bemHumarado=true} = pessoa
    console.log(sobrenome,bemHumarado)
    
     const {endereco:{ logradouro, numero, cep}} =pessoa
    console.log(logradouro, numero, cep)