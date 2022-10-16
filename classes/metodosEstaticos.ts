// Naturalmente, atributos e métodos de uma classe
// são herdados pelas instâncias, no caso dos atributos
// e métodos estáticos apenas a classe pode utilizá-los.

class Matematica {
    PI: number = 3.1416

    calcularCirc(raio: number): number {
        return this.PI * raio * raio
    }
}

const m1 = new Matematica

console.log(m1.PI) // 3.1416
console.log(`Área normal: ${m1.calcularCirc(4)}`) // 50.2656
m1.PI = 4.23 // valor de PI alterado
console.log(m1.PI) // 4.23
console.log(`Área alterada: ${m1.calcularCirc(4)}`) // 67.68

class Matematica2 {
    static PI: number = 3.1416

    static calcularCirc(raio: number): number {
        return this.PI * raio * raio
    }
}

// Acessando atributo e valor da classe diretamente
console.log(Matematica2.PI) // 3.1416
console.log(Matematica2.calcularCirc(4)) // 50.2656