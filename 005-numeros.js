const peso1 = 1.0
//outra forma de criar um numero
const peso2 = Number('2.0')

console.log(peso1, peso2)

// metodo para fazer alguns testes

// teste para saber se o peso1 é um valor inteiro ou nõa
console.log(Number.isInteger(peso1))//true
console.log(Number.isInteger(peso2))//true


const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media)
//para controlar a quantidades de casa decimais
console.log(media.toFixed(2))

//forma de converter uma valor numerico em estring
console.log(media.toString())
//transformar a media em uma string em valor binario
console.log(media.toString(2))

console.log(typeof media)//tipo number

console.log(typeof Number)//função
