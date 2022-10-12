// let & const

// console.log(seraQuePode) // undefined
// var seraQuePode = "?" // hoisting

let seraQuePode = "?"
console.log(seraQuePode) // ?

// escopo das variáveis
type VariavelModel = {
    escopo: string[]
    suportaHoisting: boolean
    podeSerReatribuida: boolean
}

const _var: VariavelModel = {
    escopo: ["global", "função"],
    suportaHoisting: true,
    podeSerReatribuida: true
}

const _let: VariavelModel = {
    escopo: ["global", "local", "função"],
    suportaHoisting: false,
    podeSerReatribuida: true
}

const _const: VariavelModel = {
    escopo: ["global", "local", "função"],
    suportaHoisting: false,
    podeSerReatribuida: false
}

// exemplos
// console.log(nomeExemplo) // undefined
// var nomeExemplo = "Herlon"
// nomeExemplo = "Diego"

// console.log(nomeExemplo) // Diego

// function escopo(): void {
//     var sobrenome = "Costa"
// }
// console.log(sobrenome) // variável não definida

// var estaFrio = true
// if (estaFrio) {
//     var acao = "Usar casaco!"
// }
// console.log(acao) // Usar casaco!

// console.log(nomeExemplo) // variável não definida
let nomeExemplo: string = "Herlon"
nomeExemplo = "Diego"
console.log(nomeExemplo)

function escopo(): void {
    let sobrenome: string = "Costa"
}
// console.log(sobrenome) // variável não definida

let estaFrio: boolean = true
if (estaFrio) {
    let acao: string = "Usar casaco!"
}
// console.log(acao) // variável não definida

// const funciona da mesma forma que o let, porém
// o seu valor não pode ser reatribuído

// funções

// function declaration
function somarDoisValores(n1: number, n2: number): number {
    return n1 + n2
}
const resultadoSoma = somar(2, 10)
console.log(resultadoSoma)

// arrow function
const subtrair = (n1: number, n2: number): number => n1 - n2
const resultadoSubtracao = subtrair(10, 5)
console.log(resultadoSubtracao)