class Data {
    // Atributos públicos por padrão
    dia: number
    public mes: number // public pode ser usado para tornar o tipo de acesso explícito
    ano: number

    // valores padrão podem ser passados para o construtor
    constructor(dia: number = 1, mes: number = 1, ano: number = 1970) {
        this.dia = dia
        this.mes = mes
        this.ano = ano
    }
}

const aniversario = new Data(17, 8, 1996)
console.log(aniversario.dia) // Por ser público, o atributo pode ser acessado externamente
aniversario.mes = 5 // E também pode ser modificado
console.log(aniversario)

const casamento = new Data // O Javascript permite ignorar os parêntes
console.log(casamento.dia)
casamento.ano = 2017
console.log(casamento)

// Sintaxe mais curta
// Os atributos podem ser passados diretamente para o construtor
class DataClean {
    constructor(
        public dia: number = 1, 
        public mes: number = 1, 
        public ano: number = 1970
    ) {}
}

const diaDasCriancas = new DataClean(12, 10)
console.log(diaDasCriancas.dia)
diaDasCriancas.ano = 2022
console.log(diaDasCriancas)