//par nome/valor
const saudacao = 'opa' //contexto léxico 1

function exect() {
    const saudacao = 'falaaa' // contexto léxico 2
    return saudacao

}

// Objectos são grupos aninhados de pares nome/valor
const cliente = { //contexto léxico 3
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: { // contexto léxico 4
        logradouro: 'Rua Muito Legal',
        numero: 123

    }
}

console.log(saudacao)
console.log(exect())
console.log(cliente)

/**
 * a variavel saudacao do primeiro contexto não é a mesma do segundo contexto.
 * em cada contexto diferente posso criar variaveis com o mesmo nome.
 * quando execudo uma variavel no contexto 3 e essa variavel não existe
 * nesse contexto, o js vai procurar por essa variavel nos contextos acimas
 * 2 e 1.
 */