console.log(typeof Object)//function
console.log(typeof new Object())//object= agora tem um object criado apartir de uma função (pode usar ou não colchetes)

/**
 * pode ser feito a mesma coisa com uma função que eu criar,
 * exemplo abaixo:
 */
const Cliente = function() {}
console.log(typeof Cliente)//function
console.log(typeof new Cliente())//object = Cliente pode usar ou não colchetes

class Produto {}
console.log(typeof Produto)//function
console.log(typeof new Produto)//object
