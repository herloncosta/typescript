abstract class Calculo {
    protected resultado: number = 0

    abstract executar(...numeros: number[]): void

    mostrarResultado(): void {
        console.log(this.resultado)
    }
}

class Soma extends Calculo {
    executar(...numeros: number[]): void {
        this.resultado = numeros.reduce((total, atual) => total + atual, 0)
    }
}

class Multiplicacao extends Calculo {
    executar(...numeros: number[]): void {
        this.resultado = numeros.reduce((total, atual) => total * atual, 1) // se iniciado com 0 o resutaldo será 0 
    }
}

const soma = new Soma
soma.executar(1, 2, 3, 4, 5)
soma.mostrarResultado() // 15

const mult = new Multiplicacao
mult.executar(1, 2, 3, 4, 5)
mult.mostrarResultado() // 120