let aplicacaoFinanceira = (capitalInicial,taxaDeJuros, tempoAplicacaoPorAno) => {
    return `Juros simples: R$ ${((capitalInicial * taxaDeJuros * tempoAplicacaoPorAno) +capitalInicial).toFixed(2)}`
    }
    let valorAplicacao = (capitalInicial,taxaDeJuros, tempoAplicacaoPorAno) => {
     return `Juros compostos: R$ ${(capitalInicial*(Math.pow(1+taxaDeJuros,tempoAplicacaoPorAno))).toFixed(2)}`
    }
    console.log(aplicacaoFinanceira(1000,0.3,2))
    console.log(valorAplicacao(1000,0.3,2))
/* 
    06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos. */