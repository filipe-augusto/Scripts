class Pessoa {
    constructor(nome){    
        this.nome = nome    
    }
    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('Joao')//herda da classe pessoa
p1.falar()

// função construtora
const criarPessoa = nome => {
    return {
        falar: () => console.log(`meu nome é ${nome}`)
    }
}
const p2 = criarPessoa('João') //herda da classe pessoa
p2.falar()