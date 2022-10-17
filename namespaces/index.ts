namespace Geometria {
    export namespace Area {
        const PI = Math.PI

        export function circulo(raio: number): number {
            return PI * Math.pow(raio, 2)
        }

        export function retangulo(base: number, altura: number): number {
            return base * altura
        }
    }
}

const PI = 3.33 // não é gerado erro por estar em um escopo diferente

const areaCirculo = Geometria.Area.circulo(10)
const areaRetangulo = Geometria.Area.retangulo(10, 20)

console.log(areaCirculo, areaRetangulo)