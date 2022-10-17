class Aviao {
    public readonly modelo: string

    constructor(modelo: string, public readonly prefixo: string) {
        this.modelo = modelo
    }
}

const turboHelice = new Aviao("Tu-114", "PT-ABC")

// turboHelice.modelo = "DC-8" => erro: atributo disponível apenas para leitura
// turboHelice.prefixo = "PT-DEF" => erro: atributo disponível apenas para leitura

console.log(turboHelice)