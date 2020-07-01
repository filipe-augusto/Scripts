
 Object.prototype.attr0 = '0' //não fazer isso
 const avo = { attr1: 'A'}
 const pai = {__proto__: avo, attr2: 'B'} //herda do avo
 const filho = {__proto__: pai, attr3:'C'} //herda do pai e por sua vez do avo
 
 console.log(filho.attr0,filho.attr1,filho.attr2,filho.attr3)
  
 
 const carro = { //obj carro
     velAtual: 0,
     velMax: 200,
     acelerarMais(delta){//funcao 
         if(this.velAtual + delta <=this.velMax){//se velocidade atual + delta for menor que vel max
             this.velAtual += delta // velocidade atual acrescenta delta
         } else{
             this.velAtual = this.velMax //se nao vel atual é igual a velocidade maxima
         }
     },
     status(){
         return  `${this.velAtual}Km/h de ${this.velMax}Km/h`
     }
 }
 
 const ferrari = {
     modelo: 'f40',
     velMax: 324//shadowing
 }
 
 const volvo = {
     modelo: 'V40',
   status(){
       return `${this.modelo} : ${super.status()} `//super refencia o metodo que esta no prototipo
   }
 }
 //herança
 Object.setPrototypeOf(ferrari,carro) //ferrari tem o carro como seu prototipo
 Object.setPrototypeOf(volvo,carro)//seta o prototipo no obj
 
 console.log(ferrari)
 console.log(volvo)
 
 volvo.acelerarMais(100)
 console.log(volvo.status())
 
 ferrari.acelerarMais(300)
 console.log(ferrari.status())
 