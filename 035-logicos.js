/**
 * v e v = v
 * v e f = f
 * f e ? = f
 * 
 * v ou ? = v
 * f ou v = v
 * f ou f = f
 * 
 * xor(ou esclusivo)
 * v xor v = f
 * v xor f = v
 * f xor v = v
 * f xor f = f
 * 
 * !v = f
 * !f = v
 */

function compras (trabalho1, trabalho2) {
    const comprarShorvete = trabalho1 || trabalho2 // || = ou
    const comprarTv50 = trabalho1 && trabalho2 // && = e
    /**
     * aqui vamos ussar o operador ou esclusivo, nõa existe um operador ou exclusivo
     * em javaescript para trabalhar com tipos booleanos existe um operador bit a bit
     * ou esclusivo.
     * vamos fazer um certo artificio tecnologico abaixo
     */
    //const comprarTv32 = !!(trabalho1 ^ trabalho2) //^ = ou exclusivo bit a bit = bitwise xor
    //podemos ussar a alternativa acima mas vamos utilizar a alternativa abaixo
    // ou exclusivo pode ser simulado com a diferença
    // o operador diferença pode simular o ou exclusivo
    const comprarTv32 = trabalho1 != trabalho2 //!= operador diferença
    const manterSaudavel = !comprarShorvete //operador unario
    /**
     * para finalizar vamos retornar todas as constantes criadas, mas como vamos retornar
     * 4 constantes se o js só suporta um unico retorno? resposta: simples vamos jogar tudo
     * isso dentro de um unico objeto.
     * objeto return
     */
    /**
     * objeto é uma coleção de chave valor(um par com o nome do atributo e o valor que eu
     * quero atribuir).
     * mas o exemplo abaixo não parece ser uma coleção de chave 
     * valor(return {comprarShorvete, comprarTv50, comprarTv32, manterSaudavel}) parece que
     * foi colocado um unico valor, o correto seria ter alquma coisa do tipo exemplo abaixo:
     * return {comprarShorvete: comprarShorvete, ... } e seria feito isso com todos os outros 
     * atributos, ou então poderia ter colocado outro nome de sorvete para o atributo 
     * recebendo o valor a constante comprarSorvete exemplo abaixo:
     * return {sorvete: comprarShorvete, ......}.
     * mas quado é omitido a chave, simplismente passa uma constante, uma variavel no lugar da
     * chave para criação de um objete esse é uma recurso js que é uma criação mais inteligente 
     * de objetos por exemplo ao invez de fazer como no exemplo abaixo:
     * return {comprarShorvete: comprarShorvete,
     * comprarTv50: comprarTv50,
     * comprarTv32: comprarTv30,
     * manterSaudavel: manterSaudavel}
     * o código abaixo é a mesma coisa do exemplo acima com a criação inteligente do js
     * não precissa ficar repetindo chave e valor assim já é criado um objeto de forma 
     * reduzida.
     * mas não deixa de ser chave e valor, internamente o js ta fazendo esse trabalho 
     * de forma automatica(o conceito de objeto continua o mesmo).
     */
    return {comprarShorvete, comprarTv50, comprarTv32, manterSaudavel}
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))
