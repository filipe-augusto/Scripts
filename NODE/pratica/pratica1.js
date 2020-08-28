const { map } = require("lodash")
/* 
const [f,i,l,p,...tras] = "filipe"
console.log(f,i+l+i+p);

const  [x, y] =[10,22,3]
console.log(x,y); */

function total(...numeros){
    let total = 0 
    numeros.forEach(n => total += n)
    return total
}
console.log(total(2,3,4,5))
//---------

//OBJECT.VALUES OBJECT.ENTRIES

const obj = {a: 1, b: 2, c: 3}

console.log(Object.values(obj))
console.log(Object.entries(obj))
//---------
//melhorias na notação literal
const nome = 'carla'
const pessoa = {
    nome,
    ola(){
        return 'oi gente'
    }
}

//class
class Animal {}

class Cachorro extends Animal{
    falar(){
        return 'Au au'
    }
}

console.log(new Cachorro().falar())
