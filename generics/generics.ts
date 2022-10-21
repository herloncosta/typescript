// <T> => tipo genérico a ser especificado posteriormente

// É uma solução interessante para funções que poderiam
// receber o tipo Any

function funcaoGenerica<T>(objeto: T): T {
    return objeto
}

// Ao passar um parâmetro de tipo number, automaticamente
// todas as definições de <T> são substituídas por number
// por inferência do TypeScript

// funcaoGenerica(20).length => O método .length NÃO pode 
// ser usado por se tratar de um number

funcaoGenerica("Herlon").length // 6

// Ou o tipo pode ser alterado manualmente
funcaoGenerica<number>(10) // funcaoGenerica(objeto: number): number

// Generics com Array
const avaliacoes: Array<number> = [9.8, 7.5, 6.9, 10]

avaliacoes.push(8.3)
// avaliacoes.push("5.5") // Não atribuível

function listar<T>(args: T[]) {
    return args.forEach(arg => arg)
}

listar([1, 2, 3]) // number por inferência
listar<number>([4, 5, 6]) // number por definição
listar(["Maria", "Pedro", "Paula"]) // string por inferência
listar<string>(["José", "Sandra", "Mariano"]) // string por definição

type Usuario = {
    nome: string
    senha: string
    online: boolean
}

// passando tipo predefinido
listar<Usuario>([
    { nome: "Herlon", senha: "senha", online: false },
    { nome: "Diego", senha: "senha", online: true },
])

// Generics com classes

// implementação errada
// class OperacaoBinaria {
//     constructor(public op1: any, public op2: any) {}

//     executar(): any {
//         return this.op1 + this.op2
//     }
// }

// alguns comportamentos errados acabam passando
// new OperacaoBinaria(10, 10).executar() // 20
// new OperacaoBinaria("Bom", "dia").executar() // Bom dia
// new OperacaoBinaria(3, "três").executar() // 3três
// new OperacaoBinaria({}, 2) // [object Object]2

// implementação correta 
abstract class OperacaoBinaria<T, R> {
    constructor(public op1: T, public op2: T) {}

    abstract executar(): R
}

class SomaBinaria extends OperacaoBinaria<number, number> {
    executar(): number {
        return this.op1 + this.op2
    }
}

new SomaBinaria(10, 10).executar() // 20
// new SomaBinaria(10, "teste").executar() // Não atribuível