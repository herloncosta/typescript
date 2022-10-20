interface IHumano {
    nome: string
    idade?: number // o valor é opcional
    [prop: string]: any             // => Qualquer propriedade pode ser passada com
    saudar(sobrenome: string): void // qualquer valor desde que seja uma string.
}                       

function saudarComOla(pessoa: IHumano): void {
    console.log(`Olá ${pessoa.nome}!`)
}

function mudarNome(novoNome: string): void {
    PessoaLocal.pessoa.nome = novoNome
}

namespace PessoaLocal {
    export const pessoa: IHumano = {
        nome: "Herlon",
        idade: 26,
        saudar(sobrenome: string): void {
            console.log(`Olá, meu nome é ${this.nome} ${sobrenome}!`)
        }
    }
}

saudarComOla(PessoaLocal.pessoa)
mudarNome("Diego")
saudarComOla(PessoaLocal.pessoa)
// saudarComOla({ nome: "José", idade: 45, altura: 1.76 })
PessoaLocal.pessoa.saudar("Costa")

// usando interface com classe
class Cliente implements IHumano {
    nome: string = "Herlon"

    ultimaCompra: Date = new Date() // ao implementar uma classe, outros atributos
                                    // podem ser inseridos mesmo não snedo definidos na interface
    saudar(sobrenome: string): void {
        console.log(`Olá, meu nome é ${this.nome} ${sobrenome}!`)
    }
}

// usando interface com função
interface IFuncaoCalculo {
    (a: number, b: number): number
}

let potencia: IFuncaoCalculo

potencia = function(base: number, exp: number): number {
    return base ** exp
}

console.log(potencia(10, 2))