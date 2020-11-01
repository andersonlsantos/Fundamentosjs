const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])//undefined

valores[4] = 10//indice 4 recebe 10
console.log(valores)

valores[10] = 20
console.log(valores)//[ 7.7, 8.9, 6.3, 9.2, 10, <5 empty items>, 20 ]
console.log(valores.length)//acessar a quntidades de valores de dentro do array

valores.push({id: 3}, false, null, 'teste')//função para adicionar novos elementos no array
console.log(valores)

console.log(valores.pop())//função que vai tirar o utimo valor do array, o array perde esse ultimo valor
console.log(valores)

delete valores[0]//outra forma de excluir uma elemento do array
console.log(valores)

console.log(typeof valores)//tipo object
