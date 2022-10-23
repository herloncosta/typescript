// @logarClasse // decorator
// @logarClasseSe(true) // if true: [class Eletrodomestico] if false: none
@decorator({a: "teste", b: 123})
class Eletrodomestico {
    constructor() {
        console.log("Nova instância...") // invocado a cada instância nova
    }
}

function logarClasse(construtor: Function): void {
    console.log(construtor) // loga os dados passados pelo decorator
}

// factory decorator

// exemplo 1: retornando um decorator vazio para não retornar um null
// gerando erro de compilação
function decoratorVazio(): void {}

function logarClasseSe(valor: boolean): Function {
    return valor ? logarClasse : decoratorVazio
}

// exemplo 2: criando uma função geradora para retornar valores
// de um objeto passado como parâmetro
type DecoratorObject = {
    a: string
    b: number
}

function decorator(obj: DecoratorObject): Function {
    return function() {
        console.log(`${obj.a} ${obj.b}`)
    }
}

// decorator com classes
@logarObjeto
class Decorator {
    constructor() {
        console.log("Nova instância de Decorator")
    }
}

type Constructor = { new (...args: any[]): {} }

function logarObjeto(construtor: Constructor) {
    console.log("Carregando...")
    return class extends construtor {
        constructor(...args: any[]) {
            console.log("Antes")
            super(...args)
            console.log("Depois")
        }
    }
}

new Decorator()
/*
    Carregando...
    Antes
    Nova instância de Decorator
    Depois
*/

// Adicionando método em classe com Decorator
interface RecebeMetodo {
    imprimir?(): void // garantindo que a classe pode ter o método ou não
}

@logarObjeto // a classe pode receber mais de um decorator
@imprimivel // implementação do decorator
class RecebeMetodo implements RecebeMetodo {
    constructor() {
        console.log("Recebi um novo método...")
    }
}

function imprimivel(prototipo: Function) {
    prototipo.prototype.imprimir = function(){ // inserindo método no protótipo
        console.log(this)
    }
}

const invocacao = new RecebeMetodo() // instância da classe
invocacao.imprimir && invocacao.imprimir() // invoca imprimir apenas se o método existir