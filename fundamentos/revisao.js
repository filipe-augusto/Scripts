const alunos = [
    { nome: 'joao', nota: 10, bolsista: true },
    { nome: 'filipe', nota: 10, bolsista: false },
    { nome: 'josy', nota: 5, bolsista: true },
    { nome: 'cassila', nota: 5, bolsista: false },
    { nome: 'beatriz', nota: 5, bolsista: true },
    { nome: 'camilo', nota: 10, bolsista: true },
]

console.log(alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual);
    return acumulador + atual
}))