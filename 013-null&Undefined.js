let valor //não iniciada
console.log(valor)//undefined

valor = null//null sequinifica que a variavel não esta apontando para nenhum lugar da memoria.
console.log(valor)

const produto = {}
console.log(produto.preco)//undefined
console.log(produto)//objeto vazio

produto.preco = 3.50
console.log(produto)

produto.preco = undefined//evite atribuir undefined
console.log(!!produto.preco)//false
console.log(produto)//{ preco: undefined }

produto.preco = null //sem preço
console.log(!!produto.preco)//false
console.log(produto)
