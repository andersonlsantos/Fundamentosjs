/*
//vamos mostrar uma situação de erro e como pode ser tratado esse erro.
function imprimirNomeGritado(obj) {
    console.log(obj.name.toUpperCase() + '!!!')//toUpperCase() torna as letras maiusculas, + concatena.
}

obj = {nome: 'Anderson'}//esse atributo nome não é o mesmo da função(name).
imprimirNomeGritado(obj)//vai gerar um erro por que não é possivel chamar o toUpperCase de algo que não esta definido
*/

/**
 * nesse caso o que se pode fazer em um código que potencialmente pode gerar erro como o exemplo acima:
 * try{} é um bloco de código que dentro dele é colocado uma sentencia de código que pode gerar erro,
 * gerando um erro para tratar esse erro, coloca um outro bloco associado ao bloco try, um bloco do tipo
 * catch () {}, quando gerar um erro dentro do bloco try automaticament o erro vai cair dentro do bloco
 * catch e dentro de catch podemos tratar o erro, por exemplo mostrar uma mensagem para o usuario, pegar o
 * erro que foi gerado e fazer algum tipo de tratamento.
 */

function tratarErroELancar (erro) {
    //throw new Error('Atenção Erro, notifique nosso suporte tecnico! ')//throw palavra reservada para lançar ou relançar um erro
    //throw 10
    //throw true
    //throw 'Mensagem com espaço'
    //tambem pode lançar um objeto
    throw {
        nome: erro.name,
        msg: erro.message,
        msg: new Date
    }
}
 function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    }catch (e) {
        tratarErroELancar(e)//uma função com o erro(e) como parametro
    } finally { //outra maneira de finalizar um erro
        console.log('Final')
    }
    
}

obj = {nome: 'Anderson'}
imprimirNomeGritado(obj)
