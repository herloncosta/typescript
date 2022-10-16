// Os pilares da orientação a objetos são:
// - Abstração
// - Herança
// - Encapsulamento
// - Polimorfismo

// Herança - Capacidade de reusabilidade de código

import { Carro } from "./classes"

class Ferrari extends Carro {
    constructor(modelo: string, velocidadeMaxima: number) {
        super("Ferrari", modelo, velocidadeMaxima) // inferindo marca
    }

    public acelerar(): number {
        return this.alterarVelocidade(20)
    }

    public frear(): number {
        return this.alterarVelocidade(-15)
    }
}

const f40 = new Ferrari("F40", 324)

console.log(`Marca: ${f40.marca} Modelo: ${f40.modelo}`)

console.log(f40.acelerar())
console.log(f40.acelerar())
console.log(f40.acelerar())
console.log(f40.acelerar())

console.log(f40.frear())
console.log(f40.frear())
console.log(f40.frear())