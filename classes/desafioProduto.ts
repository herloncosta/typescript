// Desafio: Classe produto
// Atributos: nome, preço e desconto
// Criar o construtor
// Obs 1.: Desconto é opcional (valor padrão)
// Obs 2.: Criar dois produtos, um com dois (sem desconto) e outro com três parâmetros

// Desafio: Implementar método resumo e precoComDesconto
// Método precoComDesconto deve retornar o valor - desconto
// Método resumo deve mostrar preço com desconto

class Product {
    constructor(
        public name: string,
        public price: number,
        public discount: number = 0
    ) {}

    public priceWithDiscount(price: number, discount: number): number {
        return price - (price * (discount))
    }

    public description(): void {
        console.log(`${this.name} custa R$${this.priceWithDiscount(this.price, this.discount)} (${this.discount * 100}% off)`)
    }
}

const product1 = new Product("Camisa", 69.90)
const product2 = new Product("Tênis", 160, 0.10)

product1.description()
product2.description()