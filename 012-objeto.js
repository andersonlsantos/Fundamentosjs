const prod1 = {}
prod1.nome = 'Celular Utra Mega'//nome foi criado dinamicamente detro do objeto: indentificador nome e valor 'Celular Ultra Mega'.
/*
*O que é objeto: é uma colção de chave e valor, vc tem um nome do atributo ou seja o indendificador
*e voce passa um valor para ele que pode ser um texto, pode ser um numero, pode ser um boolean,
*pode ser uma função, mas sempre um objeto é uma coleção de pares, chaves e valores.
*Um objeto pode ter um outro objeto dentro dele.
 */
prod1.preço = 4998.90
prod1['Desconto Legal'] = 0.40 //para uasar espaço no nome do indentificador

console.log(prod1)

//Existe outra forma de criar objeto usando a notação literal
const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj: {
        blabla: 1,
        obj: {
            blabla: 2
        }
    }
}

console.log(prod2)
