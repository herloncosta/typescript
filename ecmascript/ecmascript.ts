// let & const

// console.log(seraQuePode) // undefined
// var seraQuePode = "?" // hoisting

let seraQuePode = "?"
console.log(seraQuePode) // ?

// escopo das variáveis
const _var = {
    escopo: ["global", "função"],
    suportaHoisting: true,
    podeSerReatribuida: true
}

const _let = {
    escopo: ["global", "local", "função"],
    suportaHoisting: false,
    podeSerReatribuida: true
}

const _const = {
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
let nomeExemplo = "Herlon"
nomeExemplo = "Diego"
console.log(nomeExemplo)

function escopo(): void {
    let sobrenome = "Costa"
}
// console.log(sobrenome) // variável não definida

let estaFrio = true
if (estaFrio) {
    let acao = "Usar casaco!"
}
// console.log(acao) // variável não definida

// const funciona da mesma forma que o let, porém
// o seu valor não pode ser reatribuído