"use strict";
let canal = "Dave Gray";
let inscritos = 83300;
// canal = inscritos => por conta do conflito de tipos 
// o arquivo .js não é gerado
canal = `Inscritos: ${canal}`; // agora sim o compilador.js é gerado
// let nome = "Herlon" => o arquivo não é compilado por que 
// a variável nome já foi declarada em outro arquivo que está
// no mesmo contexto do arquivo atual
// se for realmente necessário, pode ser feito utilizando uma uma IIFE
console.log(canal); // o uso do ; é obrigatório quando existe uma função
// antes de uma expressão IIFE para que o interpretador não identifique a
// expressão como uma nova chamada da função que a precede
// (function() {
//     let nome = "Pedro"
// })()
