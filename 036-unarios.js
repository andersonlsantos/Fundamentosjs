let num1 = 1
let num2 = 2
 
num1++
console.log(num1)//2
//tanto faz ussar o -- ou ++ antes ou depois da variavel ex: --num1 == num1--
--num1
console.log(num1)//1
/**
 * a forma préfixada(--num1) é mais apresada(mais aguniada)
 * do que a forma pósfixada(mum1--), a forma préfixada tem
 * uma presedencia maior do que a forma pósfixada.
 * uma expreção sempre tem uma ordem de presedencia, a expreção
 * nunca sai executando da esquerda para direita sem ohlar a ordem 
 * de presedencia.
 * existe uma tabela de presedencia dentro das operações por exemplo:
 * primiero () depoi, [] depois, {}, tambem, potencia e raizes, depois
 * multiplicação e divisão, depois adiçõa e subtração e tambem --préfixado 
 * depois pósfixado--.
 */
//desafio 
console.log(++num1 === num2--)//true présta atenção que vc vai entender por que deu true(seu cabeção).
//o préfixado foi executado antes da comparação e o pósfixado foi executado depois de comparar.

console.log(num1 == num2)//false
