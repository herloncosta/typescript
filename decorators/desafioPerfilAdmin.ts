type UsuarioLogado = {
    nome: string
    email: string
    admin: boolean
}

const usuarioLogado: UsuarioLogado = {
    nome: 'Guilherme Filho',
    email: 'guigui@gmail.com',
    admin: false
}

@perfilAdmin
class MudancaAdministrativa {
    critico() {
        console.log('Algo crítico foi alterado!')
    }
}
 
new MudancaAdministrativa().critico()

function perfilAdmin<T extends Constructor>(construtor: T) {
    return class extends construtor {
        constructor(...args: any[]) {
            super(...args)
            if (!usuarioLogado || !usuarioLogado.admin)
                throw new Error("Sem permissão!")
        }
    }
}