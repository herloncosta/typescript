// Desafio: Classe produto
// Atributos: nome, preço e desconto
// Criar o construtor
// Obs 1.: Desconto é opcional (valor padrão)
// Obs 2.: Criar dois produtos, um com dois (sem desconto) e outro com três parâmetros

class Product {
    constructor(
        public name: string,
        public price: number,
        public discount: number = 0
    ) {}
}

const product1 = new Product("Camisa", 69.90)
const product2 = new Product("Tênis", 159.90, 0.10)

console.log(product1)
console.log(product2)