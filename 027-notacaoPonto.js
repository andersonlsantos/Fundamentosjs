console.log(Math.ceil(6.1))// 7 arredonda para cima ou para o teto

const obj1 = {}
/**
 * para criar dinamicamente um atributo dentro de obj1 posso ussar a notação ponto.
 * exemplo abaixo: obj1.nome
 */
obj1.nome = 'Bola'
//tambem pode criar assim
//obj1['nome'] = 'Bola2'
console.log(obj1.nome)

function obj(nome) {
    this.nome = nome /* nome associado ao objeto que foi criado apardir dessa função, esse nome 
                        ficara visivel para quem criar estanciar uma objeto do tipo obj.
                        em outras palavras  vai ficar publico, visivel fora da função.
                        uma variavel só ficaria visivel dentro do escopo da função, mas
                        como foi usado this agora essa variavel é visivel fora da funçõa*/
}

const obj2 = new obj('Cadeira')//posso acessa a função obj por que agora ela é publica
const obj3 = new obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
