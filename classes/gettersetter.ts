// Os métodos getter e setter em JS/TS podem ser utilizados
// tanto em classes como em objetos literais

class Pessoa {
    private _idade: number = 0

    get idade(): number {
        return this._idade
    }

    set idade(novaIdade: number) {
        novaIdade > 0 && novaIdade <= 120 
            ? this._idade = novaIdade : this._idade
    }
}

const pessoa = new Pessoa
// Quando não são passados parâmetros, podemos omitir os parênteses

//pessoa.idade // error > atributo privado
console.log(`Idade inicial: ${pessoa.idade}`)
pessoa.idade = 30
console.log(`Idade alterada: ${pessoa.idade}`)

// Notação de objeto
type PessoaObj = {
    idadeObj: number
    get idade(): number
    set idade(novaIdade: number)
}

const pessoaObj: PessoaObj = {
    idadeObj: 0,
    get idade(): number {
        return this.idadeObj
    },
    set idade(novaIdade: number) {
        novaIdade > 0 && novaIdade <= 120
            ? this.idadeObj = novaIdade : this.idadeObj
    }
}

pessoaObj.idade = 22
console.log(`Idade modificada: ${pessoaObj.idadeObj}`)