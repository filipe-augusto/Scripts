//object.values(valores)/object.entries(cahve e valor)
const obj = {a:1,b:2,c:3}
console.log(Object.values(obj))//so valores
console.log(Object.entries(obj))//chave o obj

//melhorias na notação literal
const nome = 'carla'
const pessoa = {
    nome,
    ola(){
        return 'Oi gente!'
    }
}
console.log(pessoa.nome, pessoa.ola())

//Class
class Animal{}
class Cachorro extends Animal{//herança
    falar(){
        return 'Au au!'
    }
}
console.log(new Cachorro().falar())