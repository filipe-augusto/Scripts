//funciona como uma classe
function Carro(velocidadeMaxima = 200, delta = 5) {//parametro como valor padrao
    //atributo privado
    let velocidadeAtual = 0;
    //metodo publico
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {//
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }
    //metodo publico
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}
const uno = new Carro //uno herda de carro
uno.acelerar() //chama o metodo  acelerar
console.log(uno.getVelocidadeAtual()) 

const ferrari = new Carro(350,20) //ferrari herda de carro e passa por parametro os valores de vel maxima e delta
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())
