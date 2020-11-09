//funçõa arrow
/*
*nota é o parametro da função, => é a função e o que vier de 
*depois vai ser uma expresõa que vai retornar vedadeiro ou falso.
*? = operador ternario(uma o peração que tem tres operando)
*nota > 7 = true(Aprovado), nota < 7 = false(Reprovado)
*a primeira parte do operador ternario é uma expreção relacional(nota >= 7)
*/
const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'

console.log(resultado(7.1))
console.log(resultado(6.7))

/*
a resposta de um operador ternario é retornar true ou false 
e pode ser armazenado em uma constante.
*/
const status = nota >= 7 ? 'Aprovado' : 'Reprovado'
