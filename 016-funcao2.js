// Armazenando uma função em uma variavel
//criar uma função anonima(sem nome), só os parentes.
const imprimirSoma = function (a, b){
    console.log(a + b)

}

imprimirSoma(2, 3)

//Armazenando uma função arrow em uma variavel

//nõa vou usar a palavra reservada function(foi substituido por =>) e tambem anonima
const soma = (a, b) => {
    return a + b

}

console.log(soma(2, 3))

//diminuindo a ainda mais a sintaxe
//retorno implícito
//substitui o return
const subtracao = (a, b) => a - b
console.log(subtracao(2, 3))

const imprimir2 = a => console.log(a)
imprimir2('Legal!!!!')
