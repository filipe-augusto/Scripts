//console.log(global)
global.minhaApp = Object.freeze({//tornar imutavel
    saudacao(){
        return 'Estou em todos os lugares!'
    },
    nome:'Sistema legal'
})
//criar um obj global - compartilhavel
//o legal é trabalhar com modulos e não usar essa tatica