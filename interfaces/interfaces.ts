interface IHumano {
    nome: string
    idade?: number // o valor é opcional
    [prop: string]: any // qualquer propriedade pode ser passada com qualquer
}                       // valor desde que seja uma string

function saudarComOla(pessoa: IHumano): void {
    console.log(`Olá ${pessoa.nome}!`)
}

function mudarNome(novoNome: string): void {
    PessoaLocal.pessoa.nome = novoNome
}

namespace PessoaLocal {
    export const pessoa = {
        nome: "Herlon",
        idade: 26
    }
}

saudarComOla(PessoaLocal.pessoa)
mudarNome("Diego")
saudarComOla(PessoaLocal.pessoa)
saudarComOla({ nome: "José", idade: 45, altura: 1.76 })