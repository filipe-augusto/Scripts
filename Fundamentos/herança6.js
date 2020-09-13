class Classe {
    constructor(classe) {
        this.classe = classe
    }

}

class Ordem extends Classe {
    constructor(ordem) {
        super(ordem)
        //   this.ordem = ordem
    }
}
class Familia extends Ordem {
    constructor(familia) {
        super(familia)
    }
}
class Genero extends Familia {
    constructor(genero) {
        super(genero)
    }
}
class Especie extends Genero {
    constructor(especie) {
        super(especie)
        // super(especie)
    }
}
const cao = new Especie()
cao.classe = 'mamalia'  
cao.ordem ='carnivora'
cao.familia = 'canidae'
cao.genero = 'canis'
cao.especie = 'canis familie' 
console.log(cao);