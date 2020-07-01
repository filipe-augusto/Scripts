const sequencia = {
    _valor:1, // convenção - uma variavel acesssa apenas dentro do obj 
    get valor(){return this._valor++},//retorna o valor 
    set valor(valor){ //setta o valor 
        if(valor>this._valor){
            this._valor = valor
        }
    }
}

console.log(sequencia.valor,sequencia.valor)
sequencia.valor =1000
console.log(sequencia.valor,sequencia.valor)
sequencia.valor =900
console.log(sequencia.valor,sequencia.valor)