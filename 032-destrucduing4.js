/*
* vamos fazer a mesma coisa que na aula passada só que usando array
* dentro dos parametros de uma função.
* array pode ser que confunda quem é o minimo e quem é o maximo, agente
* vai fazer uma troca bem inteligente tambem usando o operador destruc
* quando o maximo for menor que o minimo.
*/

//no ponto de vista da escrita é a mesma coisa da vez passada só substituindo as chaves por colchetes
function rand([min = 0, max = 1000]){ 
    //se o min for maior que o max faça isso, inverta as duas variavels.
    if (min > max) [min, max] = [max, min]
    // if (min > max) [min, max](aqui estou usando o operador destruc) = [max, min](aqui estou criando um array).
    //quando vc destrutura o que recebe não é uma array e sim dois atributos min e max.
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)//floor arredonda para bixo(chão).

}

/**
 * como eu estou chamando apartir de um array, não é precisso ussar o nome do
 * atributo como da vez passada( console.log(rand({max: 50, min: 40})) ).
 */
console.log(rand([50, 40]))
//poderia passar apenas um dos dois.
console.log(rand([992]))
console.log(rand([, 10]))
console.log(rand([]))
//console.log(rand())// vai gerar erro.
