const templateString = {
    nome: "Filipe",
    trabalho:"programacao",
    poderesEspeciais:['ler a propria mente','ficar invisivel no escuro','invocar uma lampada'],
   temnome:function (nome) {
      console.log(nome || "o bandido nao tem medo")     
     },
     temtrabalho:function(trabalho) {
                      
         console.log(`o bandido trabalha com ${trabalho}`|| ` o bandido nao
          tem trabalho`) 
     },
     invocarPoder:function poder(x) {
         console.log(` --------------------  _o/   
                  invocar
                          ${templateString.poderesEspeciais[x]} !!!
                         
         --------------`)
     }
  }
  
  //templateString.temnome()
  templateString.temtrabalho('ti')
  templateString.invocarPoder(2)
  console.log(` quantidade de poderes: ${templateString.invocarPoder.length}`)