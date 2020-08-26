const sequence = {
    _id: 1,
    get id() { return this._id++ }//pegar os id. vai retornar o proximo valor de id
}
const pessoas = {}

function salvarPessoa(pessoa) {
    if (!pessoa.id) pessoa.id = sequence.id //adociona o id caso nao tenha
    pessoas[pessoa.id] = pessoa
    return pessoa
}

function getPessoa(id) {//pegar o id do pessoa como parametro
    return pessoas[id] || {}
}

//retornar todos os valores do pessoas
function getPessoas() {
    return Object.values(pessoas)
}
function excluirPessoa(id) {//deleta a pessoa
    const pessoa = pessoas[id]
    delete pessoas[id]
    return pessoa
}
module.exports = { salvarPessoa, getPessoa, getPessoas,excluirPessoa }
