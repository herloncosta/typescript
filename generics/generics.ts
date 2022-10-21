// <T> => tipo genérico a ser especificado posteriormente

// É uma solução interessante para funções que poderiam
// receber o tipo Any

function funcaoGenerica<T>(objeto: T): T {
    return objeto
}

// Ao passar um parâmetro de tipo number, automaticamente
// todas as definições de <T> são substituídas por number
// por inferência do TypeScript

// funcaoGenerica(20).length => O método .length NÃO pode 
// ser usado por se tratar de um number

funcaoGenerica("Herlon").length // 6

// Ou o tipo pode ser alterado manualmente
funcaoGenerica<number>(10) // funcaoGenerica(objeto: number): number