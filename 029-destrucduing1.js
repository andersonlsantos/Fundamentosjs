// novo recurso

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        lougradouro: 'Rua ABC',
        numero: 1000
    }
}

//maneira normal de estrair variaveis a partir do objeto pessoa(usando notação ponto)
console.log(pessoa.idade)
console.log(pessoa.endereco.lougradouro)

//destrucduing é a maneira simplificada de tirar atributos(variaveis) de dentro do objeto(instrutura)

//as chaves representam o operador de destruturação
//vai ser tirado os atributos de dentro do objeto pessoa: nome e idade
//não esata atribuindo pessoa, esta dizendo para tirar nome e idade do objeto pessoa
//esta duas variaveis agora estão disponivel alem do escopo do objeto
const {nome, idade} = pessoa
console.log(nome, idade)// Ana 5

//estraiu os atributos e mudou o nome das variaveis nome para n e idade para i
const {nome: n, idade: i} = pessoa
console.log(n, i)// Ana 5

//esses atributos nõa tem dentro do objeto
const {sobrenome, bemHumorada = true} = pessoa 
console.log(sobrenome, bemHumorada)//undefined true

//para acessar o objeto endereco que esta dentro do objeto pessoa.
//destruturação aninhada
const {endereco: {lougradouro, numero, cep}} = pessoa
console.log(lougradouro, numero, cep)//Rua ABC 1000 undefined

//se tentar acessar um objeto que não existe dentro do objeto pessoa, isso vai agarretar um erro.
//exemplo abaixo:
//const{conta: {ag, num}} = pessoa
//console.log(ag, num)
