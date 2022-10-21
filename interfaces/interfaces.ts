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

// Herança
interface IA {
    a(): void
}

interface IB {
    b(): void
}

// uma interface pode extender uma ou mais interfaces
interface IABC extends IA, IB {
    c(): void
}

// uma classe pode implementar uma ou mais interfaces
class RealA implements IA, IB {
    a(): void {}
    b(): void {}
    d(): void {} // e podem ser definidos atributos adicionais
}

// os métodos das interfaces implementadas pela classe 
// devem ser declarados
abstract class RealABD implements IA, IB {
    a(): void {}
    b(): void {}
    d(): void {}
}

// implementando interface em Object
interface Object {
    log(): void
}

// inserindo o método log no prototype de Object
Object.prototype.log = function() {
    console.log(this.toString())
}

const cli = {
    nome: "Herlon Costa",
    toString() { // manipulado retorno do objeto
        return this.nome
    }
}

cli.log() // Herlon Costa