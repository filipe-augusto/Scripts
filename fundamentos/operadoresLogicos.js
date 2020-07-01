function comprar(trabalho1, trabalho2){

    const comprarSorvete = trabalho1 ||  trabalho2 // || ou 
    const comrparTV50 = trabalho1 && trabalho2 // && E
   // const comprarTv32 = !! (trabalho1 ^trabalho2) //bitwise xor7
    const comprarTv32 = trabalho1 != trabalho2 
    const materSaudavel = !comprarSorvete   

    return {
        comprarSorvete,comrparTV50 ,comprarTv32, materSaudavel
    }
}

console.log('1-',comprar(true, true))
console.log('2-',comprar(true, false))
console.log('3-',comprar(false, true))
console.log('4-',comprar(false, false))