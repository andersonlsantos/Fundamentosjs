const escola = 'Cod3r'

console.log(escola.charAt(4))//vai mostrar a letra que esta no indice 4
console.log(escola.charAt(5))//vai retornar um valor vazio
console.log(escola.charCodeAt(3))//retorna o valor numero 3 dentro da tabela unicode
/*
tambem pode fazer o inverso, por exemplo tem um digito e quer 
*saber que indice aquele digito esta dentro da palavra
*/
console.log(escola.indexOf('3'))
console.log(escola.substring(1))//od3r
console.log(escola.substring(0, 3))//Cod
console.log('Escola '.concat(escola).concat('!'))//Escola Cod3r!
console.log(escola.replace(3, 'e'))//Coder
console.log('Ana,Maria,Pedro'.split(','))//gerar um array
