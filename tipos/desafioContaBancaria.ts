type ContaBancaria = {
    saldo: number
    depositar: (valor: number) => void
}

type Correntista = {
    nome: string
    contaBancaria: ContaBancaria
    contatos: string[]
}

let contaBancaria: ContaBancaria = {
    saldo: 3456,
    depositar(valor: number) {
        this.saldo += valor
    }
}

let correntista: Correntista = {
    nome: "Herlon Costa",
    contaBancaria,
    contatos: ["12344321", "12344321"]
}

correntista.contaBancaria.depositar(3000)
console.log(correntista)