const aprovados = ['Agatha','aldo','daniel','raquel']

aprovados.forEach(function(nome,indice){
    console.log(`${indice +1}) ${nome}`)
})
aprovados.forEach( nome => console.log(nome))
const exibiAprovador = aprovado => console.log(aprovados)
aprovados.forEach(exibiAprovador)