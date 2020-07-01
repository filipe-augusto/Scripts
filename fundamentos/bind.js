const pessoa = {
    saudacao: 'bom dia',
    falar(){
        console.log(this.saudacao)
    }
}
pessoa.falar()
const falar = pessoa.falar
falar()

const falarDePesssoa = pessoa.falar.bind(pessoa)
falarDePesssoa()
//O método bind() cria uma nova função que, quando chamada, tem sua palavra-chave this definida com o valor fornecido, com uma sequência determinada de argumentos precedendo quaisquer outros que sejam fornecidos quando a nova função é chamada.
//-----------
/* function Pessoa (){//funcao
    this.idade =0
    const self = this
    setInterval(function(){
        self.idade++
       // this.idade++
        console.log(this.idade)
     }/*.bind(this),1000)
}
new Pessoa //criado obj apartir da função */