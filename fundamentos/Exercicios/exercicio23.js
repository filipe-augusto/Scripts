let calculaNota = (codigoAluno, nota1,nota2,nota3)=>{
    let notas = []
    notas.push(nota1)
    notas.push(nota2)
    notas.push(nota3)
    let mediaCalculada =(notas[0]+notas[1]+notas[2])/3
        return {codigo:codigoAluno,nota1:notas[0],nota2:notas[1],nota3:notas[2],
            media:mediaCalculada,status:mediaCalculada>5?"aprovado":"reprovado"}
    }    
    console.log(calculaNota(18,10,7,10))

/* 
Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo. */