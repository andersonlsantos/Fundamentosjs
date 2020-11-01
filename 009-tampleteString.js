const nome = 'Amanda'
const concatenizacao = 'Ola ' + nome + '!'/*não posso quebrar uma linha aqui mas posso qubrar dentro de um
                                           *tamplete de string.*/
const tamplate = `
    Olá
    ${nome}!`

console.log(concatenizacao, tamplate)

//expressões...
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei ... ${up('cuidado!')}`)
