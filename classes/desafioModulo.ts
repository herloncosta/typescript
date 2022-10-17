// Exercício 1: Classe
class Moto {
    public velocidade: number = 0
    constructor(public nome: string) {}

    buzinar(): void {
        console.log("Tooooooot")
    }

    acelerar(delta: number): void {
        this.velocidade += delta
    }
}

const moto = new Moto("Ducati")
moto.buzinar()

console.log(moto.velocidade)
moto.acelerar(10)
console.log(moto.velocidade)


// Exercício 2: Herança
abstract class Objeto2D {
    constructor(
        public base: number = 0, public altura: number = 0
    ){}

    abstract area(): number
}

class Retangulo extends Objeto2D {
    area(): number {
        return this.base * this.altura
    }
}

const retangulo = new Retangulo(5, 7)
console.log(`Área: ${retangulo.area()}`)


// Exercício 3: Getter e Setter
class Estagiario {
    private _primeiroNome: string = ""

    get primeiroNome(): string {
        return `Nome: ${this._primeiroNome}`
    }

    set primeiroNome(novoNome: string) {
        novoNome.length > 3 
            ? this._primeiroNome = novoNome : this._primeiroNome = ""
    }
}

const estagiario = new Estagiario

console.log(estagiario.primeiroNome) // ""
estagiario.primeiroNome = "He"
console.log(estagiario.primeiroNome) // ""
estagiario.primeiroNome = "Herlon Costa"
console.log(estagiario.primeiroNome) // Herlon Costa