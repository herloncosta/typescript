class Fila<T extends number | string> {

    private fila: Array<T>

    constructor(...args: T[]) {
        this.fila = args
    }

    entrar(elemento: T): void {
        this.fila.push(elemento)
        console.log(`${elemento} entrou na fila!`)
    }

    proximo(): void {
        if (this.fila.length > 0) {
            const atendido = this.fila.pop()
            console.log(`${atendido} foi atendido!`)
        } else {
            console.log("A fila está vazia!")
        }
    }

    imprimir(): void {
        const emFila = this.fila.reduce((acc, elemento) => 
            acc += `${elemento}, `, "")
        console.log(`${emFila} estão na fila!`)
    }
}

const fila = new Fila<string>("Maria", "Cintia", "Herlon", "Pedro")
fila.entrar("Diego")
fila.entrar("João")
fila.imprimir()

fila.proximo()
fila.proximo()
fila.proximo()

fila.imprimir()