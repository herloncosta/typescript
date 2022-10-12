// string
let nome: string = "João" // a partir daqui a variável nome passa a ser do tipo string
console.log(nome)

// numbers
let idade: number = 10
idade = 27.6 // o tipo number pode ser inteiro ou flutuante
// idade = "ana";
console.log(idade)

let possuiHobbies: boolean = false
// possuiHobbies = 1;
console.log(possuiHobbies)

// tipos explícitos
let minhaIdade: any // essa variável pode receber qualquer valor sem gerar erro
minhaIdade = 20
minhaIdade = "42"

// array
let hobbies: any[] = ["Cozinhar", "Praticar Esportes"];
console.log(hobbies[0])

hobbies = [100, 200, 300]
console.log(hobbies)

// tuplas
// tuplas são usadas para definir tamanho, ordem e tipos de uma lista
let endereco: [string, number, string] = ["Av Principal", 99, ""];
console.log(endereco)

endereco = ["Rua Principal", 78, "Bloco A"];
console.log(endereco)

// enums
enum Cor {
  Verde, // 0
  Amarelo, // 1
  Roxo = 100,
  Azul, // 101
}

let minhaCor: Cor = Cor.Azul;
console.log(minhaCor)

// any
let carro: any = "BMW"
console.log(carro)

carro = { marca: "BMW", ano: 2019 }

// funções
function retornaMeuNome(): string {
  return nome
}

console.log(retornaMeuNome())

function digaOi(): void { // void (vazio) define que a função não tem retorno
  console.log("Oi!")
}

digaOi()

// tipando parâmetros e retorno da função
function multiplicar(x: number, y: number): number {
  return x * y
}

console.log(multiplicar(10, 10))

// tipo função
let calculo: (x: number, y: number) => number
calculo = multiplicar
console.log(calculo(6, 6))

// objetos
let usuario: { nome: string, idade: number }

usuario = {
  nome: "Herlon",
  idade: 26
}

// type (Alias) tipo predefinido de objeto
type Funcionarios = {
  supervisores: string[],
  baterPonto: (horario: number) => string
}

const baterPonto = (horario: number): string => 
  horario <= 8 ? "Horário normal" : "Fora do horário"

const funcionarios1: Funcionarios = {
  supervisores: ["Herlon", "Diego"],
  baterPonto
}

const funcionarios2: Funcionarios = {
  supervisores: ["Diego", "Herlon"],
  baterPonto
}

console.log(funcionarios1.baterPonto(8))
console.log(funcionarios2.baterPonto(9))

// Union Types
let nota: number | string = 10
console.log(`Minha nota é ${nota}`)

nota = "10"
console.log(`Minha nota é ${nota}`)

// never - define função sem retorno e que a execução não chega ao fim
function falha(msg: string): never {
  throw new Error(msg)
}

// caso de uso type never
type Produto = {
  nome: string
  preco: number
  validarProduto: () => void
}

const produto: Produto = {
  nome: "Caneta",
  preco: 2,
  validarProduto() {
    !this.nome || this.nome.trim().length === 0 
      ? falha("Nome deve ser definido!") : null
    !this.preco || this.preco <= 0 
      ? falha("Preço deve ser maior que 0!") : null
  }
}

produto.validarProduto()