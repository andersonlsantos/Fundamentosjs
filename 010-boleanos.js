let isAtivo = false//literal falso
console.log(isAtivo)

isAtivo = true//literal verdadeiro
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)//true
console.log(!isAtivo)//false
console.log(!true)//false
console.log(!!true)//true

console.log('os verdadeiros....')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')//string não vazia
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))
console.log(!!(isAtivo = Infinity))

console.log('os falsos....')
console.log(!!0)
console.log(!!'')//string vazia
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))
 
console.log('pra finalizar.....')
console.log(!!('' || null || ' '))
console.log(('' || null || 'epa'))//nesse caso vai retornar o unico valor verdadeiro

let nome = ''
console.log(nome || 'Desconhecido')//retorna desconhecido porque o nome deu valor false

nome = 'Anderson e Amanda se Amam'
console.log(nome || 'Desconhecido')
