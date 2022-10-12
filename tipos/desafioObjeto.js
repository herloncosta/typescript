"use strict";
// DESAFIO: Objeto
// Criar um objeto funcionário com:
//     1 - Array de strings com os nomes dos supervisores
//     2 - Função de bater ponto que recebe a hora (número) retorna a string
//     Ponto normal se (horario<= 8) e Fora do horário se (horario > 8)
// tipagem
let funcionario;
// definição
funcionario = {
    supervisores: ["Herlon", "Diego"],
    baterPonto: (horario) => horario <= 8 ? "Horário normal" : "Fora do horário"
};
//# sourceMappingURL=desafioObjeto.js.map