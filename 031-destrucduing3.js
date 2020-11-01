//ussando a destruturação no ambito de uma função

/**
 * função vai retornar uma numero aleatorio.
 * vai ser passado para a função dois atributos dentro de um oprador
 * destruc.
 * isso siquinifica que vai ser passado um objeto para uma função e
 * dentro dessa função randomica, em vez de acessar o objeto .min ou
 * objeto .max, eu quéro que ele ja tire de dentro do objeto o atributo min e
 * o atributo max e ja me entregue esses dois atributos prontos, sem precissar
 * ussar a notação ponto para acessar de dentro do objeto.
 */
function rand({min = 0, max = 1000}){ //{min = 0, max = 1000} operador destruc
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

//console.log(rand({max: 50, min: 40}))//rand({max: 50, min: 40}) é um objeto não confundir com destrc.
/*
mas a operação acima tambem pode ser feito como o exemplo abaixo, criando primeiro uma const objeto,
e depois eu passo o objeto como parametro na função rand.
*/
const obj = {min: 50, max: 40}
console.log(rand(obj))

//outra possibilidade
console.log(rand({min: 955}))
//tambem pode passar um objeto vasio
console.log(rand({}))
//tambem da pra fazer um teste para passar um numero randomico sem passar nenhum objeto.
//nesse caso vai gerar um erro, por que ele vai tentar destruturar algo que esta undefind ou null.
//console.log(rand())
