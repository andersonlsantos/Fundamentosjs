/*
*esse resultado vai ser infinito porque cada vez que se aproxima do zero
*o resultado é maior ex; console.log(7 / 0.0001) o resultado vai ser 70000,
*então se dividir por zero o resultado vai ser infinito e pra isso o javaescript
*tem um tipo esclusivo chamado Infinity.
*/
console.log(7 / 0)
console.log('10' / 2) //resultado 5
console.log('10,2' / 2)// NaN
console.log('Show' * 2)// NaN
/* não vai retornar o resultdo 0,8 por causa da espesificação do tipo de ponto
 *flutuante que o javaescript suporta, se ele fose procurar uma precizão de ser 
 *0,8 mesmo, a espesificação é muinto mais lenta que a que o javaescript suporta
 */
console.log(0.1 + 0.7)
console.log((10).toString())//console.log(10.toString()) vai gerar um erro
console.log((10.345).toFixed(2))
console.log((10).toFixed(2))
