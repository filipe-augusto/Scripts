
function esperarPor(tempo = 2000) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            console.log('executando promise');
            resolve()
        }, tempo)
    })
}

esperarPor(3000)
    .then(() => esperarPor())
    .then(esperarPor)

    function retornarValor(){
        return new Promise(resolve =>{
            setTimeout(()=> resolve(10),5000)

        })
    }

async function executa() {
    let valor = await retornarValor()
    await esperarPor(1500)
    console.log(`Async/Await ${valor}...`);
    await esperarPor(21500)
    console.log(`Async/Await ${valor}...`);
    await esperarPor(1500)
    console.log(`Async/Await ${valor}...`);
    return valor + 3
}