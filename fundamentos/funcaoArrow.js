let dobro = function(a) {
    return 2 * a
}

dobro = (a)=> {
    return 2*a
}

dobro = a => 2 * a
ola = () => 'ola'
ola = _=> 'ola! pessoas'//possui parametros

console.log(dobro)
console.log(ola)
//---------------------------
function Pessoa(){
    this.idade = 0
    setInterval(()=>{ //funcao arrow 
        this.idade++
        console.log(this.idade)
    },1000)
}

new Pessoa