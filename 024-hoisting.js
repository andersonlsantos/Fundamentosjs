console.log('a =', a)//a = undefined
var a = 2
console.log('a =', a)

function teste() {
    console.log('b =', b)//b = undefined
    var b = 2
    console.log('b =', b)
}

teste()

console.log('c =', c)
let c = 2
console.log('c =', c)//vai gerar um erro dizendo que c não esta definido

/*
Hosting é uma comportamento padrão de mover a declaração para o topo,
seja o topo do contesto que esta trabalhando ou seja o topo da função.
Funciona com var e não funciona com let. 
*/
