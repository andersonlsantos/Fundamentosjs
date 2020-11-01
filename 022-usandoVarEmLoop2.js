const funcs = [] //array vazio

for (var i = 0; i < 10; i++) {
    funcs.push(function () {
        console.log(i)

    })
}

funcs[2]()//10
funcs[8]()//10
//não vai retornar 2 e 8 por que esse é um erro istorico do javascript
