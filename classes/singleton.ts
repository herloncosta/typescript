// Padrão Singleton

// Garante a existência de apenas uma instância de uma classe, 
// mantendo um ponto global de acesso ao seu objeto.

class InstanciaUnica {
    // definindo instância única da classe
    private static instancia: InstanciaUnica = new InstanciaUnica

    // método para acessar a instância
    static acessarInstancia(): InstanciaUnica {
        return InstanciaUnica.instancia
    }

    // método da instância
    agora() {
        return new Date()
    }
}

// acessando método para obter instância
const instancia = InstanciaUnica.acessarInstancia()
// acessando método da instância
const agora = instancia.agora()

console.log(agora)