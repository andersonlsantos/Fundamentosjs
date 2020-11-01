//Processo de destruturação ussando a estrutura do array

const [a] = [10] // array de uma posição
console.log(a)//10

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)//10 9 undefined 0

//destruturação aninhada
/*o primeiro elemento foi egnorado o segundo elemento é um array o primeiro elemento
do segundo array tambem foi ignorado e o segundo elemento do segundo array é nota*/
const [, [, nota]] = [[, 8, 8], [9, 6, 8]]
console.log(nota)//6
