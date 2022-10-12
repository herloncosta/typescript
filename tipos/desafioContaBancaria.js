"use strict";
let contaBancaria = {
    saldo: 3456,
    depositar(valor) {
        this.saldo += valor;
    }
};
let correntista = {
    nome: "Herlon Costa",
    contaBancaria,
    contatos: ["12344321", "12344321"]
};
correntista.contaBancaria.depositar(3000);
console.log(correntista);
//# sourceMappingURL=desafioContaBancaria.js.map