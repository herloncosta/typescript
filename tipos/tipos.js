"use strict";
// string
let nome = "João"; // a partir daqui a variável nome passa a ser do tipo string
console.log(nome);
// numbers
let idade = 10;
idade = 27.6; // o tipo number pode ser inteiro ou flutuante
// idade = "ana";
console.log(idade);
let possuiHobbies = false;
// possuiHobbies = 1;
console.log(possuiHobbies);
// tipos explícitos
let minhaIdade; // essa variável pode receber qualquer valor sem gerar erro
minhaIdade = 20;
minhaIdade = "42";
// array
let hobbies = ["Cozinhar", "Praticar Esportes"];
console.log(hobbies[0]);
hobbies = [100, 200, 300];
console.log(hobbies);
// tuplas
// tuplas são usadas para definir tamanho, ordem e tipos de uma lista
let endereco = ["Av Principal", 99, ""];
console.log(endereco);
endereco = ["Rua Principal", 78, "Bloco A"];
console.log(endereco);
// enums
var Cor;
(function (Cor) {
    Cor[Cor["Verde"] = 0] = "Verde";
    Cor[Cor["Amarelo"] = 1] = "Amarelo";
    Cor[Cor["Roxo"] = 100] = "Roxo";
    Cor[Cor["Azul"] = 101] = "Azul";
})(Cor || (Cor = {}));
let minhaCor = Cor.Azul;
console.log(minhaCor);
// any
let carro = "BMW";
console.log(carro);
carro = { marca: "BMW", ano: 2019 };
// funções
function retornaMeuNome() {
    return nome;
}
console.log(retornaMeuNome());
function digaOi() {
    console.log("Oi!");
}
digaOi();
// tipando parâmetros e retorno da função
function multiplicar(x, y) {
    return x * y;
}
console.log(multiplicar(10, 10));
// tipo função
let calculo;
calculo = multiplicar;
console.log(calculo(6, 6));
// objetos
let usuario;
usuario = {
    nome: "Herlon",
    idade: 26
};
const baterPonto = (horario) => horario <= 8 ? "Horário normal" : "Fora do horário";
const funcionarios1 = {
    supervisores: ["Herlon", "Diego"],
    baterPonto
};
const funcionarios2 = {
    supervisores: ["Diego", "Herlon"],
    baterPonto
};
console.log(funcionarios1.baterPonto(8));
console.log(funcionarios2.baterPonto(9));
// Union Types
let nota = 10;
console.log(`Minha nota é ${nota}`);
nota = "10";
console.log(`Minha nota é ${nota}`);
// never - define função sem retorno e que a execução não chega ao fim
function falha(msg) {
    throw new Error(msg);
}
const produto = {
    nome: "Caneta",
    preco: 2,
    validarProduto() {
        !this.nome || this.nome.trim().length === 0
            ? falha("Nome deve ser definido!") : null;
        !this.preco || this.preco <= 0
            ? falha("Preço deve ser maior que 0!") : null;
    }
};
produto.validarProduto();
