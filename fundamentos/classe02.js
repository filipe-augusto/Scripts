class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}
class Pai extends Avo {// pai tem como prototipo a classe Avo -herança
    constructor(sobrenome, profissao = 'professor') {
            super(sobrenome)
            this.profissao = profissao
    }
}

class Filho extends Pai{
    constructor (){
        super('Silva')
    }
}
const filho = new Filho
console.log(filho)

