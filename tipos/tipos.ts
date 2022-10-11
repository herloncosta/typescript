// string
let nome: string = "João"; // a partir daqui a variável nome passa a ser do tipo string
console.log(nome);

// numbers
let idade: number = 10;
idade = 27.6; // o tipo number pode ser inteiro ou flutuante
// idade = "ana";
console.log(idade);

let possuiHobbies: boolean = false;
// possuiHobbies = 1;
console.log(possuiHobbies);

// tipos explícitos
let minhaIdade: any; // essa variável pode receber qualquer valor sem gerar erro
minhaIdade = 20;
minhaIdade = "42";

// array
let hobbies: any[] = ["Cozinhar", "Praticar Esportes"];
console.log(hobbies[0]);

hobbies = [100, 200, 300];
console.log(hobbies);

// tuplas
// tuplas são usadas para definir tamanho, ordem e tipos de uma lista
let endereco: [string, number, string] = ["Av Principal", 99, ""];
console.log(endereco);

endereco = ["Rua Principal", 78, "Bloco A"];
console.log(endereco);

// enums
enum Cor {
  Verde, // 0
  Amarelo, // 1
  Roxo = 100,
  Azul, // 101
}

let minhaCor: Cor = Cor.Azul;
console.log(minhaCor);
