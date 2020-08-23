//antigo

let celular = function(){
     this.cor = 'prata'
     this.ligar = () =>{
    console.log('uma ligação')    
    return "ligando"    
    }
            
}
let objeto = new celular()
console.log(objeto.cor)
console.log(objeto.ligar())