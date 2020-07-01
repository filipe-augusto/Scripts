function encontraPares(){
    let quantPar=0
for (let index = 1; index <= 100; index++) {
  
    if(index%2==0){
        quantPar++
        console.log(`${index} - Pares:${quantPar}`)    
    }  
}
}
encontraPares()

//Fazer um programa para encontrar todos os pares entre 1 e 100.