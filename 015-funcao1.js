// Função sem retorno
/*
uma ação ela executa um processo baseado na sentença de código que a gente já viu lá no começo, a função
ela define um bloco associado, a gente viu que bloco em JavaScript é delimitado por Chaves, então você tem a função.
Logo depois você tem um corpo da função, que é o bloco no qual tem todas as sentenças de código que serão
executadas.
função nada mais é do que um trecho de código que você deu um nome
pra ele.
E você pode usar esse trecho do código onde você quer chamada em seu programa, então uma função como
uma receita de bolo ela recebe alguns ingredientes de entradas que são os dados que você vai receber
dentro dessa função, você vai fazer todo o passo a passo é a receita.
Mistura isso com aquilo.
*/
/*
Nesse exemplo eu vou mostrar para vocês duas funções, uma que recebe dados e retorna alguma coisa e outra
que recebe e não retorna nada.
*/

//(a, b) variavel ou parametro
function imprimirsoma (a, b) {
    console.log(a + b)
}

imprimirsoma(2, 3)//chamar a função
imprimirsoma(2)//variavel a = 2 e variavel b = Indefined, resultdo NaN(not a number)
imprimirsoma(2, 3 ,4 ,6, 9, 8, 1)//vai ignorar o resto
imprimirsoma()//NaN

//Função com retorno

//por padrão a variavel a é zero
function soma(a, b = 0){
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
